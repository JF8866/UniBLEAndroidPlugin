package io.dcloud.uniplugin;

import android.app.Activity;
import android.app.Application;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.IBinder;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.ble.ble.BleService;

import io.dcloud.feature.uniapp.UniAppHookProxy;

// io.dcloud.uniplugin.TestModuleAppProxy
public class TestModuleAppProxy implements UniAppHookProxy {

    private static final String TAG = "TestModuleAppProxy";

    private final ServiceConnection mConn = new ServiceConnection() {
        @Override
        public void onServiceConnected(ComponentName name, IBinder service) {
            Log.i(TAG, "服务绑定成功 " + name.getClassName());
            if (BleService.class.getName().equals(name.getClassName())) {
                LeProxy.getInstance().setBleService(service);
            }
        }

        @Override
        public void onServiceDisconnected(ComponentName name) {
        }
    };

    private final Application.ActivityLifecycleCallbacks callbacks = new Application.ActivityLifecycleCallbacks() {
        @Override
        public void onActivityCreated(@NonNull Activity activity, @Nullable Bundle savedInstanceState) {
            String className = activity.getClass().getName();
            Log.i(TAG, "onActivityCreated() - " + className);
            if (className.equals("io.dcloud.PandoraEntryActivity")) {
                activity.bindService(new Intent(activity, BleService.class), mConn, Context.BIND_AUTO_CREATE);
            }
        }

        @Override
        public void onActivityStarted(@NonNull Activity activity) {
        }

        @Override
        public void onActivityResumed(@NonNull Activity activity) {
        }

        @Override
        public void onActivityPaused(@NonNull Activity activity) {
        }

        @Override
        public void onActivityStopped(@NonNull Activity activity) {
        }

        @Override
        public void onActivitySaveInstanceState(@NonNull Activity activity, @NonNull Bundle outState) {
        }

        @Override
        public void onActivityDestroyed(@NonNull Activity activity) {
            String className = activity.getClass().getName();
            Log.e(TAG, "onActivityDestroyed() - " + className);
            if (className.equals("io.dcloud.PandoraEntryActivity")) {
                activity.unbindService(mConn);
            }
        }
    };

    @Override
    public void onCreate(Application application) {
        //可写初始化触发逻辑
        Log.e(TAG, "onCreate()");
        application.registerActivityLifecycleCallbacks(callbacks);
    }

    @Override
    public void onSubProcessCreate(Application application) {
        //子进程初始化回调
        Log.e(TAG, "onSubProcessCreate()");
    }
}

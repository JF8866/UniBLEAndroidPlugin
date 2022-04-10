package io.dcloud.uniplugin;

import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothGatt;
import android.bluetooth.BluetoothGattCharacteristic;
import android.bluetooth.BluetoothGattDescriptor;
import android.bluetooth.BluetoothProfile;
import android.content.Intent;
import android.os.IBinder;
import android.util.Log;

import androidx.localbroadcastmanager.content.LocalBroadcastManager;

import com.ble.api.DataUtil;
import com.ble.ble.BleCallBack;
import com.ble.ble.BleService;
import com.ble.ble.constants.BleUUIDS;
import com.ble.ble.oad.OADListener;
import com.ble.ble.oad.OADManager;
import com.ble.ble.oad.OADProxy;
import com.ble.ble.oad.OADType;
import com.ble.ble.util.GattUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Created by JiaJiefei on 2017/2/17.
 */
public class LeProxy {
    private static final String TAG = "TestModule#LeProxy";

    private final List<BleCallBack> mCallBacks = new ArrayList<>();

    private static LeProxy mInstance;

    private BleService mBleService;
    private boolean mEncrypt = false;

    private LeProxy() {
    }

    public static LeProxy getInstance() {
        if (mInstance == null) {
            mInstance = new LeProxy();
        }
        return mInstance;
    }


    public void setBleService(IBinder binder) {
        mBleService = ((BleService.LocalBinder) binder).getService(mBleCallBack);
        // mBleService.setMaxConnectedNumber(4);// 设置最大可连接从机数量，默认为4
        mBleService.setConnectTimeout(5000);//设置APP端的连接超时时间（单位ms）
        mBleService.initialize();// 必须调用初始化函数
        setEncrypt(false);
    }

    public void setEncrypt(boolean encrypt) {
        mEncrypt = encrypt;
        if (mBleService != null) {
            //设置是否解密接收的数据（仅限于默认的接收通道【0x1002】，依据模透传块数据是否加密而定）
            mBleService.setDecode(encrypt);
        }
    }

    public OADProxy getOADProxy(OADListener listener, OADType type) {
        if (mBleService != null) {
            return OADManager.getOADProxy(mBleService, listener, type);
        }
        return null;
    }

    public boolean connect(String address, boolean autoConnect) {
        if (mBleService != null) {
            return mBleService.connect(address, autoConnect);
        }
        return false;
    }

    public boolean disconnect(String address) {
        if (mBleService != null) {
            mBleService.disconnect(address);
            return true;
        }
        return false;
    }

    public BluetoothGatt getBluetoothGatt(String address) {
        if (mBleService != null) {
            return mBleService.getBluetoothGatt(address);
        }
        return null;
    }

    /**
     * 获取已连接的设备
     */
    public List<BluetoothDevice> getConnectedDevices() {
        if (mBleService != null) {
            return mBleService.getConnectedDevices();
        }
        return new ArrayList<>();
    }

    /**
     * TODO 向默认通道0x1001发送数据
     *
     * @param address 设备地址
     * @param data    发送的数据
     */
    public boolean send(String address, String serviceUuid, String characteristicUuid, byte[] data) {
        if (mBleService != null) {
            BluetoothGatt gatt = mBleService.getBluetoothGatt(address);
            BluetoothGattCharacteristic characteristic = GattUtil.getGattCharacteristic(gatt,
                    UUID.fromString(serviceUuid), UUID.fromString(characteristicUuid));
            return mBleService.send(gatt, characteristic, data, mEncrypt);
        }
        return false;
    }

    public boolean send(String address, String serviceUuid, String characteristicUuid, String hex) {
        if (mBleService != null) {
            BluetoothGatt gatt = mBleService.getBluetoothGatt(address);
            BluetoothGattCharacteristic characteristic = GattUtil.getGattCharacteristic(gatt,
                    UUID.fromString(serviceUuid), UUID.fromString(characteristicUuid));
            return mBleService.send(gatt, characteristic, hex, mEncrypt);
        }
        return false;
    }

    public boolean read(String address, String serviceUuid, String characteristicUuid) {
        if (mBleService != null) {
            BluetoothGatt gatt = mBleService.getBluetoothGatt(address);
            BluetoothGattCharacteristic characteristic = GattUtil.getGattCharacteristic(gatt,
                    UUID.fromString(serviceUuid), UUID.fromString(characteristicUuid));
            return mBleService.read(gatt, characteristic);
        }
        return false;
    }


    /**
     * 检测设备是否已连接
     *
     * @param address 设备地址
     * @return true表示已连接
     */
    public boolean isConnected(String address) {
        if (mBleService != null && address != null) {
            return mBleService.getConnectionState(address) == BluetoothProfile.STATE_CONNECTED;
        }
        return false;
    }


    /**
     * 开启指定通道的notify
     */
    public boolean setNotification(String address, String serviceUuid, String characteristicUuid, boolean enable) {
        if (mBleService == null) return false;

        BluetoothGatt gatt = mBleService.getBluetoothGatt(address);
        BluetoothGattCharacteristic c = GattUtil.getGattCharacteristic(gatt,
                UUID.fromString(serviceUuid), UUID.fromString(characteristicUuid));
        return mBleService.setCharacteristicNotification(gatt, c, enable);
    }


    /**
     * 请求更新MTU，会触发onMtuChanged()回调，如果请求成功，则APP一次最多可以发送MTU-3字节的数据，
     * 如默认MTU为23，APP一次最多可以发送20字节的数据
     * <p>
     * 注：更新MTU要求手机系统版本不低于Android5.0
     */
    public boolean requestMtu(String address, int mtu) {
        if (mBleService != null) {
            return mBleService.requestMtu(address, mtu);
        }
        return false;
    }

    public void addBleCallback(BleCallBack callBack) {
        if (!mCallBacks.contains(callBack)) {
            mCallBacks.add(callBack);
        }
    }

    public void removeBleCallback(BleCallBack callBack) {
        mCallBacks.remove(callBack);
    }

    /**
     * 这里集合了所有的蓝牙交互事件
     * 注意事项！！！：回调方法所在线程不能有阻塞操作，否则可能导致数据发送失败或者某些方法无法正常回调
     */
    private final BleCallBack mBleCallBack = new BleCallBack() {
        @Override
        public void onConnected(String address) {
            //todo !!!这里只代表手机与模组建立了物理连接，APP还不能与模组进行数据交互
            Log.i(TAG, "onConnected() - " + address);
            for (BleCallBack cb : mCallBacks) {
                cb.onConnected(address);
            }
        }

        @Override
        public void onConnectTimeout(String address) {
            Log.e(TAG, "onConnectTimeout() - " + address);
            for (BleCallBack cb : mCallBacks) {
                cb.onConnectTimeout(address);
            }
        }

        @Override
        public void onConnectionError(String address, int error, int newState) {
            Log.e(TAG, "onConnectionError() - " + address + " error code: " + error + ", new state: " + newState);
            for (BleCallBack cb : mCallBacks) {
                cb.onConnectionError(address, error, newState);
            }
        }

        @Override
        public void onDisconnected(String address) {
            Log.e(TAG, "onDisconnected() - " + address);
            for (BleCallBack cb : mCallBacks) {
                cb.onDisconnected(address);
            }
        }

        @Override
        public void onServicesDiscovered(String address) {
            //TODO !!!检索服务成功，到这一步才可以与从机进行数据交互，有些手机可能需要延时几百毫秒才能交互数据
            Log.i(TAG, "onServicesDiscovered() - " + address);
            for (BleCallBack cb : mCallBacks) {
                cb.onServicesDiscovered(address);
            }
        }


        @Override
        public void onCharacteristicChanged(String address, BluetoothGattCharacteristic characteristic) {
            //接收到模块数据
            byte[] data = characteristic.getValue();
            Log.i(TAG, "onCharacteristicChanged() - " + address + " uuid=" + characteristic.getUuid().toString()
                    + "\n len=" + (data == null ? 0 : data.length)
                    + " [" + DataUtil.byteArrayToHex(data) + ']');

            for (BleCallBack cb : mCallBacks) {
                cb.onCharacteristicChanged(address, characteristic);
            }
        }

        @Override
        public void onCharacteristicRead(String address, BluetoothGattCharacteristic characteristic, int status) {
            if (status == BluetoothGatt.GATT_SUCCESS) {
                //读取到模块数据
                Log.i(TAG, "onCharacteristicRead() - " + address + " uuid=" + characteristic.getUuid().toString()
                        + "\n len=" + characteristic.getValue().length
                        + " [" + DataUtil.byteArrayToHex(characteristic.getValue()) + ']');
            }
            for (BleCallBack cb : mCallBacks) {
                cb.onCharacteristicRead(address, characteristic, status);
            }
        }

        @Override
        public void onCharacteristicWrite(String address, BluetoothGattCharacteristic characteristic, int status) {
            //调试时可以在这里打印status来看数据有没有发送成功
            if (status == BluetoothGatt.GATT_SUCCESS) {
                String uuid = characteristic.getUuid().toString();
                //如果发送数据加密，可以先把characteristic.getValue()获取的数据解密一下再打印
                //byte[] decodedData = new EncodeUtil().decodeMessage(characteristic.getValue());
                Log.i(TAG, "onCharacteristicWrite() - " + address + ", " + uuid
                        + "\n len=" + characteristic.getValue().length
                        + " [" + DataUtil.byteArrayToHex(characteristic.getValue()) + ']');
                for (BleCallBack cb : mCallBacks) {
                    cb.onCharacteristicWrite(address, characteristic, status);
                }
            }
        }

        @Override
        public void onDescriptorWrite(String address, BluetoothGattDescriptor descriptor, int status) {
            String charUuid = descriptor.getCharacteristic().getUuid().toString().substring(4, 8);
            String descUuid = descriptor.getUuid().toString().substring(4, 8);
            Log.i(TAG, "onDescriptorWrite() - 0x" + charUuid + "/0x" + descUuid + " -> " + DataUtil.byteArrayToHex(descriptor.getValue())
                    + ", status=" + status);
            for (BleCallBack cb : mCallBacks) {
                cb.onDescriptorWrite(address, descriptor, status);
            }
        }


        @Override
        public void onMtuChanged(String address, int mtu, int status) {
            if (status == BluetoothGatt.GATT_SUCCESS) {
                Log.i(TAG, "onMtuChanged() - " + address + ", MTU has been " + mtu);
            } else {
                Log.e(TAG, "onMtuChanged() - " + address + ", MTU request failed: " + status);
            }
            for (BleCallBack cb : mCallBacks) {
                cb.onMtuChanged(address, mtu, status);
            }
        }
    };

}
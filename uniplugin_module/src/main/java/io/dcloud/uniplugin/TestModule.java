package io.dcloud.uniplugin;

import android.bluetooth.BluetoothGatt;
import android.bluetooth.BluetoothGattCharacteristic;
import android.bluetooth.BluetoothGattDescriptor;
import android.bluetooth.BluetoothGattService;
import android.os.ParcelUuid;
import android.util.Log;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.ble.ble.BleCallBack;
import com.ble.ble.LeScanRecord;
import com.ble.ble.scan.LeScanResult;
import com.ble.ble.scan.LeScanner;
import com.ble.ble.scan.OnLeScanListener;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;

/**
 * TTC BLE module
 */
public class TestModule extends UniModule {

    private static final String TAG = "TestModule";

    private static final String K_BLE_EVENT = "bleEvent";
    private static final String K_DEVICE_ID = "deviceId";
    private static final String K_STATUS = "status";
    private static final String K_SERVICES = "services";
    private static final String K_CHARACTERISTICS = "characteristics";
    //    private static final String K_DESCRIPTORS = "descriptors";
    private static final String K_SERVICE_ID = "serviceId";
    private static final String K_CHARACTERISTIC_ID = "characteristicId";
    private static final String K_DESCRIPTOR_ID = "descriptorId";
    private static final String K_MTU = "mtu";
    private static final String K_VALUE = "value";
    private static final String K_NOTIFY_ENABLE = "enable";
    private static final String K_CALL_RESULT = "success";
    private static final String K_ERROR = "error";

    private UniJSCallback mJSCallback;

    /*https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=目前对uniapp支持的问题*/
    // module的生命周回调，暂时只支持onActivityDestroy 、onActivityPause、onActivityResult其他暂时不支持
    // 所以 BleService 的绑定以及解绑放到了 TestModuleAppProxy


    private void invokeJSCallback(JSONObject data) {
        if (mJSCallback != null) {
            mJSCallback.invokeAndKeepAlive(data);
        }
    }


    /**
     * 这里集合了所有的蓝牙交互事件
     * 注意事项！！！：回调方法所在线程不能有阻塞操作，否则可能导致数据发送失败或者某些方法无法正常回调
     */
    private final BleCallBack mBleCallBack = new BleCallBack() {
        @Override
        public void onConnected(String address) {
            JSONObject data = new JSONObject();
            data.put(K_BLE_EVENT, "onConnected");
            data.put(K_DEVICE_ID, address);
            invokeJSCallback(data);
        }

        @Override
        public void onConnectTimeout(String address) {
            JSONObject data = new JSONObject();
            data.put(K_BLE_EVENT, "onConnectTimeout");
            data.put(K_DEVICE_ID, address);
            invokeJSCallback(data);
        }

        @Override
        public void onConnectionError(String address, int error, int newState) {
            // error 的定义见 com.ble.gatt.Status
            /*
             * 常见错误码：
             * 19 - 设备端发起的断开
             *  8 - 协议栈超时断开（一般是设备断电、距离太远、信号太弱等原因导致的断线）
             * */
            JSONObject data = new JSONObject();
            data.put(K_BLE_EVENT, "onConnectionError");
            data.put(K_DEVICE_ID, address);
            data.put(K_ERROR, error);
            invokeJSCallback(data);
        }

        @Override
        public void onDisconnected(String address) {
            JSONObject data = new JSONObject();
            data.put(K_BLE_EVENT, "onDisconnected");
            data.put(K_DEVICE_ID, address);
            invokeJSCallback(data);
        }

        @Override
        public void onServicesDiscovered(String address) {
            JSONObject data = new JSONObject();
            data.put(K_BLE_EVENT, "onServicesDiscovered");
            data.put(K_DEVICE_ID, address);
            invokeJSCallback(data);
        }


        @Override
        public void onCharacteristicChanged(String address, BluetoothGattCharacteristic characteristic) {
            JSONObject data = new JSONObject();
            data.put(K_BLE_EVENT, "onNotifyValueChanged");
            data.put(K_DEVICE_ID, address);
            data.put(K_SERVICE_ID, characteristic.getService().getUuid().toString().toUpperCase());
            data.put(K_CHARACTERISTIC_ID, characteristic.getUuid().toString().toUpperCase());
            data.put(K_VALUE, characteristic.getValue());
            invokeJSCallback(data);
        }

        @Override
        public void onCharacteristicRead(String address, BluetoothGattCharacteristic characteristic, int status) {
            JSONObject data = new JSONObject();
            data.put(K_BLE_EVENT, "onReadValueChanged");
            data.put(K_DEVICE_ID, address);
            data.put(K_SERVICE_ID, characteristic.getService().getUuid().toString().toUpperCase());
            data.put(K_CHARACTERISTIC_ID, characteristic.getUuid().toString().toUpperCase());
            data.put(K_VALUE, characteristic.getValue());
            data.put(K_STATUS, status);
            invokeJSCallback(data);
        }

        @Override
        public void onCharacteristicWrite(String address, BluetoothGattCharacteristic characteristic, int status) {
            JSONObject data = new JSONObject();
            data.put(K_BLE_EVENT, "onCharacteristicWrite");
            data.put(K_DEVICE_ID, address);
            data.put(K_SERVICE_ID, characteristic.getService().getUuid().toString().toUpperCase());
            data.put(K_CHARACTERISTIC_ID, characteristic.getUuid().toString().toUpperCase());
            data.put(K_VALUE, characteristic.getValue());
            data.put(K_STATUS, status);
            invokeJSCallback(data);
        }

        @Override
        public void onDescriptorWrite(String address, BluetoothGattDescriptor descriptor, int status) {
            JSONObject data = new JSONObject();
            data.put(K_BLE_EVENT, "onDescriptorWrite");
            data.put(K_DEVICE_ID, address);
            data.put(K_SERVICE_ID, descriptor.getCharacteristic().getService().getUuid().toString().toUpperCase());
            data.put(K_CHARACTERISTIC_ID, descriptor.getCharacteristic().getUuid().toString().toUpperCase());
            data.put(K_DESCRIPTOR_ID, descriptor.getUuid().toString().toUpperCase());
            data.put(K_STATUS, status);
            invokeJSCallback(data);
        }


        @Override
        public void onMtuChanged(String address, int mtu, int status) {
            JSONObject data = new JSONObject();
            data.put(K_BLE_EVENT, "onMtuChanged");
            data.put(K_DEVICE_ID, address);
            data.put(K_MTU, mtu);
            data.put(K_STATUS, status);
            invokeJSCallback(data);
        }
    };

    @UniJSMethod(uiThread = true)
    public void init(UniJSCallback callback) {
        LeProxy.getInstance().addBleCallback(mBleCallBack);
        mJSCallback = callback;
    }

    @UniJSMethod(uiThread = true)
    public void getBLEServices(JSONObject options, UniJSCallback callback) {
        JSONObject res = new JSONObject();
        String[] requiredArgs = {K_DEVICE_ID};
        for (String arg : requiredArgs) {
            if (!options.containsKey(arg)) {
                res.put(K_ERROR, "缺少参数 " + arg);
                callback.invoke(res);
                return;
            }
        }

        String deviceId = options.getString(K_DEVICE_ID);
        BluetoothGatt gatt = LeProxy.getInstance().getBluetoothGatt(deviceId);
        if (gatt != null) {
            List<BluetoothGattService> serviceList = gatt.getServices();
            String[] services = new String[serviceList.size()];
            for (int i = 0; i < services.length; i++) {
                services[i] = serviceList.get(i).getUuid().toString();
            }
            res.put(K_DEVICE_ID, deviceId);
            res.put(K_SERVICES, services);
        } else {
            res.put(K_ERROR, "未连接设备");
        }
        callback.invoke(res);
    }


    @UniJSMethod(uiThread = true)
    public void getBLECharacteristics(JSONObject options, UniJSCallback callback) {
        JSONObject res = new JSONObject();
        String[] requiredArgs = {K_DEVICE_ID, K_SERVICE_ID};
        for (String arg : requiredArgs) {
            if (!options.containsKey(arg)) {
                res.put(K_ERROR, "缺少参数 " + arg);
                callback.invoke(res);
                return;
            }
        }

        String deviceId = options.getString(K_DEVICE_ID);
        String serviceId = options.getString(K_SERVICE_ID);
        BluetoothGatt gatt = LeProxy.getInstance().getBluetoothGatt(deviceId);
        if (gatt != null) {
            BluetoothGattService service = gatt.getService(UUID.fromString(serviceId));
            if (service == null) {
                res.put(K_ERROR, "指定的服务ID不存在");
            } else {
                List<BluetoothGattCharacteristic> characteristicList = service.getCharacteristics();
                JSONObject[] characteristics = new JSONObject[characteristicList.size()];
                for (int i = 0; i < characteristics.length; i++) {
                    BluetoothGattCharacteristic characteristic = characteristicList.get(i);
                    characteristics[i] = createCharacteristicObj(characteristic);
                }
                res.put(K_DEVICE_ID, deviceId);
                res.put(K_SERVICE_ID, serviceId);
                res.put(K_CHARACTERISTICS, characteristics);
            }
        } else {
            res.put(K_ERROR, "未连接设备");
        }
        callback.invoke(res);
    }


    private JSONObject createCharacteristicObj(BluetoothGattCharacteristic c) {
        JSONObject characteristicObj = new JSONObject();
        characteristicObj.put(K_CHARACTERISTIC_ID, c.getUuid().toString());
        List<String> properties = new ArrayList<>();
        int prop = c.getProperties();
        if ((prop & BluetoothGattCharacteristic.PROPERTY_READ) > 0) properties.add("read");
        if ((prop & BluetoothGattCharacteristic.PROPERTY_WRITE) > 0
                || (prop & BluetoothGattCharacteristic.PROPERTY_WRITE_NO_RESPONSE) > 0)
            properties.add("write");
        if ((prop & BluetoothGattCharacteristic.PROPERTY_NOTIFY) > 0) properties.add("notify");
        if ((prop & BluetoothGattCharacteristic.PROPERTY_INDICATE) > 0) properties.add("indicate");
        characteristicObj.put("properties", properties);
        return characteristicObj;
    }


    @UniJSMethod(uiThread = true)
    public void writeCharacteristic(JSONObject options, UniJSCallback callback) {
        Log.i(TAG, "writeCharacteristic()");
        JSONObject res = new JSONObject();
        String[] requiredArgs = {K_DEVICE_ID, K_SERVICE_ID, K_CHARACTERISTIC_ID, K_VALUE};
        for (String arg : requiredArgs) {
            if (!options.containsKey(arg)) {
                Log.e(TAG, "writeCharacteristic() - 缺少参数 " + arg);
                res.put(K_ERROR, "缺少参数 " + arg);
                callback.invoke(res);
                return;
            }
        }

        String deviceId = options.getString(K_DEVICE_ID);
        String serviceId = options.getString(K_SERVICE_ID);
        String characteristicId = options.getString(K_CHARACTERISTIC_ID);
//        byte[] value = options.getBytes(K_VALUE);//TODO 还不知道JS怎么给Java传递ArrayBuffer
        String value = options.getString(K_VALUE);

        Log.i(TAG, "writeCharacteristic() - serviceId=" + serviceId
                + ", characteristicId=" + characteristicId
                + ", value=" + value
        );

        boolean success = LeProxy.getInstance().send(deviceId, serviceId, characteristicId, value);
        res.put(K_CALL_RESULT, success);
        callback.invoke(res);
    }

    private void printJSONObject(JSONObject object) {
        for (String key : object.keySet()) {
            Object o = object.get(key);
            Log.i(TAG, key + "=" + o.getClass().getName());
            if (o instanceof JSONObject) {
                printJSONObject((JSONObject) o);
            } else {
                Log.e(TAG, "Not JSONObject: " + o.getClass().getName());
            }
        }
    }

    @UniJSMethod(uiThread = true)
    public void readCharacteristic(JSONObject options, UniJSCallback callback) {
        JSONObject res = new JSONObject();
        String[] requiredArgs = {K_DEVICE_ID, K_SERVICE_ID, K_CHARACTERISTIC_ID};
        for (String arg : requiredArgs) {
            if (!options.containsKey(arg)) {
                res.put(K_ERROR, "缺少参数 " + arg);
                callback.invoke(res);
                return;
            }
        }

        String deviceId = options.getString(K_DEVICE_ID);
        String serviceId = options.getString(K_SERVICE_ID);
        String characteristicId = options.getString(K_CHARACTERISTIC_ID);
        boolean success = LeProxy.getInstance().read(deviceId, serviceId, characteristicId);
        res.put(K_CALL_RESULT, success);
        callback.invoke(res);
    }


    @UniJSMethod(uiThread = true)
    public void notifyCharacteristic(JSONObject options, UniJSCallback callback) {
        JSONObject res = new JSONObject();
        String[] requiredArgs = {K_DEVICE_ID, K_SERVICE_ID, K_CHARACTERISTIC_ID, K_NOTIFY_ENABLE};
        for (String arg : requiredArgs) {
            if (!options.containsKey(arg)) {
                res.put(K_ERROR, "缺少参数 " + arg);
                callback.invoke(res);
                return;
            }
        }

        String deviceId = options.getString(K_DEVICE_ID);
        String serviceId = options.getString(K_SERVICE_ID);
        String characteristicId = options.getString(K_CHARACTERISTIC_ID);
        boolean enable = options.getBoolean(K_NOTIFY_ENABLE);
        boolean success = LeProxy.getInstance().setNotification(deviceId, serviceId, characteristicId, enable);
        res.put(K_CALL_RESULT, success);
        callback.invoke(res);
    }

    @UniJSMethod(uiThread = true)
    public void connect(JSONObject options, UniJSCallback callback) {
        JSONObject res = new JSONObject();
        if (!options.containsKey(K_DEVICE_ID)) {
            res.put(K_ERROR, "缺少参数 " + K_DEVICE_ID);
            callback.invoke(res);
            return;
        }
        String deviceId = options.getString(K_DEVICE_ID);
        boolean success = LeProxy.getInstance().connect(deviceId, false);
        res.put(K_CALL_RESULT, success);
        callback.invoke(res);
    }


    @UniJSMethod(uiThread = true)
    public void disconnect(JSONObject options, UniJSCallback callback) {
        JSONObject res = new JSONObject();
        if (!options.containsKey(K_DEVICE_ID)) {
            res.put(K_ERROR, "缺少参数 " + K_DEVICE_ID);
            callback.invoke(res);
            return;
        }
        String deviceId = options.getString(K_DEVICE_ID);
        boolean success = LeProxy.getInstance().disconnect(deviceId);
        res.put(K_CALL_RESULT, success);
        callback.invoke(res);
    }


    @UniJSMethod(uiThread = true)
    public void requestMtu(JSONObject options, UniJSCallback callback) {
        JSONObject res = new JSONObject();
        String[] requiredArgs = {K_DEVICE_ID, K_MTU};
        for (String arg : requiredArgs) {
            if (!options.containsKey(arg)) {
                res.put(K_ERROR, "缺少参数 " + arg);
                callback.invoke(res);
                return;
            }
        }
        String deviceId = options.getString(K_DEVICE_ID);
        int mtu = options.getIntValue(K_MTU);
        boolean success = LeProxy.getInstance().requestMtu(deviceId, mtu);
        res.put(K_CALL_RESULT, success);
        callback.invoke(res);
    }


    /*********************************************************************/
    //下面是扫描相关代码
    /*********************************************************************/

    private UniJSCallback mJSScanCallback;

    private final OnLeScanListener mLeScanListener = new OnLeScanListener() {
        @Override
        public void onScanStart() {
        }

        @Override
        public void onLeScan(LeScanResult leScanResult) {
            if (mJSScanCallback != null) {
                Log.d(TAG, "onLeScan() - " + leScanResult.getDevice()
                        + " [" + leScanResult.getDevice().getName() + "]");
                JSONObject res = new JSONObject();
                JSONArray devices = new JSONArray();
                devices.add(createDeviceObj(leScanResult));
                res.put("devices", devices);
                mJSScanCallback.invokeAndKeepAlive(res);
            }
        }

        @Override
        public void onScanFailed(int error) {
            Log.e(TAG, "onScanFailed() - error " + error);
        }

        @Override
        public void onScanStop() {
        }
    };


    /**
     * 创建一个用来回调给JS端的设备对象
     */
    private JSONObject createDeviceObj(LeScanResult leScanResult) {
        /*name	string	蓝牙设备名称，某些设备可能没有
        deviceId	string	用于区分设备的 id
        RSSI	number	当前蓝牙设备的信号强度
        advertisData	ArrayBuffer	当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。
        advertisServiceUUIDs	Array<String>	当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段
        localName	string	当前蓝牙设备的广播数据段中的 LocalName 数据段
        serviceData	Object	当前蓝牙设备的广播数据段中的 ServiceData 数据段，京东小程序不支持*/
        JSONObject deviceObj = new JSONObject();
        deviceObj.put("name", leScanResult.getDevice().getName());
        deviceObj.put("deviceId", leScanResult.getDevice().getAddress());
        deviceObj.put("RSSI", leScanResult.getRssi());
        LeScanRecord record = leScanResult.getLeScanRecord();
        if (record != null) {
            List<ParcelUuid> serviceUuids = record.getServiceUuids();
            List<String> uuids = new ArrayList<>();
            for (ParcelUuid uuid : serviceUuids) {
                uuids.add(uuid.toString());
            }
            deviceObj.put("advertisData", record.getFirstManufacturerSpecificData());
            deviceObj.put("advertisServiceUUIDs", uuids);
            deviceObj.put("localName", record.getLocalName());
            //一般只有一个服务
            if (serviceUuids.size() > 0) {
                deviceObj.put("serviceData", record.getServiceData(serviceUuids.get(0)));
            } else {
                deviceObj.put("serviceData", null);
            }
        } else {
            deviceObj.put("advertisData", null);
            deviceObj.put("advertisServiceUUIDs", null);
            deviceObj.put("localName", null);
            deviceObj.put("serviceData", null);
        }
        return deviceObj;
    }

    @UniJSMethod(uiThread = true)
    public void onBluetoothDeviceFound(UniJSCallback callback) {
        Log.e(TAG, "onBluetoothDeviceFound()");
        mJSScanCallback = callback;
    }

    @UniJSMethod(uiThread = true)
    public void startBluetoothDevicesDiscovery(JSONObject options) {
        Log.e(TAG, "startBluetoothDevicesDiscovery()");
        //扫描最多持续5秒
        LeScanner.startScan(mLeScanListener);
    }

    @UniJSMethod(uiThread = true)
    public void stopBluetoothDevicesDiscovery(UniJSCallback callback) {
        LeScanner.stopScan();
        callback.invoke(null);
    }
}

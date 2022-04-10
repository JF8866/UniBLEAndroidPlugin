<template>
	<view>
		<view>{{deviceName}}</view>
		<view>{{deviceId}}</view>
		<view>{{connectionState}}</view>
		<scroll-view class="logArea" scroll-y="true" :show-scrollbar="true" :scroll-top="scrollTop">
			<view v-for="(item, index) in log" :key="item.deviceId">
				<view>{{item}}</view>
			</view>
		</scroll-view>
		<textarea class="tx-input" placeholder="在此输入16进制数据" @input="bindTextAreaInput" confirm-type="send"
			@confirm="bindTextAreaConfirm" value="313233343536" />
		<button @click="send(txHexValue)">发送</button>
		<button @click="connect()">连接</button>
	</view>
</template>
<script module="vconsole" lang="renderjs">
	import VConsole from '../../vconsole.min.js'
	new VConsole();
</script>
<script>
	// 获取 module 
	const ttcBle = uni.requireNativePlugin("TestModule");
	const util = require('../../util.js'); //require这个js模块

	const SERVICE_UUID = '00001000-0000-1000-8000-00805F9B34FB' //APP收发数据的服务UUID
	const WRITE_UUID = '00001001-0000-1000-8000-00805F9B34FB' //APP发数据的特征UUID
	const NOTIFY_UUID = '00001002-0000-1000-8000-00805F9B34FB' //APP收数据的特征UUID
	const REG_WRITE_UUID = '00001003-0000-1000-8000-00805F9B34FB' //写入寄存器的特征UUID
	const REG_UUID = '00001005-0000-1000-8000-00805F9B34FB' //切换寄存器的特征UUID

	export default {
		data() {
			return {
				deviceId: '',
				deviceName: '',
				connectionState: '未连接',
				log: [],
				scrollTop: 0,
				txHexValue: '313233343536',
			}
		},
		onLoad(option) {
			var that = this

			console.log('onLoad()', option)
			this.deviceId = option.deviceId
			this.deviceName = option.deviceName

			//监听蓝牙交互事件
			ttcBle.init(function(res) {
				that.appendLog(JSON.stringify(res));
				switch (res.bleEvent) {
					case 'onDisconnected':
						that.connectionState = '已断开';
						break;

					case 'onServicesDiscovered':
						that.connectionState = '已连接';
						that.appendLog('连接成功，准备更新MTU');
						//获取GATT服务
						ttcBle.getBLEServices({
							deviceId: res.deviceId
						}, function(res) {
							that.appendLog(JSON.stringify(res));
							//根据服务ID获取特征值
							res.services.forEach(serviceId => {
								ttcBle.getBLECharacteristics({
									deviceId: res.deviceId,
									serviceId: serviceId
								}, function(res) {
									that.appendLog(JSON.stringify(res));
								});
							});
						});
						ttcBle.requestMtu({
							deviceId: res.deviceId,
							mtu: 251
						}, function(res) {});
						break;

					case 'onMtuChanged':
						if (res.status == 0) {
							// MTU更新成功
							that.appendLog('MTU更新成功，准备开启Notify');
						}
						ttcBle.notifyCharacteristic({
							deviceId: res.deviceId,
							serviceId: SERVICE_UUID,
							characteristicId: NOTIFY_UUID,
							enable: true
						}, function(res) {
							console.log(res);
						});
						break;

					case 'onDescriptorWrite':
						if (res.status == 0) {
							//notify开成功，可以进行数据交互了
							that.appendLog('Notify开成功，可以进行数据交互了');
						}
						break;

					case 'onNotifyValueChanged':
						//收到 Notify 数据
						if (res.characteristicId == NOTIFY_UUID) {
							var hexValue = util.array2Hex(res.value);
							that.appendLog('收到数据 <<< ' + hexValue);
						}
						break;

					case 'onCharacteristicWrite':
						if(res.characteristicId == WRITE_UUID && res.status == 0) {
							//发送成功
							var hexValue = util.array2Hex(res.value);
							that.appendLog('发送成功 >>> ' + hexValue);
						}
						break;
				}
			});
			//进入页面自动连接
			that.connect();
		},
		onShow() {
			var that = this
			uni.getSystemInfo({
				success(result) {
					console.info('getSystemInfo success', result)
					that.txAreaWidth = result.screenWidth * result.pixelRatio - 4 // border宽度2px
				},
				fail(error) {
					console.error('getSystemInfo fail', error)
				}
			})
		},
		onUnload() {
			console.warn('onUnload()')
			ttcBle.disconnect({
				deviceId: this.deviceId
			}, function(res) {});
		},
		methods: {
			connect() {
				//连接设备
				this.appendLog('开始连接设备...')
				ttcBle.connect({
					deviceId: this.deviceId
				}, function(res) {});
			},
			bindTextAreaInput(e) {
				this.txHexValue = e.detail.value
				console.log('输入数据: ' + this.txHexValue)
			},
			bindTextAreaConfirm(e) {
				console.log('输入Confirm: ' + e.detail.value)
				this.writeData(e.detail.value)
			},
			send(hexStr) {
				console.log('发送数据: ' + hexStr)
				this.writeData(hexStr)
			},
			writeData(hexStr) {
				ttcBle.writeCharacteristic({
					deviceId: this.deviceId,
					serviceId: SERVICE_UUID,
					characteristicId: WRITE_UUID,
					// value: util.hex2Array(hexStr),//还不知道JS怎么给Java传递ArrayBuffer
					value: hexStr //TODO 使用16进制字符串代替
				}, function(result) {
					console.info('writeCharacteristic', result)
				});
			},
			appendLog(msg) {
				if (this.log.length > 20) this.log.splice(0, 1)
				console.error('this.log.length=' + this.log.length)
				this.log.push(util.formatDate('HH:mm:ss.SSS', new Date()) + ' - ' + msg)
				this.scrollTop = 100 * this.log.length
			},
		}
	}
</script>

<style>
	.tx-input {
		width: 98.4%;
		margin: 6px 0px;
		border: 2px solid #4CD964;
		border-radius: 5px;
	}

	.logArea {
		width: 100%;
		height: 300px;
		background-color: #EEEEEE;
	}
</style>

<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view>
			<view v-for="(item, index) in devices" :key="item.deviceId" @click="onDeviceClick(item)">
				<view><b>{{item.name || item.localName || 'Unknown Device'}}</b></view>
				<view>{{ item.deviceId }}</view>
				<view>{{item.RSSI}}dbm</view>
				<view class="text-area">MfrData: {{ item.mfrData }}</view>
				<view>-----------------------------------------------------</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 获取 module
	const ttcBle = uni.requireNativePlugin("TestModule");
	const util = require('../../util.js'); //require这个js模块

	export default {
		data() {
			return {
				devices: []
			}
		},

		onLoad() {
			var that = this
			console.log('index.vue onLoad()')

			//监听设备扫描
			ttcBle.onBluetoothDeviceFound(function(result) {
				//console.log(result)
				var devices = result.devices
				//E4E1120ACA0C
				for (var i = 0; i < devices.length; i++) {
					//console.log('############ onBluetoothDeviceFound ' + devices[i].deviceId)
					devices[i].mfrData = util.array2Hex(devices[i].advertisData)
					that.devices.push(devices[i])
				}
			});
		}, //onLoad

		onPullDownRefresh() {
			console.log('onPullDownRefresh')
			this.devices = [] //每次扫描先清空列表
			ttcBle.startBluetoothDevicesDiscovery({
				allowDuplicatesKey: false
			});
			setTimeout(function() {
				uni.stopPullDownRefresh();
				ttcBle.stopBluetoothDevicesDiscovery(function(result) {
					console.info('stopBluetoothDevicesDiscovery', result);
				});
			}, 3000);
		}, //onPullDownRefresh

		onShow() {
			console.log('onShow()')
		},
		onUnload() {
			console.warn('onUnload')
		},

		methods: {
			onDeviceClick(device) {
				//点击设备
				console.info('点击设备', device)

				uni.navigateTo({
					url: '../comm/comm?deviceId=' + device.deviceId + '&deviceName=' + device.name
				})
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		/* justify-content: center; */
		word-break: break-all;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

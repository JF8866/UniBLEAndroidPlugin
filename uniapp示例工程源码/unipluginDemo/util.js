function hex2Array(hex) {
	//16进制字符串转字节数组
	var result = [];
	if (hex.length % 2 == 1) hex = '0' + hex
	for (var i = 0; i < hex.length; i += 2) {
		result.push(parseInt(hex.substring(i, i + 2), 16));
	}
	result = Uint8Array.from(result)
	return result.buffer
}

function array2Hex(value) {
	//value类型为 ArrayBuffer
	let arr = new Uint8Array(value)
	var hex = Buffer.from(arr).toString('hex').toUpperCase()
	return hex
}

function string2Array(str) {
	//value类型为 ArrayBuffer
	let arr = new Uint8Array(str.length)
	for (var i = 0; i < str.length; i++) {
		arr[i] = str.charCodeAt(i)
	}
	return arr.buffer
}

function array2String(value) {
	//value类型为 ArrayBuffer
	let arr = new Uint8Array(value)
	var str = String.fromCharCode.apply(null, arr)
	console.error('str=[' + str + ']')
	return str
}

function formatDate(fmt, date) {
	let ret;
	const opt = {
		"y+": date.getFullYear().toString(), // 年
		"M+": (date.getMonth() + 1).toString(), // 月
		"d+": date.getDate().toString(), // 日
		"H+": date.getHours().toString(), // 时
		"m+": date.getMinutes().toString(), // 分
		"s+": date.getSeconds().toString(), // 秒
		"S+": date.getMilliseconds().toString() // 毫秒
		// 有其他格式化字符需求可以继续添加，必须转化成字符串
	};
	for (let k in opt) {
		ret = new RegExp("(" + k + ")").exec(fmt);
		if (ret) {
			fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
		};
	};
	return fmt;
}

module.exports = {
	hex2Array: hex2Array,
	array2Hex: array2Hex,
	string2Array: string2Array,
	array2String: array2String,
	formatDate: formatDate
}

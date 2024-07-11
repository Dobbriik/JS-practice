function getArr(json) {
	return JSON.parse(json)
}

try {
	let arr = getArr('[1,2,3,4,5]')
	console.log(arr)
} catch (error) {
	console.log('error parse')
}

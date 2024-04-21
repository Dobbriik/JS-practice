;(function () {
	let objects = {}
	objects.func = function () {
		console.log('object1')
	}
	objects.func1 = function () {
		console.log('object2')
	}
	objects.func2 = function () {
		console.log('object3')
	}
	window.objects = objects
})()

export default objects

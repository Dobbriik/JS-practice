// const module = {
// 	find: function () {
// 		console.log('object')
// 	},
// }
// ;(function () {
// 	const module = {}
// 	module.find = function () {
// 		console.log('object')
// 	}
// 	module.find2 = function () {
// 		console.log('object2')
// 	}
// 	window.module = module
// })()
const newMap = function (arr, cb) {
	let newArr = []
	for (const elem of arr) {
		let newElem = cb(elem)
		newArr.push(newElem)
	}
	return newArr
}
const newFind = function (arr, cb) {
	for (const elem of arr) {
		if (cb(elem)) {
			return elem
		}
	}
	return undefined
}
//mapObject_.mapObject(object, iteratee, [context])
//Как map, только для объектов. Преобразует поочерёдно значение каждого поля объекта.

// _.mapObject({start: 5, end: 12}, function(val, key) {
//   return val + 5;
// });
// => {start: 10, end: 17}

const newMapObject = function (object, cb) {
	let newObject = {}
	for (const key in object) {
		newObject[key] = cb(object[key])
	}
	return newObject
}

export { newFind, newMap, newMapObject }

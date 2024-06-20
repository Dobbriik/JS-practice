//Оператор spread разлагает любой объект, у которого есть итератор. При этом будет браться итератор по умолчанию. Давайте посмотрим на примере. Пусть у нас есть следующая коллекция Map:

let map = new Map()
map.set('a', 1)
map.set('b', 2)
map.set('c', 3)

let arr = [...map]
console.log(arr) // [['a', 1], ['b', 2], ['c', 3]]

let arrKeys = [...map.keys()]
console.log(arrKeys) // ['a', 'b', 'c']

let arrValues = [...map.values()]
console.log(arrValues) // [1, 2, 3]

//Разложите спредом следующий объект:
let obj = {
	a: 1,
	b: 2,
	c: 3,
	[Symbol.iterator]: function* () {
		for (let key in this) {
			yield this[key]
		}
	},
}

let objArr = [...obj[Symbol.iterator]()]
console.log(objArr)

let obj = {
	a: 1,
	b: 2,
	c: 3,
}

obj[Symbol.iterator] = function* () {
	for (const key in this) {
		yield obj[key]
	}
}

for (const iterator of obj) {
	console.log(iterator)
}

//Сделайте объект, который можно перебрать циклом for-of. Пусть в элемент цикла попадает объект, в ключе key которого будет ключ перебираемого объекта, а в ключе val - значение. Пример:

let objNew = { a: 1, b: 2, c: 3 }

objNew[Symbol.iterator] = function* () {
	for (const key in this) {
		yield { key: key, val: this[key] }
	}
}

for (let elem of objNew) {
	console.log(elem)
}

function* func(obj) {
	for (let key in obj) {
		yield obj[key]
	}
}

let iter = func({ a: 1, b: 2, c: 3 })

for (let elem of iter) {
	console.log(elem) // 1, 2, 3
}

//Сделайте итератор, который будет перебирать объект и каждым вызовом возвращать массив, в нулевом элементе которого будет лежать ключ, а в первом элементе - значение элемента объекта. Пример:

function* iterArr(obj) {
	for (const key in obj) {
		yield [key, obj[key]]
	}
}

let newIter = iterArr({ a: 1, b: 2, c: 3 })

for (const elem of newIter) {
	console.log(elem)
}

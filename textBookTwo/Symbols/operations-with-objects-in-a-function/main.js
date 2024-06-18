let obj = { a: 1, b: 2, c: 3 }

let sym = Symbol()

obj[sym] = function () {
	console.log(this) // {a: 1, b: 2, c: 3}
	let sum = 0

	for (const key in this) {
		sum += this[key]
	}
	console.log(sum)
}

obj[sym]()

//Описанным в уроке способом добавьте в массив функцию, которая будет возвращать сумму элементов массива.

let arr = [1, 2, 3]

let arrSym = Symbol()

arr[arrSym] = function () {
	let sum = 0
	for (const elem of this) {
		sum += elem
	}
	console.log(sum)
}

arr[arrSym]()

arr.push(4, 5, 6)

console.log(arr)
arr[arrSym]()

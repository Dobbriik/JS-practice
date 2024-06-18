//С помощью символов в объекты можно добавлять функции и эти функции не будут участвовать в переборе. Давайте попробуем. Пусть у нас есть объект:

let obj = { a: 1, b: 2, c: 3 }
let sym = Symbol()

obj[sym] = function () {
	console.log('!!!')
}

for (let key in obj) {
	console.log(obj[key]) // 1, 2, 3
}

let func = obj[sym]
func()

//Можно сократить код:
obj[sym]()

//Добавьте в объект функцию, которая будет выводить текущее время. Вызовите эту функцию.

let dataSym = Symbol()

obj[dataSym] = function () {
	let date = new Date()

	console.log(
		date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
	)
}

obj[dataSym]()

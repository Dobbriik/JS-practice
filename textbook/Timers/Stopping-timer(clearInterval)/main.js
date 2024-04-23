// //
// let timerId1 = setInterval(function () {
// 	console.log('!')
// }, 1000)

// alert(timerId1) // выведет номер таймера

// let i = 0

// let timerId = setInterval(function () {
// 	console.log(++i)

// 	if (i >= 10) {
// 		clearInterval(timerId) // останавливает setInterval
// 	}
// }, 1000)

// Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.

let j = 10

let idTimer = setInterval(function () {
	if (j > 0) {
		console.log(j--)
	}
}, 1000)

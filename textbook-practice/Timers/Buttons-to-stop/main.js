//
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')

let timerId

start.addEventListener('click', function () {
	timerId = setInterval(function () {
		console.log('!')
	}, 1000)
})

// Останавливаем таймер:
stop.addEventListener('click', function () {
	clearInterval(timerId)
})

//Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.

//По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.

let start1 = document.querySelector('#start1')
let stop1 = document.querySelector('#stop1')
let i = 5
let idTimer

start1.addEventListener('click', function add() {
	idTimer = setInterval(function () {
		console.log(i--)
		if (i < 0) {
			clearInterval(idTimer)
		}
	}, 1000)
	start1.removeEventListener('click', add)
})

stop1.addEventListener('click', function () {
	clearInterval(idTimer)
})

//Некоторый программист написал код, который по нажатию на кнопку запускает таймер, выводящий в консоль текущий момент времени:
// 1

// let start2 = document.querySelector('#start2')
// let stop2 = document.querySelector('#stop2')
// let timerId1
// start2.addEventListener('click', function () {
// 	timerId1 = setInterval(function () {
// 		let date = new Date()
// 		console.log(date.getMinutes() + ' ' + date.getSeconds())
// 	}, 1000)
// })

// stop2.addEventListener('click', function () {
// 	clearInterval(timerId1)
// })

// 2

let start2 = document.querySelector('#start2')
let stop2 = document.querySelector('#stop2')

let timerId2

start2.addEventListener('click', function () {
	timerId2 = setInterval(function () {
		let date = new Date()
		console.log(date.getMinutes() + ' ' + date.getSeconds())
	}, 1000)
})

stop2.addEventListener('click', function () {
	clearInterval(timerId2)
})

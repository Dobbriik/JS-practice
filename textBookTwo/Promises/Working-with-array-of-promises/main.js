//

let promises = [
	new Promise(resolve => setTimeout(() => resolve(1), 1000)),
	new Promise(resolve => setTimeout(() => resolve(2), 2000)),
	new Promise(resolve => setTimeout(() => resolve(3), 3000)),
]

// Promise.all(promises).then(function (res) {
// 	console.log(res) // выведет [1, 2, 3] - результаты всех промисов
// })
// Promise.race(promises).then(function (res) {
// 	console.log(res) // выведет 1 - результат первого выполнившегося промиса
// })

//Сделайте функцию, возвращающую промис, внутри которого установлена случайная задержка от 1 до 10 секунд. Пусть своим результатом промис возвращает эту задержку. С помощью цикла и вашей функции заполните массив 10-ю промисами.

//Используя массив промисов из предыдущей задачи сделайте так, чтобы в консоль вывелся результат первого сработавшего промиса.

//Используя массив промисов из предыдущей задачи сделайте так, чтобы в консоль вывелась сумма результатов всех промисов.

function getPromiseTime() {
	let randomDelay = Math.floor(Math.random() * 10 + 1)
	let inSecond = Number(randomDelay + '000')
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve(randomDelay)
		}, inSecond)
	})
}

let arrPromise = []
for (let i = 0; i < 10; i++) {
	arrPromise.push(getPromiseTime())
}
console.log(arrPromise)

Promise.race(arrPromise).then(function (res) {
	console.log(res)
})

Promise.all(arrPromise).then(function (res) {
	console.log(res.reduce((acc, elem) => acc + elem, 0))
})

//Сделайте асинхронный код, который будет генерировать случайные числа от 0 до 5. Оберните все это в промис. Пусть промис своим результатом возвращает результат деления единицы на сгенерированное число. Пусть промис выполнится с ошибкой, если произошло деление на ноль, и с успехом во всех остальных случаях.

const promise = new Promise(function (resolve, reject) {
	const randNum = Math.floor(Math.random() * 6)
	const res = 1 / randNum

	if (res == Infinity) {
		reject('выпал 0')
	} else {
		resolve(res)
	}
})

promise.then(
	function (resolve) {
		console.log(`res = ${resolve}`)
	},
	function (reject) {
		console.log(reject)
	}
)

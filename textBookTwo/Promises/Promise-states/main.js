//Промис может находится в одном из трех состояний. При создании промис находится в ожидании (pending), а затем может стать исполненным (fulfilled), вернув полученный результат, или отклоненным (rejected), вернув причину отказа. Вы можете посмотреть переход из одного состояния в другой, запустив следующий код:

let promise = new Promise(function (resolve, reject) {
	setTimeout(function () {
		let isError = false // поставьте либо true, либо false

		if (!isError) {
			resolve([1, 2, 3, 4, 5])
		} else {
			reject('error in promise')
		}
	}, 1000)
})

setInterval(function () {
	console.log(
		promise.then(
			function (resolve) {
				console.log(resolve)
				console.log(promise)
			},
			function (resolve) {
				console.log(resolve)
				console.log(promise)
			}
		)
	) // каждую секунду выводим промис в консоль
}, 2000)

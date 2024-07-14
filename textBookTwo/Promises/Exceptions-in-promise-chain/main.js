//Пусть по каким-то причинам наш промис завершится с ошибкой:
let promise = new Promise(function (resolve, reject) {
	setTimeout(function () {
		reject('error')
	}, 3000)
})

//В этом случае выполнение кода сразу перейдет к тому then, в котором есть функция-обработчик ошибки, либо в первому catch, смотря что встретится раньше.

promise
	.then(function (result) {
		return result + '1'
	})
	.then(function (result) {
		return result + '2'
	})
	.catch(function (error) {
		if (!error) {
			return 'данные' // отправляем на следующий then
		} else {
			console.log('object')
			// ничего не возвращаем или бросаем исключение
		}
	})
	.then(function (result) {
		// тут решаем ошибку
	})

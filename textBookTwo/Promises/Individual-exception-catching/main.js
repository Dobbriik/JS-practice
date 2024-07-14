//В then можно указать только функцию-обработчик исключительной ситуации, передав вместо первого параметра null:

// promise.then(null, function (error) {
// 	console.log(error)
// })

// В таком случае удобно воспользоваться сокращенным синтаксисом через метод catch:

let promise = new Promise(function (resolve, reject) {
	setTimeout(function () {
		let isError = true

		if (!isError) {
			resolve('success')
		} else {
			reject(new Error('error'))
		}
	}, 3000)
})

promise.catch(err => console.log(err.message))

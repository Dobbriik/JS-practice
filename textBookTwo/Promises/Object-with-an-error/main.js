//Более принято в функцию reject передавать не строку с ошибкой, а объект с ошибкой:

let promise = new Promise(function (resolve, reject) {
	setTimeout(function () {
		let isError = false

		if (isError) {
			resolve('success')
		} else {
			reject(new Error('error'))
		}
	}, 1000)
})

promise.then(
	function (resolve) {
		console.log(resolve)
	},
	function (reject) {
		console.log(reject.name)
	}
)

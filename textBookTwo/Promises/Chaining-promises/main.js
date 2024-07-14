let promise = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve('string')
	}, 3000)
})

promise
	.then(function (result) {
		return result + '1'
	})
	.then(function (result) {
		return result + '2'
	})
	.then(function (result) {
		return result + '3'
	})
	.then(function (result) {
		console.log(result) // выведет 'string123'
	})

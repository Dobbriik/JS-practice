//Функции цепочки могут также возвращать промисы. В этом случае результат этого промиса попадет в следующий then:

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
		return new Promise(function (resolve) {
			resolve(result + '2') // этот результат попадет в следующий then
		})
	})
	.then(function (result) {
		return result + '3'
	})
	.then(function (result) {
		console.log(result) // выведет 'string123'
	})

//Иногда вам может понадобится создать уже выполненный промис. Для этого существуют два метода: метод Promise.resolve создает выполненный успешно промис, Promise.reject создает отклоненный промис. Параметром эти методы получают то, что станет результатом или ошибкой промиса соответственно.

function func(num) {
	if (num > 0) {
		return new Promise(function (resolve) {
			setTimeout(function () {
				resolve(num * num)
			}, 3000)
		})
	} else if (num === 0) {
		return Promise.resolve(0)
	} else {
		return Promise.reject('incorrect number') // вернем отклоненный промис
	}
}

func(0).then(function (res) {
	console.log(res)
})

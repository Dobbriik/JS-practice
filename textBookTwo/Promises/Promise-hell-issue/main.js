//Вы уже знаете, что промисы были созданы для того, чтобы решить проблему callback hell. Однако, со временем оказалось, что промисы также способны породить сложный код. Эта проблема по аналогии была названа promise hell.

function getSmth(num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(num * num), 1000)
	})
}

function func() {
	getSmth(2).then(res1 => {
		getSmth(res1).then(res2 => {
			getSmth(res2).then(res3 => {
				console.log(res3)
			})
		})
	})
}

func()

//Однако, получили ли мы то же самое? Нет! В первом случае каждая новая функция ожидает завершения предыдущего промиса, а во втором случае - все промисы выполняются одновременно. Эта разница будет существенна в том случае, когда мы в следующую функцию захотим передать вызов предыдущей:
function func2() {
	Promise.all([getSmth(2), getSmth(3), getSmth(4)]).then(res => {
		console.log(res[0] + res[1] + res[2])
	})
}

func2()

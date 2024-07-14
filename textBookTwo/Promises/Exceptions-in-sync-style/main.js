//Синхронный синтаксис промисов поддерживает обработку исключений через обычный try-catch:

async function func() {
	try {
		let res = await getSmth(2)
		console.log(res)
	} catch (err) {
		console.log(err)
	}
}

func()

function getSmth(num) {
	return new Promise((resolve, reject) => {
		if (num === 0) {
			reject('error')
		} else {
			setTimeout(() => resolve(num * num), 1000)
		}
	})
}

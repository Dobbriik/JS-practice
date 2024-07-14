async function func() {
	let res = await getSmth(2)
	console.log(res) // выведет 4
}

function getSmth(num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(num * num), 1000)
	})
}

func()

async function func2() {
	let arr = [1, 2, 3, 4, 5]
	let sum = 0

	for (let elem of arr) {
		sum += await getSmth(elem)
	}

	console.log(sum)
}

func2()
//Перепишите следующий код через синхронный синтаксис:
async function func3() {
	const arr = [2, 3, 4]
	let sum = 0
	for (const num of arr) {
		sum += await getSmth(num)
	}
	console.log(sum)
}

func3()

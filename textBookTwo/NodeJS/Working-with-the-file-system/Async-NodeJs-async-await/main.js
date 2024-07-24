import fs from 'fs'

//Даны два файла с числами. Найдите сумму этих чисел и запишите результат в третий файл.
async function writeSum() {
	try {
		const paths = ['file1.txt', 'file2.txt']
		let prom = []
		for (const path of paths) {
			prom.push(await fs.promises.readFile(path, 'utf8'))
		}
		const sum = prom.reduce((acc, num) => acc + +num, 0)
		await fs.promises.writeFile('sum.txt', `${sum}`)
	} catch (error) {
		console.log('ошибОчка')
	}
}

//Дан массив имен файлов. Переберите этот массив циклом и создайте файлы с этими именами, записав при создании в каждый файл случайное число. После этого в цикле прочитайте содержимое всех файлов и найдите сумму их чисел. Запишите ее в новый файл.

async function writeRandomSum() {
	try {
		const paths = ['file1.txt', 'file2.txt', 'sum.txt']
		for (const path of paths) {
			const randomNum = Math.floor(Math.random() * 100)
			await fs.promises.writeFile(path, `${randomNum}`)
		}
		let sum = 0
		for (const path of paths) {
			const num = await fs.promises.readFile(path, 'utf8')
			sum += +num
		}
		await fs.promises.writeFile('newSum', `${sum}`)
	} catch (error) {
		console.log('ошибОчка')
	}
}
writeRandomSum()

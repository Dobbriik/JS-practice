import { rejects } from 'assert'
import { reverse } from 'dns'
import fs from 'fs'

function readText() {
	fs.promises.readFile('readme.txt', 'utf8').then(data => {
		console.log(data)
	})
}

async function sumNum() {
	const res = await fs.promises.readFile('number.txt', 'utf8').then(data => {
		let strArr = data.split('')
		return strArr.reduce((acc, num) => acc + +num, 0)
	})
	console.log(res)
}

//Обработка исключений

function handlingException() {
	fs.promises
		.readFile('null.txt', 'utf8')
		.then(data => {
			console.log(data)
		})
		.catch(error => console.log('Ошибка чтения'))
}

//Чтение и запись
//Пусть в файле через запятую записаны числа. Сделайте скрипт, который запишет каждое из этих чисел в отдельный файл.

function addNewFile() {
	fs.promises
		.readFile('numbers.txt', 'utf8')
		.then(data => {
			let arr = data.split(',')
			for (const num of arr) {
				fs.promises.writeFile(`num${num}.txt`, `${num}`)
			}
		})
		.catch(error => console.log('ошибка чтения'))
}
addNewFile()

//Массовая работа
//Пусть у вас есть 5 файлов с числами. Найдите сумму этих чисел и запишите в новый файл.

function getSum() {
	let paths = ['num1.txt', 'num2.txt', 'num3.txt', 'num4.txt', 'num5.txt']
	let readFileArr = []
	function getFile(path) {
		return fs.promises.readFile(path, 'utf8')
	}
	for (const path of paths) {
		readFileArr.push(getFile(path))
	}

	Promise.all(readFileArr)
		.then(elem => {
			const sum = elem.reduce((acc, num) => acc + +num, 0)
			fs.promises.writeFile('res.txt', `${sum}`)
		})
		.catch(err => console.log('Ошибка записи'))
}

getSum()

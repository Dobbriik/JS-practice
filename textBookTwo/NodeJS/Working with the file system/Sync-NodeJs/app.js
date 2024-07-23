function test() {
	console.log('test')
	const a = 1
	let b = 2
	console.log(a + b)
}

function loop() {
	for (let i = 1; i < 11; i++) {
		console.log(i)
	}
}

//Запустите таймер, который каждую секунду будет выводить в консоль текущий момент времени.
function getTimer() {
	setInterval(function () {
		const nowDate = new Date()
		if (nowDate.getMinutes() < 10) {
			console.log(
				`${nowDate.getHours()}:0${nowDate.getMinutes()}:${nowDate.getSeconds()}`
			)
		} else {
			console.log(
				`${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`
			)
		}
	}, 1000)
}

//Пусть дана переменная, в которой изначально хранится число 1. Запустите таймер, который каждую секунду будет увеличивать значение этой переменной на единицу и выводить это значение в консоль.

function increment() {
	let num = 1
	setInterval(function () {
		console.log(num++)
	}, 1000)
}
//Модули ES в NodeJS
import { cube, square } from './math.js'
// import _ from 'underscore'

function module() {
	let res = square(1) + cube(3)
	console.log(res)
	// console.log(fs)
	// console.log(_)
}

//Установите библиотеку lodash. Подключите ее себе в проект и используйте несколько методов из этой библиотеки.
// import _ from 'lodash'

function lodash() {
	console.log(_.first([2, 4, 5]))
}

//Подключение модуля fs в NodeJS
import fs from 'fs'

//Синхронное чтение и запись файлов в NodeJS
//Сделайте два файла, текстом которых будут некоторые числа. Напишите скрипт, который прочитает числа из файлов и выведет в консоль сумму этих чисел.
function sum() {
	let textOne = fs.readFileSync('./files/test-one.txt', 'utf8')
	let textTwo = fs.readFileSync('./files/test-two.txt', 'utf8')
	console.log(+textOne + +textTwo)
}

//Синхронная запись файла
function addTextFile() {
	fs.writeFileSync('./files/readme.txt', 'text')
}

//С помощью цикла для каждого элемента объекта создайте файл, именем которого будет свойство элемента, а текстом - значение свойства.

function loopWrite() {
	let obj = {
		'file1.txt': 'text1',
		'file2.txt': 'text2',
		'file3.txt': 'text3',
	}
	for (const key in obj) {
		fs.writeFileSync(`./files/${key}`, obj[key])
	}
}

//Дан файл с текстом. Запустите таймер, который каждые 5 секунд в конец этого файла будет записывать восклицательный знак.

function addText() {
	setInterval(function () {
		let text = fs.readFileSync('./files/readme.txt', 'utf8')
		fs.writeFileSync('./files/readme.txt', text + '!')
	}, 5000)
}

//Дан файл, в тексте которого записано некоторое число. Напишите скрипт, который прочитает число из файла, прибавит к нему единицу и запишет новое число обратно в файл.
function addNum() {
	let num = fs.readFileSync('./files/test-one.txt', 'utf8')
	fs.writeFileSync('./files/test-one.txt', `${+num + 1}`)
}

//Даны 3 файла с числами. Напишите скрипт, который прочитает числа из файлов, найдет их сумму и запишет ее в новый файл.
function sumNew() {
	const fileOne = fs.readFileSync('./files/test-one.txt', 'utf8')
	const fileTwo = fs.readFileSync('./files/test-two.txt', 'utf8')
	const fileThree = fs.readFileSync('./files/test-three.txt', 'utf8')

	fs.writeFileSync('./files/res.txt', `${+fileOne + +fileTwo + +fileThree}`)
}

//Исключительные ситуации

//Попробуйте прочитать несуществующий файл. Убедитесь, что при этом произойдет исключительная ситуация. Допишите ваш код так, чтобы он обрабатывал эту ситуацию.
try {
	let text = fs.readFileSync('readme.txt', 'utf8')
	console.log(text)
} catch (err) {
	console.log('при чтении файла возникла ошибка')
	let text = fs.readFileSync('./files/readme.txt', 'utf8')
	console.log(text)
}

console.log(fs)

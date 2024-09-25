//Code optimization
//Оптимизация повторных операций в JavaScript
//1
let num = 123
let numValid = String(num)[0]

if (numValid === '1' || numValid === '2') {
	console.log('+++')
} else {
	console.log('---')
}
//2
let date = new Date()
const dateDay = date.getDay()
if (dateDay === 0 || dateDay === 6) {
	console.log('выходной')
} else {
	console.log('рабочий')
}
//3
let date2 = new Date()
let date2Year = date.getFullYear()
let res
if (date2Year >= 2020 && date2Year <= 2030) {
	res = 'год ' + date2Year + ' подходит'
} else {
	res = 'год ' + date2Year + ' не подходит'
}

console.log(res)

//Оптимизация повторения тяжелых операций в JavaScript

//1

let num2 = 1233456789
let SumSquare = getSumSquare(num2)
console.log(SumSquare)

if (SumSquare >= 10 && SumSquare <= 100) {
	console.log('+++')
} else {
	console.log('---')
}

function getSumSquare(num) {
	let digits = String(num).split('')
	let sum = 0

	for (let digit of digits) {
		sum += digit ** 2
	}

	return sum
}

//Оптимизация цикличных операций в JavaScript
let curr = new Date()
let currMonth = curr.getMonth()
let currDate = curr.getDate()
let currDay = curr.getDay()
for (let i = 2000; i <= 2025; i++) {
	let date = new Date(i, currMonth, currDate)
	let dateDay = date.getDay()
	if (currDay === dateDay) {
		console.log(date)
	}
}
//
let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 }
let sum = 0

for (let key in obj) {
	const objKey = obj[key]
	const objElem = String(objKey)[0]
	if (objElem === '1' || objElem === '2') {
		sum += objKey
	}
}

console.log(sum)

//Оптимизация лишних проходов цикла в JavaScript

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum2 = 0
let i = 1

for (let elem of arr) {
	sum2 += elem
	if (sum2 > 10) break
	i++
}

console.log(i)

//
let counterLoop = 0
for (let i = 0; i <= 100; i += 2) {
	console.log(i)
	counterLoop++
}
console.log(counterLoop, 'counterLoop')
//

for (let i = 0; i <= 100; i += 6) {
	console.log(i)
}

//
let currDateNewYear = new Date().getFullYear()
for (let month = 0; month < 12; month++) {
	const fridayThirteenth = new Date(currDateNewYear, month, 13)
	if (fridayThirteenth.getDay() === 5) {
		console.log(fridayThirteenth)
	}
}

//Оптимизация через использование встроенных функций в JavaScript
//Мораль: перед решением задачи обязательно проверяйте, нету ли для ее решения встроенной функции JavaScript.

let str = 'http://code.mu'

console.log(str.startsWith('http'))

//

let arr3 = fillArr('x', 5)
console.log(arr3)

function fillArr(val, amount) {
	return Array(amount).fill(val)
}

//Мораль: перед решением ресурсоемкой задачи обязательно проверяйте, нету ли для ее решения готовой математической формулы или готового математического подхода.

const upperBound = 1000
const divisor = 5

const count = Math.floor(upperBound / divisor)
console.log(count)

//
function countDigits(n) {
	let totalDigits = 0
	let digits = n.toString().length

	for (let k = 1; k < digits; k++) {
		totalDigits += k * 9 * Math.pow(10, k - 1)
	}

	totalDigits += digits * (n - Math.pow(10, digits - 1) + 1)

	return totalDigits
}

const n = 10
console.log(countDigits(n))

//Оптимизация использования регулярок в JavaScript
let str1 = '123345'
if (str1.includes('33')) {
	console.log('+++')
} else {
	console.log('---')
}

//
let str3 = 'index.html'
if (str3.endsWith('html')) {
	console.log('+++')
} else {
	console.log('---')
}

//
let str4 = '  text  '
let res4 = str4.trim()
console.log(res4)

//Оптимизация работы с DOM в JavaScript

function hueta() {
	let input = document.createElement('input')

	input.addEventListener('blur', function () {
		let valueInput = input.value
		if (valueInput === '1' || valueInput === '2') {
			console.log('+++')
		} else {
			console.log('---')
		}
	})
	//
	input.addEventListener('blur', function () {
		let value = input.value
		let sum = (value * (value + 1)) / 2

		console.log(sum)
	})

	//
	input.addEventListener('blur', function () {
		let sum = 0
		let value = +input.value
		let div = document.querySelector('div')

		for (let i = 1; i <= value; i++) {
			if (value % i === 0) {
				sum += i
			}
		}

		div.textContent = sum
	})

	let elemS = document.querySelectorAll('p')

	Array.from(elemS).forEach(elem => {
		elem.textContent *= elem.textContent
	})

	let inp = document.querySelector('input')

	inp.addEventListener('blur', function () {
		const lengthValue = inp.value.length
		const minValue = inp.dataset.min //5
		const maxValue = inp.dataset.max //10
		if (minValue > lengthValue || maxValue < lengthValue) {
			console.log('+++')
		} else {
			console.log('---')
		}
	})

	function minMax(length) {
		if (5 <= length && 10 >= length) {
			console.log('+++ minMax')
		} else {
			console.log('--- minMax')
		}
	}
}

//Оптимизация потребления памяти в JavaScript

function optimizationMemory(start, end) {
	let counter = 0
	let counterloop = 0
	for (let i = start; i <= end; i++) {
		if (i % 7 == 0) {
			arr.push(i)
			i += 6
			counter++
		}
		counterloop++
	}
	return [counter, counterloop]
}

function getDivisors(num) {
	let sum = []
	let counterLoop = 0
	for (let i = 1; i <= num / 2; i++) {
		if (num % i === 0) {
			sum.push(i)
		}
		counterLoop++
	}
	sum.push(num)
	return [sum, counterLoop]
}

console.log('object'.length)
console.log('object'.includes('j'))

//Создайте HTML таблицу размером 100 на 100. Сделайте так, чтобы каждая ячейка по клику красилась в красный цвет.
function createTable(row, col) {
	const table = document.createElement('table')
	table.addEventListener('click', function (event) {
		let td = event.target.closest('td')
		if (td) {
			td.classList.toggle('red')
		}
	})

	for (let i = 0; i < row; i++) {
		const tr = document.createElement('tr')
		for (let j = 0; j < col; j++) {
			const td = document.createElement('td')
			tr.appendChild(td)
		}
		table.appendChild(tr)
	}

	document.body.appendChild(table)
}

//Следующий код находит взаимно-простые числа из заданного промежутка. Оптимизируйте его:

function getRelativelyPrime(range) {
	let res = []

	for (let i = 2; i <= range; i++) {
		for (let j = 2; j < range; j++) {
			if (gcd(i, j)) {
				res.push([i, j])
			}
		}
	}

	return res
}
function isRelativelyPrime(num1, num2) {
	let arr1 = getDivisors(num1)
	let arr2 = getDivisors(num2)
	let int = getIntersect(arr1, arr2)

	if (int.length === 0) {
		return true
	} else {
		return false
	}
}
function getIntersect(arr1, arr2) {
	let result = []

	for (let elem of arr1) {
		if (arr2.includes(elem)) {
			result.push(elem)
		}
	}

	return result
}
function getDivisors(num) {
	let res = []

	for (let i = 2; i <= num; i++) {
		if (num % i === 0) {
			res.push(i)
		}
	}

	return res
}
function gcd(a, b) {
	while (b !== 0) {
		let temp = b
		b = a % b
		a = temp
	}
	return a === 1
}

console.log(getRelativelyPrime(6))

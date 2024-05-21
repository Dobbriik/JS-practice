//
// import { dateArr, todayZodiacPredictions, zod, zodArr } from './src/base.mjs'

function getAllDayCurrentYear() {
	let nowDate = new Date()
	let currentYear = nowDate.getFullYear()
	let howYear = new Date(currentYear, 2, 0)
	if (howYear.getDate() === 29) {
		return 366
	} else {
		return 365
	}
}
let nowDate = new Date()
let currentYear = nowDate.getFullYear()

let dateArr = []

for (let i = 0; i <= getAllDayCurrentYear(); i++) {
	dateArr.push(i)
}
dateArr[0] = currentYear

let zodiacSigns = [
	'Козерог',
	'Водолей',
	'Рыбы',
	'Овен',
	'Телец',
	'Близнецы',
	'Рак',
	'Лев',
	'Дева',
	'Весы',
	'Скорпион',
	'Стрелец',
]

let zod = {
	Козерог: 0,
	Водолей: 1,
	Рыбы: 2,
	Овен: 3,
	Телец: 4,
	Близнецы: 5,
	Рак: 6,
	Лев: 7,
	Дева: 8,
	Весы: 9,
	Скорпион: 10,
	Стрелец: 11,
}

let zodArr = [
	{ Козерог: '23.12-20.01' },
	{ Водолей: '21.01—19.02' },
	{ Рыбы: '20.02-20.03' },
	{ Овен: '21.03-20.04' },
	{ Телец: '21.04-21.05' },
	{ Близнецы: '22.05-21.06' },
	{ Рак: '22.06-22.07' },
	{ Лев: '23.07-21.08' },
	{ Дева: '22.08-23.09' },
	{ Весы: '24.09-23.10' },
	{ Скорпион: '24.10-23.11' },
	{ Стрелец: '24.11-22.12' },
]

const todayZodiacPredictions = [
	'Сегодня  следует быть осторожным, так как он может столкнуться с неожиданным вызовом - потерей телефона или ключей, но это только укрепит его характер.',
	'столкнется с неожиданным финансовым вызовом - найдет на улице купюру, но окажется, что это фальшивка, что заставит его еще раз проверить свою интуицию.',
	'столкнется с неожиданным знакомством - может встретить своего двойника, но только с другим стилем одежды, что заставит его задуматься о своем имидже.',
	'столкнется с неожиданными отношениями - может получить сообщение от старого друга, но окажется, что это спам, что заставит его еще раз проверить свой список контактов.',
	'столкнется с неожиданными возможностями - может получить предложение о работе, но окажется, что это розыгрыш, что заставит его еще раз проверить свою репутацию.',
	'столкнется с неожиданными творческими способностями - может придумать новый способ организации рабочего стола, но окажется, что ничего не изменилось, что заставит его еще раз проверить свою оригинальность.',
	'столкнется с неожиданными потребностями в дипломатических навыках - поможет решить спор между друзьями, но окажется, что они просто притворялись.',
	'столкнется с неожиданными интуитивными способностями - может угадать, что будет завтра на обед, но окажется, что меню меняют ежедневно, что заставит его еще раз проверить свою интуицию.',
	'столкнется с неожиданными навыками коммуникации - может найти общий язык с собакой соседа, но окажется, что она просто хочет лакомства, что заставит его еще раз проверить свои навыки общения.',
	'столкнется с неожиданными организационными навыками - может создать новую систему управления временем, но окажется, что это уже использовалось, что заставит его еще раз проверить свою оригинальность.',
	'столкнется с неожиданными интеллектуальными способностями - может решить кроссворд за рекордное время, но окажется, что это был детский вариант, что заставит его еще раз проверить свои знания.',
	'Сегодня столкнется с солнечным днем, который внезапно сменится грозой, что заставит вас еще раз проверить свою интуицию и быть готовым к изменениям погоды, словно погода решила поиграть с вами в прятки!',
]

let object = {
	dateArr: dateArr,
	zodArr: zodArr,
	todayZodiacPredictions: todayZodiacPredictions,
	zod: zod,
	nowDate: new Date(),
}

function addRandomPredictions(length, elem, arr) {
	if (length > 0) {
		let random = Math.floor(Math.random() * length)
		length--
		arr.push(elem[random])
		addRandomPredictions(length, elem, arr)
	} else {
		return
	}
}

for (let i = 1; i < dateArr.length; i++) {
	let arr = [...todayZodiacPredictions]
	let arrRandom = []
	for (let i = 0; i < arr.length; i++) {
		let random = Math.floor(Math.random() * arr.length)
		let randomElement = arr.slice(random, random + 1)
		arrRandom.push(randomElement)
	}
	dateArr[i] = arrRandom
}

// console.log(dateArr)

function getZodiac(dob) {
	let value = dob
	let newUserDate = new Date(value)
	let userMonth = newUserDate.getMonth()
	let userDate = newUserDate.getDate()
	let userYear = newUserDate.getFullYear()
	console.log(newUserDate)
	console.log(userMonth)

	function getRes(date1, year, userDate) {
		let dateStart = Object.values(object.zodArr[date1]).join('').split('')
		let correctDataStart =
			dateStart.slice(3, 5).join('') +
			'.' +
			dateStart.slice(0, 3).join('') +
			year

		let dateEnd = Object.values(object.zodArr[date1]).join('').split('')
		let correctDataEnd =
			dateStart.slice(-2).join('') + '.' + dateStart.slice(6, 9).join('') + year

		console.log(correctDataStart)
		console.log(correctDataEnd)

		let newDateStart = new Date(correctDataStart)
		let newDateEnd = new Date(correctDataEnd)
		let newDateUser = new Date(userDate)
		console.log(newDateStart)
		console.log(newDateEnd)
		console.log(newDateUser)

		return (
			newDateStart.getTime() <= newDateUser.getTime() &&
			newDateEnd.getTime() >= newDateUser.getTime()
		)
	}

	if (userMonth === 0 || userMonth === 11) {
		if (getRes(11, userYear, value)) {
			for (const key in object.zodArr[11]) {
				return key
			}
		} else if (getRes(1, userYear, value)) {
			for (const key in object.zodArr[1]) {
				return key
			}
		} else {
			for (const key in object.zodArr[0]) {
				return key
			}
		}
	} else {
		if (getRes(userMonth, userYear, value)) {
			for (const key in object.zodArr[userMonth]) {
				return key
			}
		} else {
			for (const key in object.zodArr[userMonth + 1]) {
				return key
			}
		}
	}
}

function getNumberDate(currentDate) {
	let newDate = new Date(currentDate)
	let year = newDate.getFullYear()
	let month = newDate.getMonth()
	let countDate = newDate.getDate()
	if (month === 0) {
		return countDate
	} else {
		for (let i = 0; i < month; i++) {
			let newDate = new Date(year, i, 0)
			countDate += newDate.getDate()
		}
		return countDate
	}
}
let adsad = new Date(2024, 0, 0)
// console.log(adsad)

let input = document.querySelector('#date')
let btn = document.querySelector('#btn')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let p = document.querySelector('p')
let count = 0

input.addEventListener('blur', function () {
	let newDate = new Date()
	count = getNumberDate(newDate)
	console.log(count)
})

let newDate = new Date()
function addText(value, addOrRem, nowDate) {
	let formattedDate = newDate.toLocaleDateString()
	let inputDate = value
	let zodiac = getZodiac(inputDate)
	let num = getNumberDate(nowDate)

	let index = zod[zodiac]

	if (addOrRem === 'add') {
		newDate.setDate(newDate.getDate() + 1)
		let formattedDate = newDate.toLocaleDateString()
		count++
		p.textContent = formattedDate + ' ' + zodiac + ' ' + dateArr[count][index]
	} else if (addOrRem === 'rem') {
		newDate.setDate(newDate.getDate() - 1)
		let formattedDate = newDate.toLocaleDateString()
		count--
		p.textContent = formattedDate + ' ' + zodiac + ' ' + dateArr[count][index]
	} else {
		newDate = new Date()
		let formattedDate = newDate.toLocaleDateString()
		p.textContent = formattedDate + ' ' + zodiac + ' ' + dateArr[num][index]
		count = getNumberDate(newDate)
	}
}

btn.addEventListener('click', function () {
	console.log(count)
	addText(input.value, '', object.nowDate)
	// console.log(input.value.slice(-2))
	// let zodiac = getZodiac(input.value)
	// let num = getNumberDate(input.value)
	// let index = zod[zodiac]
	// p.textContent = zodiac + ' ' + dateArr[num][index]
})

btn2.addEventListener('click', function () {
	console.log(count)

	addText(input.value, 'rem', object.nowDate)
})

btn3.addEventListener('click', function () {
	console.log(count)

	addText(input.value, 'add', object.nowDate)
})

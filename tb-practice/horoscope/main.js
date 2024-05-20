//
import { dateArr, todayZodiacPredictions, zod, zodArr } from './src/base.js'

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

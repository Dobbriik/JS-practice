//
import { dateArr, zodArr } from './src/base.js'

let object = {
	dateArr: dateArr,
	zodArr: zodArr,
}

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

let input = document.querySelector('#date')
let btn = document.querySelector('#btn')
let p = document.querySelector('p')

btn.addEventListener('click', function () {
	// console.log(getZodiac(input.value))
	p.textContent = getZodiac(input.value)
})

// input.addEventListener('input', function () {
// 	let value = this.value.replace(/\./g, '')

// 	if (value.length > 2) {
// 		value = value.slice(0, 2) + '.' + value.slice(2)
// 	}
// 	if (value.length > 5) {
// 		value = value.slice(0, 5) + '.' + value.slice(5)
// 	}

// 	this.value = value
// })

let asdas = new Date('2021.12.23')

console.log(asdas)

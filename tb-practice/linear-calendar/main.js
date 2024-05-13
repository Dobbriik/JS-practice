//Выведите в виде списка ul все числа текущего месяца. Средствами CSS поставьте пункты списка в ряд.

// Сделайте так, чтобы текущий день в календаре был выделен каким-нибудь цветом.

//Сделайте так, чтобы над списком было написано название текущего месяца по-русски и номер года.

//Сделайте так, чтобы над календарем появились ссылки вперед и назад, позволяющие менять месяц. Месяц и год, выводимые над календарем, должны соответствовать отображаемому месяцу.
let wrap = document.querySelector('.wrapper')
let info = document.querySelector('.info')
let ul = document.createElement('ul')
let par = document.createElement('p')
let previous = document.createElement('a')
previous.href = ''
previous.textContent = 'Предыдущий'
previous.addEventListener('click', function (event) {
	event.preventDefault()
	let newDate = getAndChangeDateInText(par, false)
	removeListDate(ul, par)
	getListDate(ul, par, newDate.getMonth(), newDate.getFullYear())
})
let next = document.createElement('a')
next.href = ''
next.textContent = 'Следующий'
next.addEventListener('click', function (event) {
	event.preventDefault()
	let newDate = getAndChangeDateInText(par, true)
	removeListDate(ul, par)
	getListDate(ul, par, newDate.getMonth(), newDate.getFullYear())
})

let months = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
]

let nowDate = new Date()
let nowMonth = nowDate.getMonth()
let nowYear = nowDate.getFullYear()

function getAndChangeDateInText(elem, boolean) {
	let string = elem.textContent
	let arrStr = string.split('')
	let year = arrStr.slice(-4).join('')
	let index = arrStr.findIndex(function (elem) {
		return elem === ' '
	})
	let monthText = arrStr.slice(0, index).join('')
	let month = months.findIndex(function (elem) {
		return elem === monthText
	})

	if (boolean) {
		month++
	} else {
		month--
	}

	if (month >= 12) {
		month = 0
		year++
	} else if (month < 0) {
		month = 11
		year--
	}

	let newDate = new Date(year, month)
	return newDate
}

function maxCurrentMonthNum(month) {
	let monthNew = month + 1
	let maxCurrentMonthNum = new Date('2024', monthNew, '0')
	let countDate = maxCurrentMonthNum.getDate()
	return countDate
}

let countDate = maxCurrentMonthNum(nowMonth)

function getListDate(element1, element2, month, year) {
	element2.textContent = months[month] + ' ' + year
	let num = maxCurrentMonthNum(month)
	for (let i = 1; i <= num; i++) {
		let li = document.createElement('li')
		li.textContent = i
		if (nowDate.getDate() === i) {
			li.style.color = 'red'
		}
		element1.appendChild(li)
	}
}

function removeListDate(element1, element2) {
	element1.innerHTML = ''
	element2.innerHTML = ''
}

getListDate(ul, par, nowMonth, nowYear)

info.append(par)
par.insertAdjacentElement('beforebegin', previous)
par.insertAdjacentElement('afterend', next)
wrap.append(ul)

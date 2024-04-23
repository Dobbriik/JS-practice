//Добавление рядов

// let table = document.querySelector('#table')

// let tr = document.createElement('tr')

// for (let i = 1; i <= 3; i++) {
// 	let td = document.createElement('td')
// 	tr.appendChild(td)
// }

// table.appendChild(tr)

//Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.

let btnAdd = document.createElement('button')
btnAdd.textContent = 'Add row'
document.body.appendChild(btnAdd)

let btnAddColum = document.createElement('button')
btnAddColum.textContent = 'Add colum'
document.body.appendChild(btnAddColum)

let tableNew = document.createElement('table')
document.body.appendChild(tableNew)

btnAdd.addEventListener('click', function () {
	let tr = document.createElement('tr')
	tableNew.appendChild(tr)
	for (let i = 0; i < 3; i++) {
		let td = document.createElement('td')
		td.textContent = i
		tr.appendChild(td)
	}
})

//Добавление колонок
btnAddColum.addEventListener('click', function () {
	for (const elem of tableNew.children) {
		let td = document.createElement('td')
		td.textContent = 'new'
		elem.appendChild(td)
	}
	console.log(tableNew.children)
})

// 2 Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.

let table = document.querySelector('#table')
// console.log(table.lastChild)

let btn = document.createElement('button')
btn.textContent = 'Добавить'

table.insertAdjacentElement('beforebegin', btn)

btn.addEventListener('click', function () {
	let info = table.lastChild.children
	let into = table.lastChild

	for (const elem of table.lastChild.children) {
		let td = document.createElement('td')
		td.textContent = '1'
		elem.appendChild(td)
	}
	let tr = document.createElement('tr')
	into.appendChild(tr)
	for (let i = 0; i < info.length; i++) {
		let td = document.createElement('td')
		td.textContent = '2'
		tr.appendChild(td)
	}
})

//Создание HTML таблиц на JavaScript

let table = document.querySelector('#table')

for (let i = 0; i < 3; i++) {
	let tr = document.createElement('tr')

	for (let i = 0; i < 3; i++) {
		let td = document.createElement('td')
		tr.appendChild(td)
	}

	table.appendChild(tr)
}

//Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.

//Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.

//Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'.

let newTable = document.querySelector('#new-table')

for (let i = 0; i < 10; i++) {
	let tr = document.createElement('tr')
	newTable.appendChild(tr)

	for (let j = 0; j < 5; j++) {
		let td = document.createElement('td')
		td.textContent = +j + 1 + 'x'
		tr.appendChild(td)
	}
}

//Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).

let colum = document.querySelector('#colum')
let row = document.querySelector('#row')
let create = document.querySelector('#create')

create.addEventListener('click', function () {
	let tableNew = document.createElement('table')
	let columCounter = colum.value
	let rowCounter = row.value

	for (let i = 0; i < columCounter; i++) {
		let rowCounterSave = rowCounter
		let tr = document.createElement('tr')
		tableNew.appendChild(tr)
		for (let j = 0; j < rowCounterSave; j++) {
			let td = document.createElement('td')
			td.textContent = +j + 1
			tr.appendChild(td)
			td.addEventListener('click', function () {
				this.textContent = prompt()
			})
		}
	}
	document.body.appendChild(tableNew)

	colum.value = ''
	row.value = ''
})

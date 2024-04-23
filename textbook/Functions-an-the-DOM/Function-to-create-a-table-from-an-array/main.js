//Функция для создания таблицы из массива

let div = document.querySelector('#elem')

let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
let table = createTableByArr(arr)

div.appendChild(table)

function createTableByArr(arr) {
	let table = document.createElement('table')
	for (const elems of arr) {
		let tr = document.createElement('tr')
		for (const elem of elems) {
			let td = document.createElement('td')
			td.textContent = elem
			tr.appendChild(td)
		}
		table.appendChild(tr)
	}
	return table
}

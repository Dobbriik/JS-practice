//Функция для создания HTML таблиц
let div1 = document.querySelector('#elem1')
createTable(3, 4, div1)

let div2 = document.querySelector('#elem2')
createTable(5, 6, div2)

function createTable(trCnt, tdCnt, elem) {
	let table = document.createElement('table')
	for (let i = 0; i < trCnt; i++) {
		let tr = document.createElement('tr')
		for (let j = 0; j < tdCnt; j++) {
			let td = document.createElement('td')
			tr.appendChild(td)
		}
		table.appendChild(tr)
	}
	elem.appendChild(table)
}

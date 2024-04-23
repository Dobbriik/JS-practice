//Переделайте вашу функцию createTable в соответствии с описанным в теории.

function createTable(trCnt, tdCnt) {
	let tablea = document.createElement('table')
	for (let i = 0; i < trCnt; i++) {
		let tr = document.createElement('tr')
		for (let j = 0; j < tdCnt; j++) {
			let td = document.createElement('td')
			tr.appendChild(td)
		}
		tablea.appendChild(tr)
	}
	return tablea
}

let div = document.querySelector('.divs')
let tableew = createTable(2, 3)
console.log(tableew)
let trs = tableew.children
for (const elem of trs) {
	elem.style.backgroundColor = 'red'
}
div.append(tableew)

//С помощью функции createTable создайте новую таблицу, а затем вставьте ее в конец дива.

let divElem = document.querySelector('#elem')
let tableNew = createTable(2, 4)
console.log(tableNew)
divElem.appendChild(tableNew)

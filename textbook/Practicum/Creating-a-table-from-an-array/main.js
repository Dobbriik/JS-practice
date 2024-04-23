// 2 Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов.

let arr = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
]

let table = document.querySelector('#table')

// for (let subArr of arr) {
// 	let tr = document.createElement('tr')

// 	for (let elem of subArr) {
// 		let td = document.createElement('td')
// 		td.textContent = elem
// 		tr.appendChild(td)
// 	}

// 	table.appendChild(tr)
// }

// тоже самое только через forEach
arr.forEach(element => {
	let tr = document.createElement('tr')
	element.forEach(element2 => {
		let td = document.createElement('td')
		// td.textContent = element2

		// 2
		td.textContent = element2 ** 2
		tr.appendChild(td)
	})
	table.appendChild(tr)
})

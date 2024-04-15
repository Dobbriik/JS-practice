//Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.

//Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.

let table = document.createElement('table')
table.style.border = '1px solid green'
document.body.appendChild(table)

let k = 2

for (let i = 0; i < 5; i++) {
	let tr = document.createElement('tr')
	table.appendChild(tr)

	for (let j = 0; j < 5; j++) {
		let td = document.createElement('td')
		td.style.border = '1px solid #3aa0a1'
		// 1
		// td.textContent = k++
		// 2
		td.textContent = k
		k += 2

		tr.appendChild(td)
	}
}

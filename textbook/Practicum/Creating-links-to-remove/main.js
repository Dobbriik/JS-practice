//Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.

let ul = document.createElement('ul')
document.body.appendChild(ul)

for (let i = 0; i < 5; i++) {
	let li = document.createElement('li')
	li.textContent = 'item:' + i

	let link = document.createElement('a')
	link.href = ''
	link.textContent = 'remove'
	li.appendChild(link)

	link.addEventListener('click', function (event) {
		event.preventDefault()
		li.remove()
	})

	ul.appendChild(li)
}

//Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.

let table = document.createElement('table')
document.body.appendChild(table)

for (let i = 0; i < 3; i++) {
	let tr = document.createElement('tr')
	table.appendChild(tr)
	for (let j = 1; j < 4; j++) {
		let td = document.createElement('td')
		td.textContent = j
		tr.appendChild(td)
	}
}

let i = 1

let tableChild = table.children
for (const iterator of tableChild) {
	let td = document.createElement('td')
	let link = document.createElement('a')
	link.href = ''
	link.textContent = 'remove' + i++
	link.addEventListener('click', function (event) {
		event.preventDefault()
		iterator.remove()
	})
	td.appendChild(link)
	iterator.appendChild(td)
}

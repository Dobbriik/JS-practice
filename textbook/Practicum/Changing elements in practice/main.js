//Дан массив. Выведите его элементы в виде списка ul.

let arr = [1, 2, 3, 4, 5]

let ul = document.createElement('ul')
document.body.appendChild(ul)
for (const elem of arr) {
	let li = document.createElement('li')
	li.textContent = elem

	ul.appendChild(li)

	removeLink(li)
}

//Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.
function inputRedact(elem) {
	elem.addEventListener('click', function add() {
		let input = document.createElement('input')
		input.value = elem.textContent
		elem.textContent = ''
		elem.appendChild(input)
		input.addEventListener('blur', function () {
			elem.textContent = input.value
			elem.addEventListener('click', add)
		})

		elem.removeEventListener('click', add)
	})
}

//Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать.

let input = document.createElement('input')
ul.insertAdjacentElement('afterend', input)

input.addEventListener('blur', function () {
	let li = document.createElement('li')
	li.textContent = this.value
	inputRedact(li)
	removeLink(li)
	ul.appendChild(li)

	this.value = ''
})

//Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.

function removeLink(elem, forTable) {
	let remove = document.createElement('a')
	remove.href = ''
	remove.style.textDecoration = 'none'
	remove.style.color = 'red'
	remove.textContent = '(удалить)'
	elem.appendChild(remove)
	remove.addEventListener('click', function (event) {
		if (forTable) {
			elem.parentNode.remove()
		}
		event.preventDefault()
		elem.remove()
	})
}

//Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li.

function linkLine(elem) {
	let link = document.createElement('a')
	link.href = ''
	link.textContent = '(through)'
	link.style.textDecoration = 'none'
	link.addEventListener('click', function (event) {
		event.preventDefault()
		elem.classList.toggle('line')
	})
	elem.parentNode.appendChild(link)
}

let uls = ul.children

// заменить text на span через childNodes
for (const li of uls) {
	let span = document.createElement('span')
	let text = li.childNodes[0]
	console.log(text.textContent)
	span.textContent = text.textContent
	inputRedact(span)
	li.replaceChild(span, text)
	linkLine(span)
	console.log(span)
}
let hr = document.createElement('hr')
document.body.appendChild(hr)

// 1 Выведите этих работников в HTML таблице.
// 2 Добавьте ячейкам созданной таблицы возможность редактирования.
// 3 Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.

let employees = [
	{ name: 'employee1', age: 30, salary: 400 },
	{ name: 'employee2', age: 31, salary: 500 },
	{ name: 'employee3', age: 32, salary: 600 },
]

let table = document.createElement('table')
document.body.appendChild(table)

for (const elem of employees) {
	let tr = document.createElement('tr')

	let tdName = document.createElement('td')
	tdName.textContent = elem.name
	inputRedact(tdName) //2

	let tdAge = document.createElement('td')
	tdAge.textContent = elem.age
	inputRedact(tdAge) //2

	let tdSalary = document.createElement('td')
	tdSalary.textContent = elem.salary
	inputRedact(tdSalary) //2

	let trRemove = document.createElement('td')
	removeLink(trRemove, true)

	table.appendChild(tr)
	tr.append(tdName, tdAge, tdSalary, trRemove)
}

// 4 Сделайте под таблицей 3 инпута и кнопку для добавление нового работника. Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию на кнопку новый работник добавляется в таблицу. Реализуйте редактирование ячеек для вновь добавленных работников.

//функция для добавления инпутов нового работника для таблицы и списка
function addEmployee(elem, forType = '') {
	let inputName = document.createElement('input')
	inputName.setAttribute('placeholder', 'Name')

	let inputAge = document.createElement('input')
	inputAge.setAttribute('placeholder', 'Age')
	inputAge.setAttribute('type', 'number')

	let inputSalary = document.createElement('input')
	inputSalary.setAttribute('placeholder', 'Salary')
	inputSalary.setAttribute('type', 'number')

	let inputBtn = document.createElement('input')
	inputBtn.setAttribute('type', 'submit')
	inputBtn.value = 'Add'

	elem.insertAdjacentElement('afterend', inputBtn)
	elem.insertAdjacentElement('afterend', inputSalary)
	elem.insertAdjacentElement('afterend', inputAge)
	elem.insertAdjacentElement('afterend', inputName)

	inputBtn.addEventListener('click', function () {
		if (forType == 'table') {
			let tr = document.createElement('tr')

			let tdName = document.createElement('td')
			tdName.textContent = inputName.value
			inputRedact(tdName) //2

			let tdAge = document.createElement('td')
			tdAge.textContent = inputAge.value
			inputRedact(tdAge) //2

			let tdSalary = document.createElement('td')
			tdSalary.textContent = inputSalary.value
			inputRedact(tdSalary) //2

			let trRemove = document.createElement('td')
			removeLink(trRemove, true)

			inputName.value = ''
			inputAge.value = ''
			inputSalary.value = ''

			tr.append(tdName, tdAge, tdSalary, trRemove)
			elem.appendChild(tr)
		} else if (forType == 'ul') {
			let li = document.createElement('li')

			let spanName = document.createElement('span')
			spanName.textContent = `${inputName.value} `
			inputRedact(spanName) //2

			let spanAge = document.createElement('span')
			spanAge.textContent = `${inputAge.value} `
			inputRedact(spanAge) //2

			let spanSalary = document.createElement('span')
			spanSalary.textContent = `${inputSalary.value} `
			inputRedact(spanSalary) //2

			li.append(spanName, spanAge, spanSalary)
			removeLink(li) //3
			elem.appendChild(li)
		}
	})
}

addEmployee(table, 'table') // 4

let hr2 = document.createElement('hr')
document.body.appendChild(hr2)
//Массив объектов и список
//Выведите на экран каждого работника в своем теге li тега ul.

// 2 Сделайте так, чтобы по клику на имя, возраст или зарплату работника появлялся инпут для редактирования этого поля.

let employees2 = [
	{ name: 'employee1', age: 30, salary: 400 },
	{ name: 'employee2', age: 31, salary: 500 },
	{ name: 'employee3', age: 32, salary: 600 },
]

let ulNew = document.createElement('ul')
document.body.appendChild(ulNew)

for (const elem of employees2) {
	let li = document.createElement('li')

	let spanName = document.createElement('span')
	spanName.textContent = `${elem.name} `
	inputRedact(spanName) //2

	let spanAge = document.createElement('span')
	spanAge.textContent = `${elem.age} `
	inputRedact(spanAge) //2

	let spanSalary = document.createElement('span')
	spanSalary.textContent = `${elem.salary} `
	inputRedact(spanSalary) //2

	li.append(spanName, spanAge, spanSalary)
	removeLink(li) //3
	ulNew.appendChild(li)
}

addEmployee(ulNew, 'ul')

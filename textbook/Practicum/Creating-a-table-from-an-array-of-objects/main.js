//
let users = [
	{
		name: 'name1',
		surname: 'surname1',
		patronymic: 'patronymic1',
	},
	{
		name: 'name2',
		surname: 'surname2',
		patronymic: 'patronymic2',
	},
	{
		name: 'name3',
		surname: 'surname3',
		patronymic: 'patronymic3',
	},
]

let table = document.getElementById('table')

for (let user of users) {
	let tr = document.createElement('tr')

	let td1 = document.createElement('td')
	td1.textContent = user.name
	tr.appendChild(td1)

	let td2 = document.createElement('td')
	td2.textContent = user.surname
	tr.appendChild(td2)

	let td3 = document.createElement('td')
	td3.textContent = user.patronymic
	tr.appendChild(td3)

	table.appendChild(tr)
}

// 1 Выведите элементы этого массива в виде HTML таблицы.

// 2 Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1.

// 3 Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.

let employees = [
	{ name: 'employee1', age: 30, salary: 400 },
	{ name: 'employee2', age: 31, salary: 500 },
	{ name: 'employee3', age: 32, salary: 600 },
]

let tableEmployees = document.querySelector('#employees')

for (const employee of employees) {
	let tr = document.createElement('tr')
	let td1 = document.createElement('td')
	td1.textContent = employee.name
	let td2 = document.createElement('td')
	td2.textContent = employee.age
	// 2
	td2.addEventListener('click', function () {
		td2.textContent++
	})
	let td3 = document.createElement('td')
	td3.textContent = employee.salary
	// 3
	td3.addEventListener('click', function () {
		td3.textContent = (+td3.textContent + td3.textContent * 0.1).toFixed(2)
	})
	tr.append(td1, td2, td3)
	tableEmployees.appendChild(tr)
}

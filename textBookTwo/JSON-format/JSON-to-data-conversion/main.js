//Дана строка в формате JSON, содержащая массив с числами:
//Преобразуйте эту строку в настоящий массив JavaScript и найдите сумму чисел этого массива.

let json = '[1,2,3,4,5]'
let arr = JSON.parse(json)

let sun = 0

for (const iterator of arr) {
	sun += iterator
}

console.log(sun)

//Дана строка в формате JSON, содержащая объект с данными:

let json2 = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`

let sum2 = 0

let arrJson2 = JSON.parse(json2)
console.log(arrJson2)

for (const iterator in arrJson2) {
	console.log(iterator)
}

arrJson2[Symbol.iterator] = function* () {
	for (const key in this) {
		yield this[key]
	}
}
for (const iterator of arrJson2) {
	for (const iterator2 of iterator) {
		sum2 += iterator2
	}
}

console.log(sum2)

//Дана строка в формате JSON, содержащая имена юзеров:
//Выведите эти имена в виде списка ul.s

let jsonUsers = '["user1","user2","user3","user4","user5"]'

let users = JSON.parse(jsonUsers)

let ul = document.createElement('ul')

for (const elem of users) {
	let li = document.createElement('li')
	li.textContent = elem
	ul.appendChild(li)
}

document.body.appendChild(ul)

//Выведите этих работников на экран в виде HTML таблицы.

let jsonEmployee = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`

let arrEmployee = JSON.parse(jsonEmployee)

let table = document.createElement('table')
let tr = document.createElement('tr')

for (const key in arrEmployee[0]) {
	let td = document.createElement('td')
	td.textContent = key
	tr.appendChild(td)
}

for (const oject of arrEmployee) {
	console.log(oject)
	let tr = document.createElement('tr')
	for (const key in oject) {
		console.log(oject[key])
		let td = document.createElement('td')
		td.textContent = oject[key]
		tr.appendChild(td)
	}
	table.appendChild(tr)
}

table.insertAdjacentElement('afterbegin', tr)
document.body.appendChild(table)

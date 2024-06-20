//С помощью метода JSON.stringify можно преобразовать массивы и объекты JavaScript в формат JSON. Давайте посмотрим на примере.

let arr = [1, 2, 3, 4, 5, 'a', 'b']

let json = JSON.stringify(arr)

console.log(json)

//Преобразуйте это в формат JSON.

let arr2 = ['user1', 'user2', 'user3', 'user4', 'user5']

let json2 = JSON.stringify(arr2)

console.log(json2)

let lis = document.querySelectorAll('li')

let listCities = []

for (const iterator of lis) {
	listCities.push(iterator.textContent)
}

let jsonLi = JSON.stringify(listCities)
console.log(jsonLi)

//Получите представленные данные в формате JSON в виде объекта с ключами surname, name, patronymic.

function getData() {
	let trs = document.querySelectorAll('tr')

	let arrPerson = []

	function* iter(arr) {
		for (const elem of arr) {
			yield elem
		}
	}
	for (const tr of trs) {
		let tds = Array.from(tr.children)
		let iterNew = iter(tds)
		let obj = {
			surname: iterNew.next().value.textContent,
			name: iterNew.next().value.textContent,
			patronymic: iterNew.next().value.textContent,
		}
		arrPerson.push(obj)
	}

	let jsonPerson = JSON.stringify(arrPerson)

	console.log(arrPerson)
	console.log(jsonPerson)
}

function getTestData() {
	let trs = document.querySelectorAll('tr')

	let arrPerson = []

	for (const value of trs) {
		let obj = {}
		let children = value.childNodes
		for (const [key, value] of children.entries()) {
			if (key === 1) {
				obj.surname = value.textContent
			} else if (key === 3) {
				obj.name = value.textContent
			} else if (key === 5) {
				obj.patronymic = value.textContent
			}
		}
		arrPerson.push(obj)
	}
	let jsonPerson = JSON.stringify(arrPerson)
}

getTestData()

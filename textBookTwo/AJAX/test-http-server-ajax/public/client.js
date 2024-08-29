let ajax = document.querySelector('#ajax')
const btnOne = document.querySelector('#one')
const btnTwo = document.querySelector('#two')
const btnTree = document.querySelector('#tree')

const btnForJson = document.querySelector('#json')

const sendLIst = document.querySelector('#sendLIst')
const list = document.querySelector('#list')

const httpHeader = document.querySelector('#httpHeader')

function addEventAJAX(btn) {
	btn.addEventListener('click', function () {
		const symbol = this.textContent.slice(-1)

		fetch(`./task2/ajax${symbol}.html`)
			.then(response => {
				if (!response.ok) {
					return 'Пиздос'
				}
				return response.text()
			})
			.then(text => {
				ajax.innerHTML = text
			})
	})
}
addEventAJAX(btnOne)
addEventAJAX(btnTwo)
addEventAJAX(btnTree)

const test = document.querySelector('#task')
const btnLoad = document.querySelector('#load')
let counter = 1
btnLoad.addEventListener('click', function fetchLayout() {
	if (counter >= 6) {
		btnLoad.removeEventListener('click', fetchLayout())
	}
	fetch(`./task/task${counter}.html`)
		.then(response => {
			console.log(response.headers.get('Content-language'))
			console.log(response.headers.get('Content-length'))
			if (response.status != 200 && !response.ok) {
				throw new Error('Статус код не 2хх')
			}
			return response.text()
		})
		.then(text => {
			test.innerHTML = text
		})
		.catch(error => {
			test.innerHTML = '<h1>Ошибка</h1>'
			console.log(error)
		})
	counter++
})

btnForJson.addEventListener('click', function () {
	fetch('./data.json')
		.then((response, request) => {
			console.log(response.ok)
			console.log(response.status)
			console.log(request)
			return response.text()
		})
		.then(text => {
			console.log(JSON.parse(text))
			return '<p>file received successfully</p>'
		})
})

sendLIst.addEventListener('click', function () {
	fetch('./array.json')
		.then(response => {
			return response.text()
		})
		.then(test => {
			for (const element of JSON.parse(test)) {
				const li = document.createElement('li')
				li.textContent = element
				list.append(li)
			}
		})
		.catch(error => {
			return 'Pizdos'
		})
})

httpHeader.addEventListener('click', function () {
	let header = fetch('/handler/', {
		headers: { 'Content-type': 'text/plain', name1: 'value1', name2: 'value2' },
	})
})

const sum = document.querySelector('#sum')
const getSum = document.querySelector('#getSum')
getSum.addEventListener('click', function () {
	let promise = fetch('/getSum/?num1=4&num2=8')
		.then(response => {
			return response.text()
		})
		.then(text => {
			sum.innerHTML = text
		})
})

const string = document.querySelector('#string')
const getString = document.querySelector('#getString')
getString.addEventListener('click', function () {
	let count = Math.floor(Math.random() * 3)
	let promise = fetch(`/getString/?count=${count}`)
		.then(response => {
			return response.text()
		})
		.then(text => {
			string.innerHTML = text
		})
})

const newSum = document.querySelector('#newSum')
const getNewSum = document.querySelector('#getNewSum')
getNewSum.addEventListener('click', function () {
	let promise = fetch('/postSum/', {
		method: 'post',
		body: 'num1=3&num2=8&num3=5',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	})
		.then(response => {
			return response.text()
		})
		.then(text => {
			newSum.innerHTML = text
		})
})

const url = document.querySelector('#url')
let divInput = document.querySelector('#divInput')
const urlPost = document.querySelector('#urlPost')
urlPost.addEventListener('click', function () {
	console.log('object')
	let newURL = new URLSearchParams()
	let arrDiv = Array.from(divInput.children)
	console.log(arrDiv)
	for (let i = 0; i < arrDiv.length; i++) {
		console.log(arrDiv[i].value)
		newURL.set(`num${i}`, `${arrDiv[i].value}`)
	}
	let promise = fetch('/urlPost/', {
		method: 'post',
		body: newURL,
	})
		.then(response => {
			return response.text()
		})
		.then(text => {
			url.innerHTML = text
		})
})

const fromData = document.querySelector('#fromData')
const sendData = document.querySelector('#sendData')
sendData.addEventListener('click', function () {
	let obj = { a: 1, b: 2, c: 3 }
	let newData = new FormData()
	for (const key in obj) {
		newData.set(`${key}`, `${obj[key]}`)
	}
	let promise = fetch('/formData/', {
		method: 'POST',
		body: newData,
	})
		.then(response => {
			return response.text()
		})
		.then(text => {
			console.log(text)
			fromData.textContent += 'post'
		})
})

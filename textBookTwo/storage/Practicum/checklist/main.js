//Сделайте чеклист, представляющий собой список дел. Дела можно добавлять, изменять, удалять и помечать сделанными.

function addListInLocale(ul) {
	let arrLocal = Object.keys(localStorage)
	for (const key of arrLocal) {
		addList(ul, localStorage.getItem(key), 'second', key)
	}
}

function maxNum(arr) {
	let max = 0
	for (const num of arr) {
		if (num > max) {
			max = num
		}
	}
	return max
}

const input = document.querySelector('#addList')
const container = document.querySelector('#ul')
const clear = document.querySelector('#clear')

clear.addEventListener('click', function () {
	localStorage.clear()
	for (const elem of [...container.children]) {
		elem.remove()
	}
})

addListInLocale(container)
function addList(ul, text, num, key) {
	let newKey = Object.keys(localStorage).length
	if (localStorage.getItem(newKey)) {
		let arr = Object.keys(localStorage)
		newKey = maxNum(arr)
		newKey++
	}
	if (num == 'first') {
		addLocal(text, newKey)
	} else if (num == 'second') {
		newKey = key
	}

	const li = document.createElement('li')
	li.dataset.key = key
	li.classList = 'elem'
	const task = document.createElement('span')
	task.classList = 'task'
	task.textContent = text
	li.append(task)
	changeTask(task)

	setDone(li)
	setDelate(li)

	ul.appendChild(li)
}

function setDone(li) {
	const spanDoneBtn = document.createElement('span')
	spanDoneBtn.classList = 'Done'
	const btnDone = document.createElement('button')
	btnDone.style.color = 'green'
	btnDone.textContent = 'Done'
	btnDone.addEventListener('click', function () {
		li.style.border = '3px solid green'
		spanDoneBtn.lastChild.remove()
	})
	spanDoneBtn.appendChild(btnDone)
	li.appendChild(spanDoneBtn)
}

function setDelate(li) {
	const spanDelateBtn = document.createElement('span')
	spanDelateBtn.classList = 'Delate'
	const btnDelate = document.createElement('button')
	btnDelate.textContent = 'Delate'
	btnDelate.style.color = 'red'

	btnDelate.addEventListener('click', function () {
		spanDelateBtn.parentElement.remove()
		let key = spanDelateBtn.parentElement.dataset.key
		localStorage.removeItem(key)
	})
	spanDelateBtn.appendChild(btnDelate)
	li.appendChild(spanDelateBtn)
}

function changeTask(elem) {
	elem.addEventListener('dblclick', function () {
		let input = document.createElement('textArea')
		let text = this.textContent
		input.value = text
		this.textContent = ''
		input.addEventListener('keydown', function (event) {
			if (event.key == 'Enter') {
				elem.textContent = this.value
				let key = elem.parentElement.dataset.key
				localStorage.setItem(key, this.value)
			}
		})
		this.appendChild(input)
	})
}

function addLocal(text, key) {
	localStorage.setItem(key, text)
}

input.addEventListener('keydown', function (event) {
	if (event.key == 'Enter') {
		addList(container, this.value, 'first')
		this.value = ''
	}
})

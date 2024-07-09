//Сделайте блокнот, в котором можно будет создавать записи. Пусть он представляет собой textarea для ввода текста. Слева от поля ввода должны размещаться ссылки на сохраненные записи. По нажатию на ссылку запись должна открываться в редакторе для просмотра и редактирования текста.

function createNotepad() {
	const left = document.querySelector('#left')
	const right = document.querySelector('#right')

	createRight(right, left, 'Undefined', '')
}

function changeInput(thisElement) {
	let thisElem = thisElement
	const input = document.createElement('input')
	input.value = thisElem.textContent

	input.addEventListener('keydown', function (event) {
		if (event.key == 'Enter') {
			thisElem.textContent = this.value
		}
	})
	input.addEventListener('blur', function () {
		thisElem.textContent = this.value
	})
	thisElem.textContent = ''
	thisElem.append(input)
}

function createName(name) {
	const nameNode = document.createElement('p')
	nameNode.textContent = name
	nameNode.classList = 'name'
	nameNode.addEventListener('dblclick', function () {
		changeInput(this)
	})

	return nameNode
}

function createArea(textCon, left, key) {
	let right = document.querySelector('#right')
	let text = document.createElement('textArea')
	if (key) {
		text.dataset.locale = key
	}
	text.value = textCon
	text.setAttribute('placeholder', 'add text end press ctrl+enter for save')
	text.addEventListener('focus', function (event) {})
	text.addEventListener('keydown', function (event) {
		let thisText = this
		if (event.key == 'Tab' && event.shiftKey) {
			if (
				text.value.slice(text.selectionStart - 2, text.selectionStart) == '  '
			)
				text.value =
					text.value.substring(0, text.selectionStart - 2) +
					text.value.substring(text.selectionEnd)
			event.preventDefault()
		}
		if (event.key == 'Tab' && !event.shiftKey) {
			text.value =
				text.value.substring(0, text.selectionStart) +
				'  ' +
				text.value.substring(text.selectionEnd)
			event.preventDefault()
		}
		if (event.ctrlKey && event.key == 'Enter') {
			const name = this.parentElement.firstChild.textContent
			if (text.dataset.locale) {
				let elem = document.querySelector(
					`[data-locale='${text.dataset.locale}']`
				)
				elem.remove()
				saveLocale(name, text.value, text.dataset.locale)
				left.append(createListElem(name, text.value, text.dataset.locale))
				clearChild(right)
				createNotepad()
			} else {
				let key = createKey()
				saveLocale(name, text.value, key)
				left.append(createListElem(name, text.value, key))
				clearChild(right)
				createNotepad()
			}
		}
	})
	return text
}

function createKey() {
	let arr = Object.keys(localStorage)
	let max = 0
	for (const iterator of arr) {
		if (iterator.startsWith('nodePadElem')) {
			if (Number(iterator.slice(-1)) > max) {
				max = Number(iterator.slice(-1))
			}
		}
	}
	max++
	return `nodePadElem ${max}`
}

function saveLocale(name, text, key) {
	let nodeElem = {
		name: name,
		text: text,
	}
	localStorage.setItem(key, JSON.stringify(nodeElem))
}

function clearChild(elem) {
	for (const iterator of [...elem.children]) {
		iterator.remove()
	}
}

function createElemWithText(elem, text) {
	let element = document.createElement(elem)
	element.textContent = text
	return element
}

function createListElem(name, text, key) {
	let div = document.createElement('div')
	div.dataset.locale = key
	div.classList = 'listElem'
	let deleteBtn = document.createElement('button')
	deleteBtn.classList = 'clear'
	deleteBtn.textContent = 'del'
	deleteBtn.addEventListener('click', function (event) {
		clearChild(document.querySelector('#right'))
		const parent = this.parentElement
		parent.remove()
		localStorage.removeItem(parent.dataset.locale)
		event.stopPropagation()
		createNotepad()
	})
	const pName = createElemWithText('div', name)
	pName.classList = 'name-elem'
	div.addEventListener('click', function () {
		let left = document.querySelector('#left')
		let right = document.querySelector('#right')
		clearChild(right)
		createRight(right, left, name, text, key)
	})
	div.append(pName, deleteBtn)
	return div
}

function createListOnLocale(left) {
	const localeArr = Object.keys(localStorage)
	for (const key of localeArr) {
		if (key.startsWith('nodePadElem')) {
			let nodeItem = JSON.parse(localStorage.getItem(key))
			left.append(createListElem(nodeItem.name, nodeItem.text, key))
		}
	}
}

createListOnLocale(document.querySelector('#left'))

function createRight(right, left, name, text, key) {
	right.append(createName(name), createArea(text, left, key))
}

function clearBtn() {
	let left = document.querySelector('#left')
	let clear = document.querySelector('#clear')
	clear.addEventListener('click', function () {
		let notFirst = [...left.children].slice(1)
		localStorage.clear()
		for (const iterator of notFirst) {
			iterator.remove()
		}
	})
}

clearBtn()
createNotepad()

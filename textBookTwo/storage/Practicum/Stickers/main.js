//Сделайте стикеры для оставления коротких записей. Стикеры должны представлять собой блоки текста, расположенные на странице в виде плиточки. Пользователь может создавать новые стикеры через textarea, а также редактировать и удалять их. Каждый новый стикер должен добавляться в конец плиточки.
function stickersProgram() {
	function addEllipsis(elem) {
		const containerHeight = elem.clientHeight
		const textHeight = elem.scrollHeight
		if (textHeight > containerHeight) {
			elem.classList.add('ellipsis')
		} else {
			elem.classList.remove('ellipsis')
		}
	}

	function createLocalStick(flag, container) {
		if (flag) {
			for (const key of Object.keys(localStorage)) {
				if (key.startsWith('stickers')) {
					let text = localStorage.getItem(key)
					addElement(container, createSticker(text, key))
				}
			}
		}
	}

	function checkLocale() {
		for (const key of Object.keys(localStorage)) {
			if (key.startsWith('stickers')) {
				return true
			}
		}
		return false
	}

	function checkData(elem) {
		return elem.dataset.stickers
	}

	function addElement(container, element) {
		container.append(element)
	}

	function createSticker(text, key) {
		const stickers = document.createElement('div')
		stickers.classList = 'stickers'
		stickers.dataset.stickers = key
		stickers.addEventListener('click', function () {
			changeStickers(document.querySelector('#text'), text, key)
		})

		const textSave = document.createElement('p')
		textSave.classList = 'text-save'
		textSave.textContent = text
		addEllipsis(textSave)
		stickers.append(textSave, addBtnDel(key))
		return stickers
	}

	function changeStickers(elem, text, key) {
		elem.value = text
		elem.dataset.stickers = key
	}

	function addBtnDel(key) {
		const delBtn = document.createElement('button')
		delBtn.classList = 'delete'
		delBtn.textContent = 'delete'
		delBtn.addEventListener('click', function (event) {
			localStorage.removeItem(key)
			this.parentElement.remove()
			event.stopPropagation()
		})
		return delBtn
	}

	function saveLocalSticker(text, key) {
		localStorage.setItem(key, text)
	}

	function createKey() {
		let max = 0
		let arrKeys = Object.keys(localStorage)
		for (const key of arrKeys) {
			if (key.startsWith('stickers')) {
				let num = Number(key.slice(-1))
				if (num > max) {
					max = num
				}
			}
		}
		max++
		return `stickers ${max}`
	}

	function removeElemForData(data) {
		console.log(data)
		let elem = document.querySelector(`[data-stickers="${data}"]`)
		console.log(elem)
		elem.remove()
	}

	let addBtn = document.querySelector('#add')
	let container = document.querySelector('#container')

	createLocalStick(checkLocale(), container)

	addBtn.addEventListener('click', function () {
		let textArea = document.querySelector('#text')
		let text = textArea.value

		if (checkData(textArea)) {
			let data = checkData(textArea)
			saveLocalSticker(text, checkData(textArea))
			textArea.removeAttribute('data-stickers')
			removeElemForData(data)
			addElement(container, createSticker(text, checkData(textArea)))
			textArea.value = ''
		} else {
			let key = createKey()
			saveLocalSticker(text, key)
			addElement(container, createSticker(text, key))
			textArea.value = ''
		}
	})
}

stickersProgram()

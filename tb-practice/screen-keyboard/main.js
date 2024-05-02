// На ней должны быть кнопочки со всеми буквами и цифрами клавиатуры компьютера. Кликая мышкой по этим кнопочкам мы сможем вводить данные, например, при неработающей клавиатуре.

let keyboard = {
	sound: new Audio('button.mp3'),
	language: true,
	table: document.querySelector('table'),
	text: document.querySelector('#text'),
	copy: document.querySelector('#copy'),
	clear: document.querySelector('#clear'),
	Eng: [
		['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
		['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
		['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"'],
		['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
		['lang', 'space'],
	],
	EngCaps: [
		['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
		['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
		['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '"'],
		['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'],
		['lang', 'space'],
	],
	Rus: [
		['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
		['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
		['Caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
		['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'],
		['lang', 'space'],
	],
	RusCaps: [
		['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
		['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'],
		['Caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э'],
		['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.'],
		['lang', 'space'],
	],
	save: [],
	createEvent: function (lang) {
		let space = document.querySelector('#space')
		let caps = document.querySelector('#Caps')
		let langu = document.querySelector('#lang')
		keyboard.clear.addEventListener('click', function () {
			text.value = ''
		})
		keyboard.copy.addEventListener('click', function () {
			let textCopy = text.value
			let textArea = document.createElement('textarea')
			textArea.textContent = textCopy
			console.log(textArea)
			document.body.appendChild(textArea)
			textArea.select()
			document.execCommand('copy')
			document.body.removeChild(textArea)
		})
		space.addEventListener('click', function (event) {
			console.log(event)
			text.value += ' '
		})
		caps.addEventListener('click', function () {
			// console.log()
			keyboard.table.innerHTML = ''
			console.log(lang.indexOf('Caps'))

			if (lang.indexOf('Caps') === -1) {
				keyboard.creteKeyboard(lang + 'Caps')
			} else {
				keyboard.creteKeyboard(lang.slice(0, 3))
			}
		})
		langu.addEventListener('click', function () {
			keyboard.table.innerHTML = ''
			if (keyboard.language) {
				keyboard.creteKeyboard('Rus')
				keyboard.language = false
			} else {
				keyboard.creteKeyboard('Eng')
				keyboard.language = true
			}
		})
	},

	creteKeyboard: function (lang) {
		for (let i = 0; i < 5; i++) {
			let tr = document.createElement('tr')
			tr.classList.add(`row${i}`)
			for (const elem of keyboard[lang][i]) {
				let td = document.createElement('td')
				td.setAttribute('id', elem)
				td.textContent = elem
				tr.appendChild(td)
				td.addEventListener('mouseover', function () {
					let newSound = new Audio('button.mp3')
					newSound.play()
				})
				if (elem !== 'lang' && elem !== 'Caps' && elem !== 'space') {
					td.addEventListener('click', function add() {
						text.value += elem
					})
				}
			}
			this.table.appendChild(tr)
		}
		this.createEvent(lang)
	},
}

keyboard.creteKeyboard('Eng')

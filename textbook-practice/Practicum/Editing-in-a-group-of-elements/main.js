//Редактирование в группе элементов

//Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредатировать текст этой li.

let lis = document.querySelectorAll('ul li')
for (const li of lis) {
	li.addEventListener('click', function add() {
		let input = document.createElement('input')
		input.value = li.textContent
		li.textContent = ''
		li.appendChild(input)
		input.addEventListener('blur', function () {
			li.textContent = this.value
			li.addEventListener('click', add)
		})

		li.removeEventListener('click', add)
	})
}

//Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки.

function inputChange(elem) {
	elem.addEventListener('click', function add() {
		let input = document.createElement('input')
		input.value = elem.textContent
		elem.textContent = ''
		elem.appendChild(input)
		input.addEventListener('blur', function () {
			elem.textContent = this.value
			elem.addEventListener('click', add)
		})
		elem.removeEventListener('click', add)
	})
}

let tds = document.querySelectorAll('table td')
for (const td of tds) {
	inputChange(td)
}

let elems = document.querySelectorAll('p')

let map = new Map()

let i = 1
for (let elem of elems) {
	map.set(elem, i++)
}

for (const elem of elems) {
	elem.addEventListener('click', function () {
		this.textContent += map.get(this)
	})
}

//Даны инпуты. Переберите эти инпуты циклом и создайте коллекцию Map, ключами в которой будут инпуты, а значением - их порядковый номер на странице. Сделайте так, чтобы по клику на любой инпут ему в value записывался его порядковый номер.

let inputs = document.querySelectorAll('input')

let inputMap = new Map()

let indexInput = 1

for (const input of inputs) {
	inputMap.set(input, indexInput++)
	input.addEventListener('click', function () {
		this.value += inputMap.get(this)
	})
}

//Даны инпуты. В каждый инпут можно ввести число. Пусть по нажатию на Enter инпут запоминает введенное число. Сделайте так, чтобы по потери фокуса в инпуте в консоль выводился массив всех введенных ранее в инпут чисел.

let inpNumbers = document.querySelectorAll('.test')

let numMap = new Map()

for (const inpNum of inpNumbers) {
	let arr = []
	numMap.set(inpNum, arr)
}

for (const inpNmm of inpNumbers) {
	inpNmm.addEventListener('keydown', function (event) {
		if ((event.key = 'Enter')) {
			if (this.value) {
				numMap.get(this).push(this.value)
				this.value = ''
			}
		}
	})
	inpNmm.addEventListener('blur', function () {
		console.log(numMap.get(this))
	})
}

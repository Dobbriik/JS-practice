//
let elem = document.querySelector('#elem')

elem.addEventListener('click', function () {
	function clg1() {
		console.log(this.value) // будет выводится undefined
	}
	let clgNew = clg1.bind(this)

	setInterval(clgNew, 1000)
})

//Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду увеличивалось на 1. Однако, по нажатию на кнопку вообще ничего не происходит. Исправьте ошибку автора кода. Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка.

let elem2 = document.querySelector('#elem2')

elem2.addEventListener('click', function addElem2() {
	let self = this
	let idInterval = setInterval(function () {
		self.value = Number(self.value) + 1
	}, 1000)
	this.removeEventListener('click', addElem2)
})

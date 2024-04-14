//Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.

let par = document.querySelector('p')
let button = document.querySelector('button')

button.addEventListener('click', function add() {
	setInterval(() => {
		par.textContent++
	}, 1000)
})

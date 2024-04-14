//Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.

let inp = document.querySelector('input')
let button = document.querySelector('button')
let par = document.querySelector('p')

button.addEventListener('click', function () {
	par.textContent += +inp.value
	let idInterval = setInterval(() => {
		par.textContent--
		if (par.textContent <= 0) {
			clearInterval(idInterval)
		}
	}, 1000)
})

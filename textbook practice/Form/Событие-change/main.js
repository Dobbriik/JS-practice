//Дан инпут и абзац. По изменению инпута выведите его текст в абзац.
let elem = document.querySelector('#elem')
let par = document.querySelector('p')

elem.addEventListener('change', function () {
	par.textContent = this.value
})

// Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.

let checkBox = document.querySelector('#checkbox')

checkBox.addEventListener('change', function () {
	console.log(this.checked)
})

//Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.

let inpCheck = document.querySelector('#checked')

inpCheck.addEventListener('change', function () {
	if (this.value.length < 5) {
		this.style.border = '1px solid green'
		this.style.borderRadius = '2px'
	} else {
		this.style.border = '1px solid red'
		this.style.borderRadius = '2px'
	}
})

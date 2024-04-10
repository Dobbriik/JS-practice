// Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.
let check = document.querySelector('input')
let press = document.querySelector('button')

press.addEventListener('click', function () {
	check.checked = !check.checked
})

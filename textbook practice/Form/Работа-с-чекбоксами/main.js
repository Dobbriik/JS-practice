// Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.
// Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.

let elem = document.querySelector('#elem')
let btnON = document.querySelector('.on')
let btnOff = document.querySelector('.off')
let btnText = document.querySelector('.text')
let par = document.querySelector('p')

btnON.addEventListener('click', function () {
	elem.checked = true
})

btnOff.addEventListener('click', function () {
	elem.checked = false
})

btnText.addEventListener('click', function () {
	if (elem.checked) {
		par.textContent = 'Привет'
	} else {
		par.textContent = 'Пока'
	}
})

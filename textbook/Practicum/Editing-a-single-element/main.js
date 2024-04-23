//Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут.
let elem = document.querySelector('#elem')
let input = document.querySelector('#input')

input.value = elem.textContent // записываем в инпут текст абзаца

// input.addEventListener('blur', function () {
// 	elem.textContent = this.value
// })
//
input.addEventListener('input', function () {
	elem.textContent = this.value
})

let par = document.querySelector('#par')
par.style.color = 'red'
par.style.cursor = 'pointer'

par.addEventListener('click', function () {
	console.log('object')
	let inp = document.createElement('input')
	inp.value = par.textContent
	par.insertAdjacentElement('afterend', inp)
	inp.addEventListener('blur', function () {
		par.textContent = inp.value
		this.remove()
	})
})

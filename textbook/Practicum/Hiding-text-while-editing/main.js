//Прячем текст при редактировании элемента
let par = document.createElement('p')
par.textContent = 'Text'
document.body.appendChild(par)

par.addEventListener('click', function add() {
	let input = document.createElement('input')
	input.value = par.textContent
	par.textContent = ''
	par.appendChild(input)
	input.addEventListener('blur', function () {
		par.textContent = this.value
		par.addEventListener('click', add)
	})

	par.removeEventListener('click', add)
})

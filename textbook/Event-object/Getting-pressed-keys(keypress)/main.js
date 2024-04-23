//Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды.
let elem = document.querySelector('input')

elem.addEventListener('keypress', function (event) {
	console.log(event.key)
	console.log(event.code)
})

//Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы в этот момент введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.

let inp = document.querySelector('#text')
let par = document.querySelector('p')

inp.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		par.textContent += ` ${inp.value}`
		inp.value = ''
	}
})

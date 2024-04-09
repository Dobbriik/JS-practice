//По потери фокуса текст из textarea должен записаться в див:
let textarea = document.querySelector('textarea')
let div1 = document.querySelector('.div')

textarea.addEventListener('blur', function () {
	div1.textContent = textarea.value
})

//По клику на кнопку в див должно записаться или одно, или другое значение:

let checkbox = document.querySelector('#checkbox')
let button = document.querySelector('#button')
let div2 = document.querySelector('#div')

button.addEventListener('click', function () {
	if (checkbox.checked) {
		div2.textContent = '111'
	} else {
		div2.textContent = '222'
	}
})

//По клику на кнопку, если чекбокс отмечен, то должно вывестись одно значение, а если не отмечен - другое:

let checkbox1 = document.querySelector('#checkbox1')
let button1 = document.querySelector('#button1')

button1.addEventListener('click', function () {
	if (checkbox1.checked) {
		console.log('+++')
	} else {
		console.log('---')
	}
})

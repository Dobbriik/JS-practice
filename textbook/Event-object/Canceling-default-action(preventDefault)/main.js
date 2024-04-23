//
let elem = document.querySelector('#elem')

elem.addEventListener('click', function (event) {
	event.preventDefault()
	console.log('Вы не можете перейти по этой ссылке!')
})
//Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.

let elem1 = document.querySelector('#elem1')

elem1.addEventListener('click', function (event) {
	event.preventDefault()
	elem1.textContent += elem1.href
})

//Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.

let inp1 = document.querySelector('#inp1')
let inp2 = document.querySelector('#inp2')
let par = document.querySelector('p')
let link = document.querySelector('#link')

link.addEventListener('click', function (event) {
	event.preventDefault()
	par.textContent = +inp1.value + +inp2.value
})

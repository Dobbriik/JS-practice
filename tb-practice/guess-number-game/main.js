//Сейчас мы реализуем игру угадай число. В этой игре компьютер загадывает число от 1 до 100. В инпут на экране игрок вводит число от 1 до 100, пытаясь угадать, что же загадал компьютер.

//Если игрок ввел число, меньше загаданного, компьютер должен написать 'введите число побольше', а если введено больше загаданного, то, соответственно, компьютер должен написать 'введите число поменьше'.
let random = Math.floor(Math.random() * 99 + 1)

let input = document.querySelector('input')

let span = document.querySelector('span')
span.textContent = random

let idInterval = setInterval(function () {
	let rand = Math.floor(Math.random() * 99 + 1)
	span.textContent = rand
}, 300)

let divInput = document.querySelector('.div__input')
// divInput.classList += ' less'
console.log(divInput.style)

let par = document.querySelector('.par')
par.style.fontSize = '20px'

let btn = document.querySelector('button')

let audio = document.querySelector('audio')
let result1 = 0
btn.addEventListener('click', function start() {
	span.classList.toggle('blur')
	setTimeout(function () {
		clearInterval(idInterval)
		result1 = span.textContent
		if (+span.textContent < 10) {
			span.textContent = '5'
		} else {
			span.textContent = '55'
		}
	}, 1000)
	// console.log(span.textContent)
	btn.textContent = 'Угадать'
	btn.removeEventListener('click', start)
	btn.addEventListener('click', function guess() {
		let num = +input.value
		divInput.classList = 'div__input'
		if (num > result1) {
			divInput.classList.add('less')
		} else if (num < result1) {
			divInput.classList.add('more')
		} else if (num === num) {
			span.textContent = result1
			span.style.color = '#3dff3d'
			span.classList.toggle('blur')
			par.textContent = 'Угадал!!!'
			par.style.color = '#3dff3d'
			btn.addEventListener('click', guess)
			btn.textContent = 'Заново'
			audio.play()
			btn.addEventListener('click', function () {
				location.reload()
			})
			console.log('win')
		}
	})
})

btn.addEventListener('dblclick', function () {
	console.log(result1)
})

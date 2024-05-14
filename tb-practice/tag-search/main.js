//Сделаем сайт, который будет помогать определить значение HTML тега. Пусть в этом скрипте будет инпут, в который пользователь будет вводить имя тега. После этого по нажатию на Enter под инпутом пусть выдается описание этого тега.

import { tagDescriptionsList } from './src/tags-info.mjs'

function getDesc(tagName) {
	return tagDescriptionsList[tagName] || 'Не верный тег'
}

function addDesc(tagName) {
	desc.textContent = ''
	desc.textContent = getDesc(tagName)
}

console.log(tagDescriptionsList)

let input = document.querySelector('#text')
let btn = document.querySelector('#btn')
let desc = document.querySelector('#desc')

btn.addEventListener('click', function () {
	addDesc(input.value)
})

document.addEventListener('keydown', function (event) {
	console.log(event.keyCode)
	if (event.keyCode === 13) {
		addDesc(input.value)
	}
})

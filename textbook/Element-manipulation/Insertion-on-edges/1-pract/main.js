//Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.

let list = document.querySelector('#elem')

let start = document.querySelector('#start')
let finish = document.querySelector('#finish')

start.addEventListener('click', function () {
	let item = document.createElement('li')
	item.textContent = 'start'
	list.prepend(item)
})

finish.addEventListener('click', function () {
	let item = document.createElement('li')
	item.textContent = 'finish'
	list.append(item)
})

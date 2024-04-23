//
let button = document.querySelector('button')
let list = document.querySelector('ul')
let items = list.querySelectorAll('li')

for (let item of items) {
	item.addEventListener('click', handler)
}

function handler() {
	this.textContent = this.textContent + '!'
}

// button.addEventListener('click', function () {
// 	let item = document.createElement('li')
// 	item.textContent = 'item'
// 	list.appendChild(item)
// })

button.addEventListener('click', function () {
	let item = document.createElement('li')
	item.textContent = 'item'

	item.addEventListener('click', handler)

	list.appendChild(item)
})

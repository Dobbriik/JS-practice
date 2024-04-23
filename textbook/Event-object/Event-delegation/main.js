//
let list = document.querySelector('#list')
let btnAdd = document.querySelector('#addList')

btnAdd.addEventListener('click', function () {
	let elem = document.createElement('li')
	elem.textContent = 'lorem'
	list.appendChild(elem)
})

list.addEventListener('click', function (event) {
	if (event.target.matches('ul')) {
		return
	}
	event.target.innerHTML += '!'
})

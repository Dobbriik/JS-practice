//
let parent = document.querySelector('#parent')
let button = document.querySelector('button')
let block = document.querySelector('#block')

button.addEventListener('click', function (event) {
	block.classList.add('active')
	event.stopImmediatePropagation()
})

parent.addEventListener('click', function () {
	block.classList.remove('active')
})

let div = document.querySelector('div')
let computedStyle = getComputedStyle(div)
let buttonSet = document.querySelector('#set')
let buttonRemove = document.querySelector('#remove')
let buttonTask = document.querySelector('#task')

buttonSet.addEventListener('click', function () {
	div.style.cssText = `
	color: red;
	font-size: 20px;
	width: 100px;
	border: 1px solid black;
	`
	console.log(computedStyle.width)
})

buttonRemove.addEventListener('click', function () {
	div.style.cssText = ''
})

buttonTask.addEventListener('click', function () {
	let divComputedStyle = getComputedStyle(div)
	div.style.width = parseInt(divComputedStyle.width) * 2 + 'px'
	div.style.height = parseInt(divComputedStyle.height) * 2 + 'px'
	console.log(divComputedStyle.fontSize)
})

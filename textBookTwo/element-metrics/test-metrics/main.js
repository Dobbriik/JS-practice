let div = document.querySelector('#elem')
let setBtn = document.querySelector('#set')
let showBtn = document.querySelector('#show')
let testBtn = document.querySelector('#test')

let topDesc = document.querySelector('#top')
let leftDesc = document.querySelector('#left')

setBtn.addEventListener('click', function () {
	console.log(div.clientHeight)
	console.log(div.clientWidth)

	console.log(div.offsetHeight)
	console.log(div.offsetWidth)

	// border and overflow
	console.log(div.offsetHeight - div.clientHeight)
	console.log(div.offsetWidth - div.clientWidth)

	console.log(div.scrollHeight)
	console.log(div.scrollWidth)

	// hidden text
	console.log(div.scrollHeight - div.offsetHeight)
	console.log(div.scrollWidth - div.offsetWidth)
})

showBtn.addEventListener('click', function () {
	topDesc.textContent = `T: ${div.scrollTop}`
	leftDesc.textContent = `L: ${div.scrollLeft}`

	if (div.scrollTop) {
		console.log(true)
	} else {
		console.log(false)
	}

	// clientHeight
	console.log(div.scrollHeight - div.scrollTop)
	console.log(div.scrollHeight - (div.offsetHeight + div.scrollTop))
})

testBtn.addEventListener('click', function () {
	// console.log(Math.ceil(div.scrollTop))
	// console.log(elem.scrollHeight)
	// console.log(elem.clientHeight)

	// div.scrollTop = div.scrollHeight - div.clientHeight
	// if (Math.ceil(div.scrollTop) >= div.scrollHeight - div.clientHeight) {
	// 	console.log(true)
	// } else {
	// 	console.log(false)
	// }
	div.style.height = div.scrollHeight + 'px'
})

let divTest = document.createElement('div')
divTest.style.overflowY = 'scroll'
divTest.style.width = '50px'
divTest.style.height = '50px'
document.body.append(divTest)

let scrollWidth = divTest.offsetWidth - divTest.clientWidth
console.log(scrollWidth)

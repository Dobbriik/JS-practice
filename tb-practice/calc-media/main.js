//
let mediaMin = document.querySelector('#mediaMin')
let start = document.querySelector('#start')
let mediaMax = document.querySelector('#mediaMax')
let end = document.querySelector('#end')

let res = document.querySelector('#res')

let button = document.querySelector('button')

button.addEventListener('click', function () {
	// console.log(res.nextElementSibling.tagName)
	if (res.nextElementSibling.tagName === 'BUTTON') {
		res.nextElementSibling.remove()
	}

	res.textContent = ''
	let y1 = Number(start.value)
	let y2 = Number(end.value)
	let x1 = Number(mediaMin.value)
	let x2 = Number(mediaMax.value)

	console.log(y1, y2, x1, x2)

	// y1 = k * x1 + b
	// y2 = k * x2 + b
	// b = y1 - k * x1
	// b = y2 - k * x2
	// y1-y2 = k*x1 -k*x2
	// k*(x1-x2) = y1-y2

	// let kx = x1 - x2
	// console.log('kx' + kx)
	let k = (y1 - y2) / (x1 - x2)
	console.log('k' + k)

	let b = y1 - k * x1
	console.log('b' + b)

	// b =k * x2 - y2
	// b =k * x1 - y1
	console.log(k * x2 - y2)
	console.log(k * x1 - y1)
	// y1-y2 = k*x1 +b -(k*x2 + b)
	// k*x1- k*x2 = y1 - y2

	res.textContent = `width: calc(${k * 100}vw + ${b}px)`
	// console.log(res.select())

	let copyBtn = document.createElement('button')
	copyBtn.textContent = 'Копировать'

	res.insertAdjacentElement('afterEnd', copyBtn)

	copyBtn.addEventListener('click', function () {
		var textToCopy = document.getElementById('res').innerText
		var textArea = document.createElement('textarea')
		textArea.value = textToCopy
		document.body.appendChild(textArea)
		textArea.select()
		document.execCommand('copy')
		document.body.removeChild(textArea)
	})
})

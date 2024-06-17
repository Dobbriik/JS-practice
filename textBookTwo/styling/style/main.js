let div = document.querySelector('div')
let elem = document.querySelector('#elem')
let elemTwo = document.querySelector('#elemTwo')
let elemFour = document.querySelector('#elemFour')
let set = document.querySelector('#btnSet')
let setTwo = document.querySelector('#btnSetTwo')
let setThree = document.querySelector('#btnSetThree')
let setFour = document.querySelector('#btnSetFour')

div.style.width = '100.2px'
let width = div.style.width
console.log(parseFloat(width + '3'))
console.log(parseFloat(width) + 2 + 'em')

function getEventElem(elem, func) {
	elem.addEventListener('click', function () {
		func()
	})
}
getEventElem(set, function () {
	div.style.width = '400px'
	div.style.height = '300px'
})

getEventElem(setTwo, function () {
	let width = elem.style.width
	let height = elem.style.height
	console.log(parseInt(width))
	console.log(parseInt(height))
})

getEventElem(setTwo, function () {
	console.log(parseInt(elemTwo.style.fontSize + 2))
	console.log(elemTwo.style.fontSize)
})

getEventElem(setFour, function () {
	setNewSizeFloat(elemFour, 0.01)
	console.log(elemFour.style.border)
})

function setNewSize(elem, change) {
	let widthNm = parseInt(elem.style.width)
	let heightNm = parseInt(elem.style.height)

	elem.style.width = widthNm + change + 'px'
	elem.style.height = heightNm + change + 'px'
}

function setNewSizeFloat(elem, change) {
	let widthNm = parseInt(elem.style.width)
	let heightNm = parseInt(elem.style.height)

	elem.style.width = widthNm + widthNm * change + 'px'
	elem.style.height = heightNm + heightNm * change + 'px'
}

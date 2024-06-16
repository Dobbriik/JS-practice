let texts = ['text1', 'text2', 'text3']
let div = document.querySelector('#slider')
let left = document.querySelector('#left')
let right = document.querySelector('#right')

let i = 0
div.textContent = texts[0]

function changeTextEvent(signs, arr, elem) {
	if (signs == 'dec') {
		i--
	} else if (signs == 'inc') {
		i++
	}
	if (i < 0) {
		i = arr.length - 1
	} else if (i >= arr.length) {
		i = 0
	}

	elem.textContent = arr[i]
}

left.addEventListener('click', function (event) {
	event.preventDefault()
	changeTextEvent('dec', texts, div)
})
right.addEventListener('click', function (event) {
	event.preventDefault()
	changeTextEvent('inc', texts, div)
})

function addSlider(arr, elem, timer) {
	let id = setInterval(function () {
		if (i == arr.length - 1) {
			elem.textContent = arr[i]
			i = 0
		} else {
			elem.textContent = arr[i]
			i++
		}
	}, timer)
	return id
}

// let idSlider = addSlider(texts, div, 1000)

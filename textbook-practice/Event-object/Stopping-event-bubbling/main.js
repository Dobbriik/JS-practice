//
elem1.addEventListener('click', function () {
	console.log('зеленый')
})
elem2.addEventListener('click', function (event) {
	console.log('голубой')
	event.stopPropagation() // остановим всплытие
})
elem3.addEventListener('click', function () {
	console.log('красный')
})

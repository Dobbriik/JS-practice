//Для того, чтобы полностью остановить обработку, современные браузеры поддерживают метод stopImmediatePropagation. Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе. Давайте его применим:

elem1.addEventListener('click', function () {
	console.log('зеленый')
})
elem2.addEventListener('click', function (event) {
	console.log('голубой - первый обработчик')
	event.stopImmediatePropagation() // остановим всплытие
})
elem2.addEventListener('click', function () {
	console.log('голубой - второй обработчик')
	// уже не сработает
})
elem3.addEventListener('click', function () {
	console.log('красный')
})

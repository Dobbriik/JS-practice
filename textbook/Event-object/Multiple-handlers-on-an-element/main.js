//Если у элемента есть несколько обработчиков на одно событие, то даже при прекращении всплытия все они будут выполнены. То есть, stopPropagation препятствует продвижению события дальше, но на текущем элементе все обработчики отработают. Смотрите пример:

elem1.addEventListener('click', function () {
	console.log('зеленый')
})
elem2.addEventListener('click', function (event) {
	console.log('голубой - первый обработчик')
	event.stopPropagation() // остановим всплытие
})
elem2.addEventListener('click', function () {
	console.log('голубой - второй обработчик')
	// все равно сработает
})
elem3.addEventListener('click', function () {
	console.log('красный')
})

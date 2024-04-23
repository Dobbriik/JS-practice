//
let elem = document.querySelector('#elem')

let idTimer1 = setInterval(function () {
	elem.value = +elem.value + 1
	if (elem.value > 9) {
		clearInterval(idTimer1)
	}
}, 500)

//Пусть в инпуте в атрибуте value изначально записано число 10. Запустите таймер, который каждую секунду будет уменьшать это число на единицу.

let elem2 = document.querySelector('#elem2')

let idTimer2 = setInterval(function () {
	elem2.value--
	if (elem2.value <= 0) {
		clearInterval(idTimer2)
	}
}, 500)

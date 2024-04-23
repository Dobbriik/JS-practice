//Теперь в каждом из модулей мы можем использовать любые переменные и функции, не боясь того, что они будут конфликтовать с другими переменными и функциями нашего скрипта.

//Например, оба элемента мы храним в переменной elem - каждый в своей переменной своего модуля. Если бы модулей здесь не было, пришлось бы вводить разные переменные для хранения наши элементов. А с модулями мы можем спокойно использовать нашу переменную, не боясь того, что кто-то захочет также использовать эту переменную.

;(function () {
	let elem = document.querySelector('#div1') // первый див

	function func(num) {
		return num * num // возведем в квадрат
	}

	elem.addEventListener('click', function () {
		this.textContent = func(elem.textContent)
	})
})()
;(function () {
	let elem = document.querySelector('#div2') // второй див

	function func(num) {
		return num * num * num // возведем в куб
	}

	elem.addEventListener('click', function () {
		this.textContent = func(elem.textContent)
	})
})()

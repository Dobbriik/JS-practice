//Экспорт объекта в модулях через замыкания

;(function () {
	let module = {}

	module.func1 = function () {
		alert('функция модуля')
	}
	module.func2 = function () {
		alert('функция модуля')
	}
	module.func3 = function () {
		alert('функция модуля')
	}

	window.module = module
})()

//Экспортируйте наружу объект с первыми пятью функциями и первыми двумя переменными.
;(function () {
	let moduleElem = {}
	moduleElem.str1 = 'переменная модуля'
	moduleElem.str2 = 'переменная модуля'
	let str3 = 'переменная модуля'

	moduleElem.func1 = function () {
		alert('функция модуля')
	}
	moduleElem.func2 = function () {
		alert('функция модуля')
	}
	function func3() {
		alert('функция модуля')
	}
	function func4() {
		alert('функция модуля')
	}
	function func5() {
		alert('функция модуля')
	}
	window.moduleElem = moduleElem
})()

console.log(moduleElem.str1)

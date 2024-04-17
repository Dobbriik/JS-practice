//Иногда нужно сделать так, чтобы некоторые переменные и функции модуля были доступны снаружи.

;(function () {
	let str = 'переменная модуля'

	function func() {
		console.log('функция модуля')
	}

	window.func = func
})()

func() // выведет 'функция модуля'

//Экспортируйте наружу одну из переменных и две любые функции.
;(function () {
	let str1 = 'переменная модуля'
	let str2 = 'переменная модуля'
	let str3 = 'переменная модуля'

	function func1() {
		alert('функция модуля')
	}
	function func2() {
		alert('функция модуля')
	}
	function func3() {
		alert('функция модуля')
	}
	window.str1 = str1
	window.func1 = func1
	window.func2 = func2
})()

console.log(str1)
func1()
func2()

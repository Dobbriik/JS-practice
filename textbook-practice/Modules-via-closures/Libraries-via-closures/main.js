//Библиотеки через замыкания

//Часто в JavaScript создаются библиотеки, представляющие собой наборы функций для пользования другими программистами.

//Такие библиотеки обычно оборачиваются в модули через замыкания. Это делается для того, чтобы при подключении библиотеки во внешнем мире появлялось как можно меньше функций.

//Как правило каждая библиотека старается создавать во внешнем мире только одну переменную - объект с функциями библиотеки. При этом внутри в коде библиотеки часть функций являются основными, а часть - вспомогательными. Очевидно, что во внешний мир мы хотим экспортировать только нужные функции, не захламляя экпортируемый объект вспомогательными функциями.

;(function () {
	function square(num) {
		return num ** 2
	}
	function cube(num) {
		return num ** 3
	}
	function avg(arr) {
		return sum(arr) / arr.length
	}
	function digitsSum(num) {
		return sum(String(num).split(''))
	}

	// вспомогательная функция
	function sum(arr) {
		let res = 0

		for (let elem of arr) {
			res += +elem
		}

		return res
	}

	window.maths = { square, cube, avg, digitsSum }
})()

console.log(maths.avg([1, 2, 3]) + maths.square(2))

//Оформите этот код в виде модуля. Эспортируйте наружу все функции, кроме вспомогательной.
;(function () {
	function avg1(arr) {
		return sum(arr, 1) / arr.length
	}

	function avg2(arr) {
		return sum(arr, 2) / arr.length
	}

	function avg3(arr) {
		return sum(arr, 3) / arr.length
	}

	// вспомогательная функция
	function sum(arr, pow) {
		let res = 0

		for (let elem of arr) {
			res += elem ** pow
		}

		return res
	}
	window.avgNew = { avg1, avg2, avg3 }
})()

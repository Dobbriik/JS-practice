//Пусть мы хотим сделать так, чтобы второй вывод в консоль выполнился после того, как выполнится асинхронная операция внутри функции. Одним из подходов, используемых для этого, является использование коллбэка: обернем ожидающий код в анонимную функцию и передадим параметром в функцию make:

function make(callback) {
	setTimeout(function () {
		console.log('1')
		callback()
	}, 1000)
}

// make(function () {
// 	console.log('2')
// 	console.log('3')
// })

function getSumArr(callback) {
	setTimeout(function () {
		const Arr = [1, 2, 3, 4]
		console.log(callback(Arr))
	}, 2000)
}

getSumArr(arr => arr.reduce((acc, elem) => acc + elem, 0))

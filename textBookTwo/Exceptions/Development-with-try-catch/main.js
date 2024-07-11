//После изучения конструкции try-catch стиль написания вами кода должен изменится. Теперь вы должны все места, в которых может возникнуть исключительная ситуация, оборачивать в try, а в блоке catch прописывать реакцию на это исключение.

//Что не так с этим кодом? Исправьте недостатки этого кода.

try {
	let str = 'некая строка'
	localStorage.setItem('key', str)
	// alert('успешно сохранено!')
} catch (error) {
	alert('ошибка!')
}

let json = '[1,2,3,4,5]'
try {
	let arr = JSON.parse(json)
	let sum = 0
	for (let elem of arr) {
		sum += +elem
	}
	console.log(sum)
} catch (error) {
	console.log('error')
}

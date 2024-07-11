//Для перехвата исключений используется конструкция try-catch. Она имеет следующий синтаксис:

try {
	// код
} catch (error) {
	// обработка ошибки
}

try {
	let data = JSON.parse('{1,2,3,4,5}')
} catch (error) {
	// alert('невозможно выполнить операцию разбора JSON')
}

//Оберните этот код в конструкцию try-catch. В блоке catch выведите сообщение о переполнении хранилища. Проверьте работу вашего кода для строки размером менее 5 мб и для строки большего размера.

let str = 'некая строка'
for (let i = 0; i < 6 * 10 ** 6; i++) {
	str += '+'
}
try {
	localStorage.setItem('key', str)
} catch (error) {
	console.log('строка больше 5мб')
}

//Дан JSON, внутри которого хранится массив. Если этот JSON корректный, то выведите элементы массива в виде списка ul. Если же JSON не корректный, выведите на экран сообщение о том, что на странице случилась ошибка.
let list = [1, 2, 3, 4]
let jsList = JSON.stringify(list)

try {
	const ul = document.createElement('ul')
	for (const iterator of JSON.parse(list)) {
		const li = document.createElement('li')
		li.textContent = iterator
		ul.appendChild(li)
	}
	document.body.appendChild(ul)
} catch (error) {
	console.log('ошибка списка')
}

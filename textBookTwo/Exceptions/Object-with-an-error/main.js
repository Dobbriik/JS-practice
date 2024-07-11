//Если возникает исключительная ситуация, то в первый параметр блока catch попадет объект со случившейся ошибкой. Свойство name этого объекта содержит имя ошибки (фактически ее тип), а свойство message - текст этой ошибки:

try {
} catch (error) {
	console.log(error.name) // имя ошибки
	console.log(error.message) // текст ошибки
}

//Специально создайте исключительную ситуацию, связанную с попыткой разбора некорректного JSON. Выведите в консоль имя и текст этой ошибки.

try {
	JSON.parse('[asdas]')
} catch (error) {
	console.log(error.name) // имя ошибки
	console.log(error.message) // текст ошибки
}

//Специально создайте исключительную ситуацию, связанную с переполнением локального хранилища. Выведите в консоль имя и текст этой ошибки.

try {
	let str = 'Valid'
	for (let i = 0; i < 6 * 10 ** 6; i++) {
		str += 'Valid'
	}
	localStorage.setItem('val', str)
} catch (error) {
	console.log(error.name) // имя ошибки
	console.log(error.message) // текст ошибки
}

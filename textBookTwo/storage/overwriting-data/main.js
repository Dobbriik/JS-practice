localStorage.setItem('key', '1')
let value1 = localStorage.getItem('key')

console.log(value1) // выведет '1'

localStorage.setItem('key', '2')
let value2 = localStorage.getItem('key')

console.log(value2) // выведет '2'

//Пользователь заходит на сайт, затем обновляет страницу, затем еще раз обновляет и так далее. Сделайте счетчик обновления страницы. Каждый раз при обновлении выводите значение счетчика на экран.
const localCount = localStorage.getItem('count')

if (!localCount) {
	localStorage.setItem('count', 1)
} else {
	let count = localStorage.getItem('count')
	document.body.textContent = count++
	localStorage.setItem('count', count++)
}

// localStorage.clear()

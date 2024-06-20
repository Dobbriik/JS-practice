//Метод setItem предназначен для сохранения данных. Первым параметром он принимает ключ, а вторым - значение. Метод getItem предназначен для получения данных. Он принимает один параметр - ключ, под которым эти данные были сохранены.

// localStorage.setItem('key', 'text')

// let str = localStorage.getItem('key')
// console.log(str) // выведет 'text'

//Напишите скрипт, который сохранит в локальном хранилище три числа под тремя разными ключами. Запустите этот скрипт, чтобы данные сохранились. Затем напишите скрипт, который получит ваши три числа из локального хранилища и найдет их сумму. Запустите второй скрипт и убедитесь в его работоспособности.

function addStorage(key, val) {
	localStorage.setItem(key, val)
}

addStorage('one', 1)
addStorage('two', 2)
addStorage('three', 5)

function getValue(key) {
	return localStorage.getItem(key)
}
function getSumValue(...key) {
	let sum = 0
	for (const iterator of key) {
		sum += Number(getValue(iterator))
	}
	return sum
}

console.log(getSumValue('one', 'two', 'three'))

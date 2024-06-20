//Если попытаться прочитать ключ, для которого не были записаны данные, то результатом будет null. Это можно использовать для того, чтобы выполнить однократное сохранение данных.

//К примеру, давайте запишем в локальное хранилище момент первого захода пользователя на сайт. А если пользователь зайдет не первый раз, то ничего делать не будем:

let time = localStorage.getItem('time')

if (!time) {
	let now = Date.now()
	localStorage.setItem('time', now)
}

//По заходу пользователя на сайт запишите в локальное хранилище текущий момент времени. Затем по повторному заходу выведите, сколько прошло времени с предыдущего захода пользователя на сайт.

if (time) {
	let now = Date.now()
	let first = localStorage.getItem('time')
	console.log((now - first) / 1000)
}

//По заходу пользователя на сайт спросите у него дату рождения. При следующем заходе пользователя на сайт, если у него в этот день будет День Рождения - поздравьте его с этим праздником.

function isValidDate(dateString) {
	// Проверяем, что строка соответствует формату YYYY-MM-DD
	const regex = /^\d{4}-\d{2}-\d{2}$/
	if (!regex.test(dateString)) return false

	// Проверяем, что дата существует
	const date = new Date(dateString)
	if (isNaN(date.getTime())) return false

	// Проверяем, что введенная дата не в будущем
	const now = new Date()
	if (date > now) return false

	return true
}

function getBirthDate() {
	let birthDate
	do {
		birthDate = prompt('Введите дату рождения в формате YYYY-MM-DD:')
		if (birthDate === null) {
			// Пользователь нажал "Отмена"
			return null
		}
	} while (!isValidDate(birthDate))

	return birthDate
}

let birthday = localStorage.getItem('birthday')

if (!birthday) {
	const birthDate = getBirthDate()
	if (birthDate !== null) {
		alert('Вы ввели дату рождения: ' + birthDate)
		localStorage.setItem('birthday', birthDate)
	} else {
		alert('Вы отменили ввод даты рождения.')
	}
} else {
	let date = getDays(localStorage.getItem('birthday'))
	console.log(`Дней до дня рождения ${date}`)
}

function getDays(date) {
	let birthDay = new Date(date)
	let now = new Date()

	// Устанавливаем текущий год для дня рождения
	let nextBirthDay = new Date(
		now.getFullYear(),
		birthDay.getMonth(),
		birthDay.getDate()
	)

	// Если день рождения уже прошёл в этом году, устанавливаем следующий год
	if (nextBirthDay < now) {
		nextBirthDay.setFullYear(nextBirthDay.getFullYear() + 1)
	}

	// Вычисляем разницу в миллисекундах
	let diffInMs = nextBirthDay - now

	// Переводим миллисекунды в дни
	let diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24))

	return diffInDays
}

//Дан инпут. По потери фокуса в этом инпуте сохраните его значение в локальное хранилище. При следующем заходе пользователя на страницу установите в инпуте сохраненный ранее текст.

let input = document.querySelector('input')
console.log(input)
let values = localStorage.getItem('test2')
console.log(values)

input.addEventListener('blur', function () {
	if (this.value) {
		if (!values) {
			localStorage.setItem('test2', input.value)
		}
	}
})

if (values) {
	input.value = localStorage.getItem('test2')
}

//Существуют разные способы сделать это. Самый простой - в throw передать объект с ключами name и message:

try {
	throw { name: 'MyError', message: 'текст исключения' }
} catch (error) {
	console.log(error.name) // 'MyError'
	console.log(error.message) // 'текст исключения'
}

//Переделайте эту функцию так, чтобы она выбрасывала исключение с каким-нибудь придуманными нами типом, например, DivisionByZeroError.

function div(a, b) {
	if (b !== 0) {
		return a / b
	} else {
		throw { name: DivisionByZeroError, message: 'пиздос' }
	}
}

//Ранее вы делали функцию, выбрасывающую исключение при попытке извлечь корень из отрицательного числа. Переделайте вашу функцию так, чтобы она выбрасывала исключение с придуманным вами типом. Хорошо подумайте над названием исключения, чтобы это название было удачным.

function sqrtCalc(num) {
	if (num < 0) {
		throw { name: NegativeNumber, message: 'число отрицательное' }
	}
	return Math.sqrt(num)
}

try {
	sqrtCalc(-1)
} catch (error) {
	console.log(error.name)
}

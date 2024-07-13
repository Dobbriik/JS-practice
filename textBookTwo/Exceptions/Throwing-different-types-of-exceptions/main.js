//В JavaScript предусмотрено решение этой проблемы: можно выбрасывать исключения не только типа Error, но и любого встроенного в JavaScript типа ошибки, например, TypeError, SyntaxError, RangeError.

//Давайте для примера выбросим исключение типа SyntaxError:

try {
	// throw new SyntaxError('текст исключения')
} catch (error) {
	console.log(error.name) // 'SyntaxError'
	console.log(error.message) // 'текст исключения'
}

//Выбросите исключение с типом TypeError.

try {
	// throw new TypeError('ошибка типа')
} catch (error) {
	console.log(error.name)
	console.log(error.message)
}

//Выбросите исключение с типом SyntaxError и RangeError. Поймайте эти исключения с помощью одного блока try. В блоке catch выведите разные сообщения об ошибке для исключений разных типов.

function dblError() {
	throw (new SyntaxError('message1'), new RangeError('message2'))
}

function test1(str) {
	try {
		const json = JSON.parse(str)
	} catch (error) {
		console.log(error.name)
	}
	return str
}

function test2(str) {
	return JSON.parsse(str)
}

try {
	test2(test1('[1,2,3]s'))
} catch (error) {
	if (error.name == 'SyntaxError') {
		console.log('ошибка json')
	} else if (error.name == 'TypeError') {
		console.log('ошибка типа')
	} else {
		console.log(error.name)
	}
}

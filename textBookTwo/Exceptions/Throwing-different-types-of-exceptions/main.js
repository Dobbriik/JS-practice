//В JavaScript предусмотрено решение этой проблемы: можно выбрасывать исключения не только типа Error, но и любого встроенного в JavaScript типа ошибки, например, TypeError, SyntaxError, RangeError.

//Давайте для примера выбросим исключение типа SyntaxError:

try {
	throw new SyntaxError('текст исключения')
} catch (error) {
	console.log(error.name) // 'SyntaxError'
	console.log(error.message) // 'текст исключения'
}

//Выбросите исключение с типом TypeError.

try {
	throw new TypeError('ошибка типа')
} catch (error) {
	console.log(error.name)
	console.log(error.message)
}

//Выбросите исключение с типом SyntaxError и RangeError. Поймайте эти исключения с помощью одного блока try. В блоке catch выведите разные сообщения об ошибке для исключений разных типов.
function doErrorSyntax() {
	throw new SyntaxError('ошибка синтаксиса')
}
function doErrorRange() {
	throw new RangeError('ошибка синтаксиса')
}

try {
	throw new RangeError('This is a RangeError')
	throw new SyntaxError('This is a SyntaxError')
} catch (error) {
	console.log(error)
}

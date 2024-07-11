let json = `
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
`

//Проверьте этот JSON на общую корректность при разборе, а после разбора проверьте, что в результате получается массив, а не что-то другое. Если в результате получается не массив - выбросите исключение.
function parseJson(json) {
	let resJson = JSON.parse(json)
	if (Array.isArray(resJson)) {
		return resJson
	} else {
		throw { name: ErrorArray, message: 'не является массивом' }
	}
}

try {
	let employees = parseJson(json)
	console.log(employees)
} catch (error) {
	if (error.name == 'SyntaxError') {
		console.log('не корректный формат json')
	} else if (error.name == 'ErrorArray') {
		console.log(error.message)
	} else {
		throw { name: error.name, message: error.message }
	}
}

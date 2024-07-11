function saveData(json) {
	let arr = JSON.parse(json)

	for (let i = 0; i < arr.length; i++) {
		localStorage.setItem(i, arr[i])
	}
}

let json = '[1,2,3,4]'

try {
	saveData(json)
} catch (error) {
	if (error.name == 'SyntaxError') {
		console.log('error json формата')
	} else if (error.name == 'QuotaExceededError') {
		console.log('переполнение памяти localeStorage')
	}
}

try {
	let arr = JSON.parse(json)

	for (let i = 0; i < arr.length; i++) {
		localStorage.setItem(i, arr[i])
	}
} catch (error) {
	if (error.name == 'QuotaExceededError') {
		alert('закончилось место в хранилище')
	} else if (error.name == 'SyntaxError') {
		alert('некорректный JSON')
	} else {
		try {
			throw error
		} catch (error) {
			console.log(error.name)
			console.log(error.message)
		}
	}
}

function make(num, callback) {
	setTimeout(function () {
		let arr = [1, 2, 3, 4, 5]

		let err
		if (arr[num] === undefined) {
			err = 'elem not exists' // текст ошибки
		} else {
			err = null // ошибки нет
		}

		callback(arr[num], err)
	}, 3000)
}

make(10, function (res, err) {
	if (!err) {
		console.log(res) // ошибки не возникло, выведем результат
	} else {
		console.log(err) // ошибка возникла, выведем ее текст
	}
})

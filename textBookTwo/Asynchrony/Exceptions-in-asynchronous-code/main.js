//Исключение, возникшее внутри асинхронного кода, не может быть поймано через try-catch:
try {
	setTimeout(function () {
		throw new Error() // исключение не будет поймано
	}, 3000)
} catch (error) {
	console.log(error)
}

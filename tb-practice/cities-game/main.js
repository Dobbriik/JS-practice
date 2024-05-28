//Игра в города

let field = document.querySelector('#field')
let btn = document.querySelector('#btn')
let message = document.querySelector('#message')

let messagase = 'asda'

console.log(messagase.toUpperCase(-1))

let saveSites = []
console.log(saveSites.length)

function checkArr(arr, elem) {
	return arr.includes(elem)
}
function checkLastSymbol(arr, elem) {
	let lastElem = arr[length - 1].toLowerCase()
	let guess = elem.toLowerCase()
	return lastElem.slice(-1) === guess.slice(0, 1)
}

btn.addEventListener('click', function () {
	let guessSite = field.value

	if (saveSites.length === 0) {
		saveSites.push(guessSite)
		let symbol = guessSite.slice(-1).toUpperCase()
		field.setAttribute('placeholder', `Город на ${symbol}`)
	} else if (!checkArr(saveSites, guessSite)) {
		if (checkLastSymbol(saveSites, guessSite)) {
			saveSites.push(guessSite)
			let symbol = guessSite.slice(-1).toUpperCase()
			field.setAttribute('placeholder', `Город на ${symbol}`)
		} else {
			message.textContent = `Город не на ту букву`
		}
	} else {
		message.textContent = 'Такой город уже был'
	}
	field.value = ''
})

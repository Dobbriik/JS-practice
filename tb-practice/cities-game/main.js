//Игра в города

let field = document.querySelector('#field')
let message = document.querySelector('#message')
let count = document.querySelector('#count')
let countFlag = false

let rules = document.querySelector('#rules')
let game = document.querySelector('#game')

let btn = document.querySelector('#btn')
let friend = document.querySelector('#friend')
let bot = document.querySelector('#bot')

let saveSites = []

function getCorrectSites(sites) {
	let cleanCity = sites
	if (cleanCity.includes(' ')) {
		cleanCity = cleanCity.split(' ').join('')
		return cleanCity
	} else {
		return cleanCity
	}
}

function checkArr(arr, elem) {
	return arr.includes(elem)
}
function checkLastSymbol(arr, elem) {
	let lastElem = arr[arr.length - 1].toLowerCase()
	console.log(lastElem)
	let guess = elem.toLowerCase()
	return lastElem.slice(-1) === guess.slice(0, 1)
}

function addEventCities() {
	let num = 2
	if (countFlag) {
		num = 1
	}
	count.textContent = `Ход ${num}-го игрока`
	message.textContent = ''
	let guessSite = getCorrectSites(field.value)

	if (saveSites.length === 0) {
		saveSites.push(guessSite)
		let symbol = guessSite.slice(-1).toUpperCase()
		field.setAttribute('placeholder', `Город на ${symbol}`)
		if (countFlag) {
			countFlag = false
		} else {
			countFlag = true
		}
	} else if (!checkArr(saveSites, guessSite)) {
		if (checkLastSymbol(saveSites, guessSite)) {
			saveSites.push(guessSite)
			let symbol = guessSite.slice(-1).toUpperCase()
			field.setAttribute('placeholder', `Город на ${symbol}`)
			if (countFlag) {
				countFlag = false
			} else {
				countFlag = true
			}
		} else {
			message.textContent = `Город не на ту букву`
		}
	} else {
		message.textContent = 'Такой город уже был'
	}
	field.value = ''
}

friend.addEventListener('click', function () {
	rules.classList.toggle('active')
	game.classList.toggle('active')

	btn.addEventListener('click', function () {
		addEventCities()
	})

	field.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			addEventCities()
		}
	})
})

bot.addEventListener('click', function () {
	rules.classList.toggle('active')
	game.classList.toggle('active')
})

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

let saveCity = []

function getCorrectCity(city) {
	let cleanCity = city
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
	let lastElem = getLastSymbol(arr[arr.length - 1])

	let guess = elem.toLowerCase()
	return lastElem.toLowerCase() === guess.slice(0, 1)
}

function getLastSymbol(city) {
	let test = city.slice(-1).toUpperCase()
	if (test == 'Ь') {
		test = city.slice(-2, -1).toUpperCase()
	}
	if (test == 'Ы') {
		test = city.slice(-2, -1).toUpperCase()
	}
	return test
}

function addCity() {
	let guessSite = getCorrectCity(field.value)
	saveCity.push(guessSite)
	let symbol = guessSite.slice(-1).toUpperCase()
	field.setAttribute('placeholder', `Город на ${symbol}`)
	if (countFlag) {
		countFlag = false
		count.textContent = 'Ваш ход.'
	} else {
		countFlag = true
		count.textContent = 'Ход бота.'
	}
	field.value = ''
}

function findCities(symbol, cities) {
	return cities.filter(city => city.charAt(0) === symbol)
}

function addTextAnimation(city, form, lastSymbol) {
	let index = 0
	let id = setInterval(function () {
		if (index <= city.length) {
			field.value = city.slice(0, index)
			index++
		} else {
			clearInterval(id)
			setTimeout(() => {
				field.value = ''
				field.setAttribute('placeholder', `Город на ${lastSymbol}`)
				count.textContent = 'Ваш ход.'
				btn.value = 'Ввести'
			}, 1000)
		}
	}, 200)
}

function checkValidCity(city) {
	if (/\d/.test(city)) {
		return false
	} else if (city.match(/[a-zA-Z]/)) {
		return false
	} else if (city.length < 2) {
		return false
	}
	return true
}

function addBotCity(humanCity) {
	let validBotCity = findCities(getLastSymbol(humanCity), citiesBot)

	let afterCheck = []
	if (validBotCity.length > 0) {
		for (const elem of validBotCity) {
			if (!checkArr(saveCity, elem)) {
				afterCheck.push(elem)
			}
		}
		if (afterCheck.length > 0) {
			let trueCity = afterCheck[0]

			saveCity.push(trueCity)
			addTextAnimation(trueCity, field.value, getLastSymbol(trueCity))
		} else {
			message.textContent =
				'Вы победили! Бот больше не знает города на эту букву или кому-то было лень ему рассказать'
		}
	} else {
		message.textContent =
			'Вы победили! Бот больше не знает города на эту букву или кому-то было лень ему рассказать'
	}
	countFlag = changeFlag(countFlag)
	field.value = ''
}

function changeFlag(flag) {
	if (flag) {
		return false
	} else {
		return true
	}
}

function addEventCities(bot) {
	if (!checkValidCity(field.value)) {
		message.textContent = 'Введите корректный город.'
		field.value = ''
		return
	}

	let num = 2
	if (countFlag) {
		num = 1
	}

	message.textContent = ''
	let guessSite = getCorrectCity(field.value)

	if (saveCity.length === 0) {
		saveCity.push(guessSite)
		let symbol = getLastSymbol(guessSite)
		field.setAttribute('placeholder', `Город на ${symbol}`)
		count.textContent = `Ход ${num}-го игрока`
		countFlag = changeFlag(countFlag)
	} else if (!checkArr(saveCity, guessSite)) {
		if (checkLastSymbol(saveCity, guessSite)) {
			saveCity.push(guessSite)
			let symbol = getLastSymbol(guessSite)
			field.setAttribute('placeholder', `Город на ${symbol}`)
			count.textContent = `Ход ${num}-го игрока`
			countFlag = changeFlag(countFlag)
		} else {
			message.textContent = `Город не на ту букву.`
		}
	} else {
		message.textContent = 'Такой город уже был.'
	}
	if (bot === 'bot') {
		count.textContent = `Ваш ход.`
	}
	field.value = ''
}

friend.addEventListener('click', function () {
	rules.classList.toggle('active')
	count.textContent = 'Ход 1-го игрока.'
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

function addEventBotGame() {
	count.textContent = 'Ваш ход.'
	if (countFlag) {
		count.textContent = 'Ход бота.'
	}
	if (countFlag) {
		addBotCity(saveCity[saveCity.length - 1])
	} else {
		addEventCities('bot')
		if (countFlag) {
			count.textContent = 'Запустите бота.'
			btn.value = 'Запустить бота'
		}
	}
}

bot.addEventListener('click', function () {
	count.textContent = 'Ваш ход.'
	rules.classList.toggle('active')
	game.classList.toggle('active')

	btn.addEventListener('click', function () {
		addEventBotGame()
	})

	field.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			addEventBotGame()
		}
	})
})

let citiesBot = [
	'Абакан',
	'Азов',
	'Александров',
	'Балаково',
	'Балахна',
	'Балашиха',
	'Великие Луки',
	'Великий Новгород',
	'Владивосток',
	'Горно-Алтайск',
	'Грозный',
	'Губкин',
	'Дзержинск',
	'Дмитров',
	'Дубна',
	'Ейск',
	'Екатеринбург',
	'Елабуга',
	'Железногорск',
	'Железногорск',
	'Жуковский',
	'Зеленогорск',
	'Златоуст',
	'Змеиногорск',
	'Иваново',
	'Ижевск',
	'Иркутск',
	'Йошкар-Ола',
	'Казань',
	'Калининград',
	'Калуга',
	'Каменск-Уральский',
	'Каменск-Шахтинский',
	'Канск',
	'Каспийск',
	'Кемерово',
	'Кинешма',
	'Киров',
	'Кирово-Чепецк',
	'Киселевск',
	'Кисловодск',
	'Клин',
	'Клинцы',
	'Ковров',
	'Когалым',
	'Коломна',
	'Комсомольск-на-Амуре',
	'Копейск',
	'Королев',
	'Кострома',
	'Котлас',
	'Красногорск',
	'Краснодар',
	'Краснокаменск',
	'Краснокамск',
	'Краснотурьинск',
	'Красноярск',
	'Кропоткин',
	'Крымск',
	'Кстово',
	'Кузнецк',
	'Кумертау',
	'Кунгур',
	'Курган',
	'Курск',
	'Кызыл',
	'Лабинск',
	'Лениногорск',
	'Ленинск-Кузнецкий',
	'Лесосибирск',
	'Липецк',
	'Лиски',
	'Лобня',
	'Лысьва',
	'Лыткарино',
	'Люберцы',
	'Магадан',
	'Магнитогорск',
	'Майкоп',
	'Махачкала',
	'Междуреченск',
	'Мелеуз',
	'Миасс',
	'Минеральные Воды',
	'Минусинск',
	'Михайловск',
	'Мичуринск',
	'Москва',
	'Мурманск',
	'Муром',
	'Мытищи',
	'Набережные Челны',
	'Назарово',
	'Назрань',
	'Нальчик',
	'Наро-Фоминск',
	'Находка',
	'Невинномысск',
	'Нерюнгри',
	'Нефтекамск',
	'Нефтеюганск',
	'Нижневартовск',
	'Нижнекамск',
	'Нижний Новгород',
	'Нижний Тагил',
	'Новоалтайск',
	'Новокузнецк',
	'Новокуйбышевск',
	'Новомосковск',
	'Новороссийск',
	'Новосибирск',
	'Новотроицк',
	'Новоуральск',
	'Новочебоксарск',
	'Новочеркасск',
	'Новошахтинск',
	'Новый Уренгой',
	'Ногинск',
	'Норильск',
	'Ноябрьск',
	'Обнинск',
	'Одинцово',
	'Озерск',
	'Октябрьский',
	'Омск',
	'Орел',
	'Оренбург',
	'Орехово-Зуево',
	'Орск',
	'Павлово',
	'Павловск',
	'Пенза',
	'Первоуральск',
	'Пермь',
	'Петрозаводск',
	'Петропавловск-Камчатский',
	'Подольск',
	'Полевской',
	'Прокопьевск',
	'Прохладный',
	'Псков',
	'Пушкино',
	'Пятигорск',
	'Раменское',
	'Ревда',
	'Реутов',
	'Ржев',
	'Рославль',
	'Россошь',
	'Ростов-на-Дону',
	'Рубцовск',
	'Рыбинск',
	'Рязань',
	'Салават',
	'Сальск',
	'Самара',
	'Санкт-Петербург',
	'Саранск',
	'Сарапул',
	'Саратов',
	'Саров',
	'Сатка',
	'Саяногорск',
	'Свободный',
	'Севастополь',
	'Северодвинск',
	'Северск',
	'Сергиев Посад',
	'Серов',
	'Серпухов',
	'Сибай',
	'Симферополь',
	'Славянск-на-Кубани',
	'Смоленск',
	'Соликамск',
	'Солнечногорск',
	'Сочи',
	'Ставрополь',
	'Старый Оскол',
	'Стерлитамак',
	'Ступино',
	'Сургут',
	'Сызрань',
	'Таганрог',
	'Тамбов',
	'Тверь',
	'Тимашевск',
	'Тихвин',
	'Тихорецк',
	'Тобольск',
	'Тольятти',
	'Томск',
	'Троицк',
	'Туапсе',
	'Тула',
	'Тюмень',
	'Узловая',
	'Улан-Удэ',
	'Ульяновск',
	'Урус-Мартан',
	'Усолье-Сибирское',
	'Уссурийск',
	'Усть-Илимск',
	'Уфа',
	'Ухта',
	'Феодосия',
	'Фрязино',
	'Хабаровск',
	'Хадыженск',
	'Ханты-Мансийск',
	'Харабали',
	'Хасавюрт',
	'Химки',
	'Чайковский',
	'Чебоксары',
	'Челябинск',
	'Черемхово',
	'Череповец',
	'Черкесск',
	'Черногорск',
	'Чехов',
	'Чистополь',
	'Чита',
	'Шадринск',
	'Шали',
	'Шахты',
	'Шуя',
	'Щекино',
	'Щелково',
	'Электросталь',
	'Элиста',
	'Энгельс',
	'Южно-Сахалинск',
	'Юрга',
	'Якутск',
	'Ялта',
	'Ярославль',
]

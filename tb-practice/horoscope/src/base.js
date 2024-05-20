function getAllDayCurrentYear() {
	let nowDate = new Date()
	let currentYear = nowDate.getFullYear()
	let howYear = new Date(currentYear, 2, 0)
	if (howYear.getDate() === 29) {
		return 366
	} else {
		return 365
	}
}
let nowDate = new Date()
let currentYear = nowDate.getFullYear()

let dateArr = []

for (let i = 0; i <= getAllDayCurrentYear(); i++) {
	dateArr.push(i)
}
dateArr[0] = currentYear

let zodiacSigns = [
	'Козерог',
	'Водолей',
	'Рыбы',
	'Овен',
	'Телец',
	'Близнецы',
	'Рак',
	'Лев',
	'Дева',
	'Весы',
	'Скорпион',
	'Стрелец',
]

let zod = {
	Козерог: 0,
	Водолей: 1,
	Рыбы: 2,
	Овен: 3,
	Телец: 4,
	Близнецы: 5,
	Рак: 6,
	Лев: 7,
	Дева: 8,
	Весы: 9,
	Скорпион: 10,
	Стрелец: 11,
}

let zodArr = [
	{ Козерог: '23.12-20.01' },
	{ Водолей: '21.01—19.02' },
	{ Рыбы: '20.02-20.03' },
	{ Овен: '21.03-20.04' },
	{ Телец: '21.04-21.05' },
	{ Близнецы: '22.05-21.06' },
	{ Рак: '22.06-22.07' },
	{ Лев: '23.07-21.08' },
	{ Дева: '22.08-23.09' },
	{ Весы: '24.09-23.10' },
	{ Скорпион: '24.10-23.11' },
	{ Стрелец: '24.11-22.12' },
]

const asdasdasd = [
	'Сегодня столкнется с возможностями для развития своих организационных навыков и достижения успеха в своей карьере и личной жизни.',
	'Сегодня столкнется с возможностями для развития своих интеллектуальных способностей и достижения успеха в своих личных и профессиональных целях.',
	'Сегодня столкнется с возможностями для развития своих творческих способностей и достижения успеха в своей работе и личной жизни.',
	'Сегодня столкнется с новыми вызовами, но его решительность и энергия помогут ему преодолеть любые препятствия.',
	'Сегодня столкнется с финансовыми возможностями, которые помогут ему укрепить свое экономическое положение и достичь стабильности.',
	'Сегодня столкнутся с новыми знакомствами и возможностями для развития своих коммуникативных навыков, что принесет им успех в карьере и личной жизни.',
	'Сегодня столкнется с возможностями для роста и развития в личных отношениях, что поможет ему укрепить свои связи с близкими.',
	'Сегодня столкнется с возможностями для проявления лидерских качеств и достижения успеха в своей карьере, что принесет ему признание и уважение.',
	'Сегодня столкнется с возможностями для развития своих творческих способностей и достижения успеха в своей работе, что принесет ей удовлетворение и признание.',
	'Сегодня столкнутся с возможностями для развития своих дипломатических навыков и достижения успеха в своих личных и профессиональных отношениях.',
	'Сегодня столкнется с возможностями для развития своих интуитивных способностей и достижения успеха в своих личных и профессиональных целях.',
	'Сегодня столкнется с возможностями для развития своих навыков коммуникации и достижения успеха в своих личных и профессиональных отношениях.',
]

const todayZodiacPredictions = [
	'Сегодня  следует быть осторожным, так как он может столкнуться с неожиданным вызовом - потерей телефона или ключей, но это только укрепит его характер.',
	'столкнется с неожиданным финансовым вызовом - найдет на улице купюру, но окажется, что это фальшивка, что заставит его еще раз проверить свою интуицию.',
	'столкнется с неожиданным знакомством - может встретить своего двойника, но только с другим стилем одежды, что заставит его задуматься о своем имидже.',
	'столкнется с неожиданными отношениями - может получить сообщение от старого друга, но окажется, что это спам, что заставит его еще раз проверить свой список контактов.',
	'столкнется с неожиданными возможностями - может получить предложение о работе, но окажется, что это розыгрыш, что заставит его еще раз проверить свою репутацию.',
	'столкнется с неожиданными творческими способностями - может придумать новый способ организации рабочего стола, но окажется, что ничего не изменилось, что заставит его еще раз проверить свою оригинальность.',
	'столкнется с неожиданными потребностями в дипломатических навыках - поможет решить спор между друзьями, но окажется, что они просто притворялись.',
	'столкнется с неожиданными интуитивными способностями - может угадать, что будет завтра на обед, но окажется, что меню меняют ежедневно, что заставит его еще раз проверить свою интуицию.',
	'столкнется с неожиданными навыками коммуникации - может найти общий язык с собакой соседа, но окажется, что она просто хочет лакомства, что заставит его еще раз проверить свои навыки общения.',
	'столкнется с неожиданными организационными навыками - может создать новую систему управления временем, но окажется, что это уже использовалось, что заставит его еще раз проверить свою оригинальность.',
	'столкнется с неожиданными интеллектуальными способностями - может решить кроссворд за рекордное время, но окажется, что это был детский вариант, что заставит его еще раз проверить свои знания.',
	'Сегодня столкнется с солнечным днем, который внезапно сменится грозой, что заставит вас еще раз проверить свою интуицию и быть готовым к изменениям погоды, словно погода решила поиграть с вами в прятки!',
]

// const funnyWeatherZodiacPredictions = [
// 	'Сегодня знак зодиака столкнется с неожиданными погодными условиями - может начаться дождь, когда вы ожидаете солнца, но это только укрепит вашу способность приспосабливаться к изменениям, как будто погода решила проверить вашу выдержку!',
// 	'Возможны изменения погоды - внезапное похолодание или усиление ветра, что заставит вас еще раз оценить свою готовность к различным погодным условиям и принять соответствующие меры, словно погода решила устроить вам сюрприз-тест на прочность!',
// 	'Сегодня знак зодиака столкнется с солнечным днем, который внезапно сменится грозой, что заставит вас еще раз проверить свою интуицию и быть готовым к изменениям погоды, словно погода решила поиграть с вами в прятки!',
// ]

export { dateArr, todayZodiacPredictions, zod, zodArr }

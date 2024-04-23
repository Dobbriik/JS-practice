//Кроме всплытия событий есть еще и погружение. На самом деле событие сначала идет сверху вниз (стадия перехвата), доходит до нашего элемента (стадия цели) и только потом начинает всплывать (стадия всплытия).

//Для того, чтобы повесить обработчик события с учетом стадии перехвата в addEventListener есть третий необязательный параметр. Если он равен true - событие сработает на стадии перехвата, а если false - на стадии всплытия (это по умолчанию). Давайте посмотрим на примере:

elem1.addEventListener(
	'click',
	function () {
		console.log('зеленый - погружение')
	},
	true
)
elem1.addEventListener(
	'click',
	function () {
		console.log('зеленый - всплытие')
	},
	false
)

elem2.addEventListener(
	'click',
	function () {
		console.log('голубой - погружение')
	},
	true
)
elem2.addEventListener(
	'click',
	function () {
		console.log('голубой - всплытие')
	},
	false
)

elem3.addEventListener(
	'click',
	function () {
		console.log('красный - погружение')
	},
	true
)
elem3.addEventListener(
	'click',
	function () {
		console.log('красный- всплытие')
	},
	false
)

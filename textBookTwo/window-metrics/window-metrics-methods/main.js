//Следующие свойства содержат размеры окна браузера, не включающие в себя полосу прокрутки:
let w = document.documentElement.clientWidth // ширина
let h = document.documentElement.clientHeight // высота

console.log(w)
console.log(h)

//Следующие свойства включают в себя полосу прокрутки:

let wScr = window.innerWidth // ширина
let hScr = window.innerHeight // высота

console.log(wScr)
console.log(hScr)

//Разница между двумя типами свойств дает размер полосы прокрутки:

//Проверка на вертикальную прокрутку
console.log(wScr - w)

//Проверка на горизонтальную прокрутку
console.log(hScr - h)

//Размеры окна с учетом прокрутки

let scrollHeight = Math.max(
	document.body.scrollHeight,
	document.documentElement.scrollHeight,
	document.body.offsetHeight,
	document.documentElement.offsetHeight,
	document.body.clientHeight,
	document.documentElement.clientHeight
)

let body = document.body
let doc = document.documentElement

console.log(doc.clientHeight + `doc.clientHeight`)
console.log(doc.offsetHeight + `doc.offsetHeight`)
console.log(doc.scrollHeight + `doc.scrollHeight`)

//Следующие свойства содержат то, на сколько прокручено окно (только для чтения):
let x = window.pageXOffset // слева
let y = window.pageYOffset // сверху

console.log(doc.scrollHeight - doc.clientHeight - y)

//Следующие свойства содержат то, на сколько прокручено окно:
let t = document.documentElement.scrollTop // сверху
let l = document.documentElement.scrollLeft // слева

console.log(t + ` scrollTop`)

let scrollS = document.querySelector('button')

scrollS.addEventListener('click', function () {
	let startPointScroll = 0
	let lastPointScroll = doc.scrollHeight - doc.clientHeight

	doc.scrollTop = lastPointScroll
})

//Метод для прокрутки окна в положение

function scrollWindow() {
	window.scrollTo(100, 200)
}

//Метод имеет альтернативный синтаксис, в котором параметром передается объект.

function scrollWindowBehavior() {
	doc.scrollTo({
		top: 100,
		left: 100,
		behavior: 'smooth',
	})
}
let downBtn = document.querySelector('#down')

downBtn.addEventListener('click', function () {
	document.documentElement.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})

//Метод для прокрутки окна на величину
//Метод scrollBy прокручивает окно на заданную величину от текущего положения. Первым параметром он принимает сдвиг по горизонтали, а вторым - по вертикали. Давайте прокрутим окно на заданные величины:

function winScrollBy() {
	window.scrollBy(0, 100)
	window.scrollBy(0, -100)
	window.scrollBy({
		top: 300,
		behavior: 'smooth',
	})
	window.scrollBy({
		top: -300,
		behavior: 'smooth',
	})
}

//Метод для прокрутки окна к элементу
//elem.scrollIntoView(true);

let testBtn = document.querySelector('#test')
let testElem = document.querySelector('#testElem')

testBtn.addEventListener('click', function () {
	testElem.scrollIntoView({
		behavior: 'smooth',
		block: 'center',
		inline: 'end',
	})
})

testElem.addEventListener('click', function () {
	testBtn.scrollIntoView(true)
})

//Событие прокрутки
window.addEventListener('scroll', function () {
	console.log(window.pageYOffset)
})

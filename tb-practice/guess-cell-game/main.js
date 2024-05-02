//Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10. Компьютер случайным образом запоминает 10 ячеек из этой таблицы. Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.

let table = document.querySelector('table')
let btnStart = document.createElement('button')
btnStart.textContent = 'Начать'
table.append(btnStart)

// let hoverAudio = document.querySelector('hover2')

// let missAudio = document.querySelector('#miss')
// let missAudio = new Audio('music/miss.mp3')

// let hitAudio = document.querySelector('#hit')
// let hitAudio = new Audio('music/hit.mp3')

// let lostAudio = document.querySelector('#lost')
let lostAudio = new Audio('music/lost.mp3')

// let winAudio = document.querySelector('#win')
let winAudio = new Audio('music/win.mp3')

let parinfo = document.querySelector('.info')
let par = document.querySelector('.par')

let spanTimer = document.querySelector('#timer')
let spanCount = document.querySelector('#count')

spanTimer.textContent = 35
spanCount.textContent = 10
//
var eventHandlers = []

function addEventHandler(element, eventType, handler) {
	element.addEventListener(eventType, handler)
	eventHandlers.push({
		element: element,
		eventType: eventType,
		handler: handler,
	})
}

function removeAllEventHandlers() {
	for (var i = 0; i < eventHandlers.length; i++) {
		var handler = eventHandlers[i]
		handler.element.removeEventListener(handler.eventType, handler.handler)
	}
	eventHandlers = [] // Очищаем массив после удаления обработчиков
}

// Добавляем обработчики событий
addEventHandler(spanTimer, 'click', function () {
	let input = document.createElement('input')
	input.classList.add('input')
	input.value = spanTimer.textContent
	input.addEventListener('blur', function blur() {
		spanTimer.textContent = input.value
		par.replaceChild(spanTimer, input)
	})
	par.replaceChild(input, spanTimer)
	input.focus()
	console.log(eventHandlers)
})

addEventHandler(spanCount, 'click', function () {
	let input = document.createElement('input')
	input.classList.add('input')
	input.value = event.target.textContent
	input.addEventListener('autofocus', function () {})
	input.addEventListener('blur', function blur() {
		spanCount.textContent = input.value
		par.replaceChild(spanCount, input)
	})
	par.replaceChild(input, spanCount)
	input.focus()
})

let btnRemove = document.createElement('button')
btnRemove.textContent = 'Заново'
btnRemove.addEventListener('click', function () {
	location.reload()
})

let objectTd = []

function addEventHandler2(element, eventType, handler, counter) {
	element.addEventListener(eventType, handler)
	objectTd.push({
		element: element,
		eventType: eventType,
		handler: handler,
		counter: counter,
	})
}

function removeAllEventHandlers2(contettt) {
	for (var i = 0; i < objectTd.length; i++) {
		let handler = objectTd[i]
		// console.log(handler)
		handler.element.removeEventListener(handler.eventType, handler.handler)
		// objectTd = [] // Очищаем массив после удаления обработчиков
	}
}

function hoverAudio() {
	let hoverAudio = new Audio('music/button.mp3')
	hoverAudio.play()
}
let count = 0
table.addEventListener('click', function timer() {
	btnStart.remove()
	removeAllEventHandlers()

	let randArr = []

	let findCounter = spanCount.textContent

	for (let i = 0; i < findCounter; i++) {
		let randNum = Math.floor(Math.random() * 100 + 1)
		function forFind(elem) {
			return elem === randNum
		}
		if (randArr.find(forFind)) {
			findCounter++
		} else {
			randArr.push(randNum)
		}
	}

	console.log(randArr)

	let key = 0
	for (let i = 0; i < 10; i++) {
		let tr = document.createElement('tr')
		for (let j = 0; j < 10; j++) {
			let td = document.createElement('td')
			td.setAttribute('id', count)
			console.log(count)
			td.addEventListener('mouseover', hoverAudio)

			if (
				randArr.find(function (elem) {
					return elem === count
				})
			) {
				td.addEventListener('click', function hit(event) {
					event.target.removeEventListener('mouseover', hoverAudio)
					let con = count
					removeAllEventHandlers2(con)

					let hitAudio = new Audio('music/hit.mp3')
					hitAudio.play()
					this.style.backgroundColor = '#2bc52b'
					spanCount.textContent--
					td.removeEventListener('click', hit)
				})
			} else {
				td.addEventListener('click', function miss(event) {
					event.target.removeEventListener('mouseover', hoverAudio)
					console.log(event.target.id)
					let con = count
					removeAllEventHandlers2(con)

					let missAudio = new Audio('music/miss.mp3')
					missAudio.play()
					this.style.backgroundColor = '#e42c2c'
					td.removeEventListener('click', miss)
				})
			}
			//
			tr.appendChild(td)
			count++
		}
		table.appendChild(tr)
	}

	let idInterval = setInterval(() => {
		spanTimer.textContent--
		if (+spanTimer.textContent <= 0) {
			clearInterval(idInterval)
			lostAudio.play()
			table.innerHTML = ''
			parinfo.remove()
			par.innerHTML = 'Ты проиграл :('
			par.insertAdjacentElement('afterend', btnRemove)
		}
		if (spanCount.textContent <= 0) {
			par.innerHTML = 'Ты победил!!!'
			table.innerHTML = ''
			winAudio.play()
			parinfo.remove()
			par.insertAdjacentElement('afterend', btnRemove)
			clearInterval(idInterval)
		}
	}, 1000)
	table.removeEventListener('click', timer)
})

//Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10. Компьютер случайным образом запоминает 10 ячеек из этой таблицы. Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.

let table = document.querySelector('table')
let btnStart = document.createElement('button')
btnStart.textContent = 'Начать'
table.append(btnStart)
let hoverAudio = document.querySelector('#hover')
let missAudio = document.querySelector('#miss')
let hitAudio = document.querySelector('#hit')
let lostAudio = document.querySelector('#lost')
let winAudio = document.querySelector('#win')
let parinfo = document.querySelector('.info')

let spanTimer = document.querySelector('#timer')
let spanCount = document.querySelector('#count')

spanTimer.textContent = 35
spanCount.textContent = 10

spanTimer.addEventListener('click', function change() {
	let input = document.createElement('input')
	input.classList.add('input')
	input.value = spanTimer.textContent
	input.addEventListener('blur', function blur() {
		spanTimer.textContent = input.value
		par.replaceChild(spanTimer, input)
	})
	par.replaceChild(input, spanTimer)
	input.focus()
	spanTimer.removeEventListener('click', change)
})

spanCount.addEventListener('click', function change(event) {
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
	spanCount.removeEventListener('click', change)
})

let par = document.querySelector('.par')

let btnRemove = document.createElement('button')
btnRemove.textContent = 'Заново'
btnRemove.addEventListener('click', function () {
	location.reload()
})

table.addEventListener('click', function timer() {
	btnStart.remove()

	let count = 1
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
	for (let i = 0; i < 10; i++) {
		let tr = document.createElement('tr')
		for (let j = 0; j < 10; j++) {
			let td = document.createElement('td')
			td.addEventListener('mouseover', function hover() {
				hoverAudio.play()
			})

			if (
				randArr.find(function (elem) {
					return elem === count
				})
			) {
				td.addEventListener('click', function hit() {
					hitAudio.play()
					this.style.backgroundColor = '#2bc52b'
					spanCount.textContent--
					this.removeEventListener('mouseover', hover)

					td.removeEventListener('click', hit)
				})
			} else {
				td.addEventListener('click', function () {
					this.removeEventListener('mouseover', hover)
					missAudio.play()

					this.style.backgroundColor = '#e42c2c'
				})
			}

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

//Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10. Компьютер случайным образом запоминает 10 ячеек из этой таблицы. Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.

let table = document.querySelector('table')
let hoverAudio = document.querySelector('#hover')
let missAudio = document.querySelector('#miss')
let hitAudio = document.querySelector('#hit')
let lostAudio = document.querySelector('#lost')
let winAudio = document.querySelector('#win')

let spanTimer = document.querySelector('#timer')
let spanCount = document.querySelector('#count')

spanTimer.addEventListener('click', function change() {
	let input = document.createElement('input')
	input.setAttribute('max', '100')

	spanTimer.removeEventListener('click', change)
})

let par = document.querySelector('.par')

let btnRemove = document.createElement('button')
btnRemove.textContent = 'Заново'
btnRemove.addEventListener('click', function () {
	location.reload()
})

spanTimer.textContent = 30
spanCount.textContent = 10

table.addEventListener('click', function timer() {
	let idInterval = setInterval(() => {
		spanTimer.textContent--
		if (+spanTimer.textContent <= 0) {
			clearInterval(idInterval)
			lostAudio.play()
			table.innerHTML = ''
			par.innerHTML = 'Ты проиграл :('
			par.insertAdjacentElement('afterend', btnRemove)
		}
		if (spanCount.textContent <= 0) {
			par.innerHTML = 'Ты победил!!!'
			table.innerHTML = ''
			winAudio.play()
			par.insertAdjacentElement('afterend', btnRemove)
			clearInterval(idInterval)
		}
	}, 1000)
	table.removeEventListener('click', timer)
})
// let hoverAudio = new Audio()
// hoverAudio.src = 'button.mp3'
// hoverAudio.volume = 0.5 // Для более мягкого звука
// hoverAudio.preload = 'auto'
// console.log(hoverAudio)

function triggerNotification() {
	// audioElement.play()
}

let count = 1
let randArr = []

let find = 10
// 10 рандомных чисел от 1 до 100
for (let i = 0; i < find; i++) {
	let randNum = Math.floor(Math.random() * 100 + 1)
	function forFind(elem) {
		return elem === randNum
	}
	if (randArr.find(forFind)) {
		find++
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

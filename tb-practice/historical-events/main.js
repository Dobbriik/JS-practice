//Пусть мы хотим написать сайт, показывающий таблицу исторических событий за определенный год. Пусть год будет вводится в инпут. По нажатию Enter давайте выведем таблицу событий, случившихся в этот год. Пусть в качестве информации о событии мы хотим видеть дату, название и описание события.

import {
	year2016,
	year2017,
	year2018,
	year2019,
	year2020,
	year2021,
	year2022,
	year2023,
	year2024,
} from './src/evnts.mjs'

const events = {
	2016: year2016,
	2017: year2017,
	2018: year2018,
	2019: year2019,
	2020: year2020,
	2021: year2021,
	2022: year2022,
	2023: year2023,
	2024: year2024,
}

let table = document.querySelector('#table')
let input = document.querySelector('#input')

document.addEventListener('keydown', function (event) {
	if (event.keyCode === 13) {
		table.innerHTML = ''
		if (events[input.value]) {
			for (const elem of events[input.value]) {
				let tr = document.createElement('tr')
				let tdDate = document.createElement('td')
				let tdFact = document.createElement('td')
				let tdDesc = document.createElement('td')
				tdDate.textContent = elem.date
				tdFact.textContent = elem.fact
				tdDesc.textContent = elem.desc
				console.log(elem)
				tr.append(tdDate, tdFact, tdDesc)
				table.append(tr)
			}
		} else {
			let tr = document.createElement('tr')
			let tdNone = document.createElement('td')
			tdNone.textContent = 'Нет информации'
			tr.append(tdNone)
			table.append(tr)
		}
	}
})

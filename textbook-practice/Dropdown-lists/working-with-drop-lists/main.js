//Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.
let select = document.querySelector('#select')
let par = document.querySelector('#info')
let btn = document.querySelector('#btn')

btn.addEventListener('click', function () {
	par.textContent = select.value
})

//Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.

let selectYear = document.querySelector('#years')

selectYear.addEventListener('change', function () {
	if (this.value % 100 === 0) {
		if (this.value % 400 === 0) {
			console.log('Високосный год')
		} else {
			return console.log('не високосный год')
		}
	}
	if (this.value % 4 === 0) {
		console.log('Високосный год')
	} else {
		console.log('не високосный год')
	}
})

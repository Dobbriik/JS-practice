//
let select = document.querySelector('#select')
let button = document.querySelector('#button')

button.addEventListener('click', function () {
	select.value = 'one'
})
// Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий месяц.

let newDate = new Date()

let monthSelect = document.querySelector('#month')

for (const iterator of monthSelect) {
	if (iterator.value == newDate.getMonth()) {
		iterator.selected = true
	}
}

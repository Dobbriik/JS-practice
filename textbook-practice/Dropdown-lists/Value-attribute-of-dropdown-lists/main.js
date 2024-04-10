//
select.addEventListener('change', function () {
	console.log(this.value)
})

//Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.

let daySelect = document.querySelector('#week')
daySelect.addEventListener('change', function () {
	if (this.value > 5) {
		console.log('free-day')
	} else {
		console.log('week-days')
	}
})

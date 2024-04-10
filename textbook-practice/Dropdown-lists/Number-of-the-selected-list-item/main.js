//

//Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.

let select = document.querySelector('#select')
console.log(select.selectedIndex) // выведет 1

let inp = document.querySelector('input')

inp.addEventListener('blur', function () {
	select.selectedIndex = inp.value - 1
})

//Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий день.

let now = new Date()

let selectWeek = document.querySelector('#week')
selectWeek.selectedIndex = now.getDay()

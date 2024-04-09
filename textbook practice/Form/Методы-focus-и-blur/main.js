//Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.
let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')

elem1.addEventListener('input', function () {
	if (elem1.value.length == 2) {
		elem2.focus()
	}
})

elem2.addEventListener('input', function () {
	if (elem2.value.length == 2) {
		elem2.blur()
	}
})

//Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.
let inpRadio = document.querySelectorAll('input')
let par = document.querySelector('p')
let btn = document.querySelector('button')

function addCount() {
	let i = 1
	return inpRadio.forEach(function add(elems) {
		elems.value = i++
	})
}

btn.addEventListener('click', function () {
	addCount()
	inpRadio.forEach(elems => {
		if (elems.checked) {
			par.textContent = elems.value
		}
	})
})

//Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.

let select = document.querySelector('#select')

let option = document.querySelector('#option')

function adde() {
	for (const iterator of select) {
		if (iterator.selected) {
			iterator.text += '!'
		} else {
			iterator.text += '?'
		}
	}
}

select.addEventListener('change', adde)

select.addEventListener('focus', function () {
	for (const iterator of select) {
		iterator.text = iterator.text.replace('!', '')
		iterator.text = iterator.text.replace('?', '')
	}
})

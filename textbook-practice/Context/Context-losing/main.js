//

'use strict' // без strict Child() укажет на window

let elem = document.querySelector('#elem')
elem.addEventListener('blur', parent)

function parent() {
	console.log(this) // выведет ссылку на наш инпут
	console.log(this.value) // text

	function child() {
		console.log(this) // выведет undefined
		console.log(this.value) // ошибка
	}
	child()
}

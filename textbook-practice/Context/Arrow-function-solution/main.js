//
'use strict'

let elem = document.querySelector('#elem')
elem.addEventListener('blur', func)

function func() {
	let square = () => this.value * this.value

	alert(square())
}

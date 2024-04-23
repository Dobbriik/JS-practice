//Так как вызов child осуществляется в родительской функции, то и передаваемый this указывает на то, что нужно. Затем этот this попадает в параметр param и в таком виде и будет доступен внутри функции.

'use strict'

let elem = document.querySelector('#elem')
elem.addEventListener('blur', func)

function func() {
	alert(square(this))

	function square(param) {
		return param.value * param.value
	}
}

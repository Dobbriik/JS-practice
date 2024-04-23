//Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.
let elem = document.querySelector('#elem')
// elem.style.color = 'red'

elem.addEventListener('click', func)
elem.addEventListener('dblclick', func)

function func(elems) {
	console.log(elems.type)
	if (elems.type == 'click') {
		elem.style.color = 'green'
	} else if (elems.type == 'dblclick') {
		elem.style.color = 'red'
	}
}

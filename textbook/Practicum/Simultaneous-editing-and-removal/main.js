//
function inputChange(elem) {
	elem.addEventListener('click', function add() {
		let input = document.createElement('input')
		input.value = elem.textContent
		elem.textContent = ''
		elem.appendChild(input)
		input.addEventListener('blur', function () {
			elem.textContent = this.value
			elem.addEventListener('click', add)
		})
		elem.removeEventListener('click', add)
	})
}

function removeLink(elem) {
	let remove = document.createElement('a')
	remove.href = ''
	remove.textContent = 'remove'
	elem.appendChild(remove)
	remove.addEventListener('click', function (event) {
		elem.remove()
		event.preventDefault()
	})
}

let pars = document.querySelectorAll('#parent p')
// =>2
for (const p of pars) {
	p.innerHTML = `<span>${p.textContent}</span>`
}
// 2<=

for (const span of pars) {
	inputChange(span.firstChild)
	removeLink(span)
}

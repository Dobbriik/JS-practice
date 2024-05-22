//
let toggles = document.querySelectorAll('.toggle')

addEventSpoiler(toggles)

function addEventSpoiler(elements) {
	for (const elem of elements) {
		elem.addEventListener('click', function (event) {
			event.preventDefault()
			let parentElement = elem.parentNode
			let nextElement = parentElement.nextElementSibling
			nextElement.classList.toggle('spoiler')
		})
	}
}

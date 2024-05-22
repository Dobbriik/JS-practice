//

let menuLinks = document.querySelectorAll('a')
let tabs = document.querySelectorAll('.tab')

function addEventToggle(links, tabs) {
	for (const link of links) {
		link.addEventListener('click', function (event) {
			removeClass(links, 'active')
			removeClass(tabs, 'active')
			event.preventDefault()
			let children = Array.from(event.target.parentNode.children)
			let idClick = children.indexOf(event.target)
			links[idClick].classList.toggle('active')
			tabs[idClick].classList.toggle('active')
		})
	}
}

function removeClass(elements, classStyle) {
	for (const elem of elements) {
		if (elem.classList.contains(classStyle)) {
			elem.classList.remove(classStyle)
		}
	}
}

addEventToggle(menuLinks, tabs)

function getNav() {
	const nav = document.createElement('nav')
	nav.classList = 'menu'
	const div = document.createElement('div')
	div.classList = 'text'
	const h1 = document.createElement('h1')
	h1.classList = 'logo'
	h1.textContent = 'Северодвинск'
	div.appendChild(h1)
	const ul = document.createElement('ul')
	ul.classList = 'menu__list'
	const lisrArr = [
		'О городе',
		'Достопримечательности',
		'Где бухнуть?',
		'Где Погулять?',
		'Где Работать?',
		'Как выбраться из города?',
	]
	for (const text of lisrArr) {
		const li = document.createElement('li')
		li.classList = 'menu__item'
		li.textContent = text
		li.dataset.path = text
		ul.appendChild(li)
	}
	nav.append(div, ul)
	return nav
}

const nav = getNav()
export { nav }

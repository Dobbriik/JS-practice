import { nav } from '../../components/comp.js'

function creatrHeder() {
	const head = document.createElement('div')
	head.classList = 'header'
	head.appendChild(nav)
	document.body.insertAdjacentElement('afterbegin', head)
}
creatrHeder()

function getPathForData(dataSet) {
	const ul = Array.from(document.querySelector('ul').children)
	let arrPath = [
		'/root/src',
		'/root/pages/Sights.html',
		'/root/pages/Where-to-drink.html',
		'/root/pages/Where-to-walk.html',
		'/root/pages/Where-to-work.html',
		'/root/pages/How-to-get-out.html',
	]
	let objPath = {}
	for (let i = 0; i < 6; i++) {
		objPath[ul[i].dataset.path] = arrPath[i]
	}

	if (!objPath[dataSet]) {
		return '/root/src/404.html'
	}
	return objPath[dataSet]
}

function addEventServer(path) {
	const ul = Array.from(document.querySelector('ul').childNodes)
	let objUrlPath
	for (const li of ul) {
		li.addEventListener('click', function () {
			window.location.href = getPathForData(this.dataset.path)
		})
	}
}
addEventServer()

getPathForData()

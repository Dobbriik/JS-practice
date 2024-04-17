//Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте в конец его текста восклицательный знак.

function forEach(selector, func) {
	let elems = document.querySelectorAll(selector)
	for (const elem of elems) {
		func(elem)
	}
}

forEach('.elem', function (elem) {
	elem.textContent += '!'
})

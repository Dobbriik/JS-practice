//Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте ему в начало его порядковый номер.

function forEach(selector, func) {
	let elems = document.querySelectorAll(selector)
	for (let i = 0; i < elems.length; i++) {
		func(elems[i], i)
	}
}

forEach('.elem', function (elem, i) {
	elem.textContent = i + elem.textContent
})

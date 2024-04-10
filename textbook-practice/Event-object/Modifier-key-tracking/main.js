//
let elem = document.querySelector('#elem')

elem.addEventListener('click', function (event) {
	if (event.ctrlKey) {
		elem.style.backgroundColor = ''
		console.log('нажат Ctrl')
	}

	if (event.altKey) {
		elem.style.backgroundColor = 'red'
		console.log('нажат Alt')
	}

	if (event.shiftKey) {
		console.log('нажат Shift')
	}
})
//Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.

let elem1 = document.querySelector('#elem1')

elem1.addEventListener('click', function (elem) {
	if (elem.ctrlKey) {
		elem.target.textContent += 1
	}
	if (elem.shiftKey) {
		elem.target.innerHTML += `<ul id="elem1">
		<li>text1</li>
		<li>text2</li>
		<li>text3</li>
		<li>text4</li>
		<li>text5</li>
	</ul>`
	}
	// console.log(elem.target)
})

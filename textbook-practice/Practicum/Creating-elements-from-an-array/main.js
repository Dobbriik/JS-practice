//Создание элементов из массива на JavaScript
let arr = [1, 2, 3, 4, 5]

let parent = document.querySelector('#parent')

// for (let elem of arr) {
// 	let p = document.createElement('p')
// 	p.textContent = elem

// 	parent.appendChild(p)
// }

//Модифицируйте  код так, чтобы по клику на абзац к его содержимому прибавлялась единица.

for (let elem of arr) {
	let p = document.createElement('p')
	p.textContent = elem

	p.addEventListener('click', function () {
		p.textContent += '!'
	})
	parent.appendChild(p)
}

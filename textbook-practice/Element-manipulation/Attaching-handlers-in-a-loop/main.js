//
let parent = document.querySelector('#parent')

for (let i = 1; i <= 9; i++) {
	let p = document.createElement('p')
	p.textContent = '!' + i

	// Навешиваем обработчик клика:
	p.addEventListener('click', function () {
		console.log(this.textContent)
	})

	parent.appendChild(p)
}

//Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.

let div = document.createElement('div')
document.body.appendChild(div)
let par
for (let i = 0; i < 5; i++) {
	let input = document.createElement('input')
	div.appendChild(input)
	input.addEventListener('blur', function () {
		par.textContent += `${this.value} `
		this.value = ''
	})
}
par = document.createElement('p')
div.appendChild(par)

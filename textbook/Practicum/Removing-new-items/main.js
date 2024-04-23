//
let parent = document.querySelector('#parent')

for (let i = 1; i <= 9; i++) {
	let p = document.createElement('p')
	p.textContent = i

	p.addEventListener('click', function () {
		this.remove()
	})

	parent.appendChild(p)
}

//Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.

let ul = document.querySelector('#parent2')

let lis = document.querySelectorAll('#parent2 li')
// console.log(lis[lis.length - 1].textContent)
lis.forEach(element => {
	element.addEventListener('click', removes)
})

function removes() {
	this.remove()
}

let inpBtn = document.querySelector('input')

inpBtn.addEventListener('click', function () {
	let li = document.createElement('li')
	li.textContent = 'new'
	li.addEventListener('click', removes)
	ul.insertAdjacentElement('beforeend', li)
})

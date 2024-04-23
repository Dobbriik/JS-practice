//
let parent = document.querySelector('#parent')

let p = document.createElement('p')
p.textContent = '!'

p.addEventListener('click', function () {
	console.log(this.textContent) // по клику выведем текст абзаца
})

parent.appendChild(p)

//Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.

let list = document.createElement('ol')

let btn = document.createElement('button')
btn.textContent = 'add'
document.body.appendChild(list)
document.body.appendChild(btn)

btn.addEventListener('click', function () {
	let item = document.createElement('li')
	item.textContent = 'item'
	list.appendChild(item)
	item.addEventListener('click', function () {
		this.textContent += '!'
	})
})

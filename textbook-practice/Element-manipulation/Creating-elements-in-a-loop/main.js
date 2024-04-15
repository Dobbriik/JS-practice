//Давайте теперь сделаем так, чтобы новые элементы создавались в цикле.
let parent = document.querySelector('#parent')

for (let i = 1; i <= 9; i++) {
	let p = document.createElement('p')
	p.textContent = '!'

	parent.appendChild(p)
}

//Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.

let list = document.createElement('ul')
document.body.appendChild(list)

for (let i = 1; i < 11; i++) {
	let item = document.createElement('li')
	item.textContent = i
	list.appendChild(item)
}

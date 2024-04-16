//Дан массив. Выведите его элементы в виде списка ul.

let arr = [1, 2, 3, 4, 5]

let ul = document.createElement('ul')
document.body.appendChild(ul)
for (const elem of arr) {
	let li = document.createElement('li')
	li.textContent = elem

	ul.appendChild(li)
	inputRedact(li)
	removeLink(li)
}

//Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.
function inputRedact(elem) {
	elem.addEventListener('click', function add() {
		let input = document.createElement('input')
		input.value = elem.textContent
		elem.textContent = ''
		elem.appendChild(input)
		input.addEventListener('blur', function () {
			elem.textContent = input.value
			elem.addEventListener('click', add)
		})

		elem.removeEventListener('click', add)
	})
}

//Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать.

let input = document.createElement('input')
ul.insertAdjacentElement('afterend', input)

input.addEventListener('blur', function () {
	let li = document.createElement('li')
	li.textContent = this.value
	inputRedact(li)
	removeLink(li)
	ul.appendChild(li)

	this.value = ''
})

//Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.

function removeLink(elem) {
	let remove = document.createElement('a')
	remove.href = ''
	remove.textContent = 'удалить'
	elem.appendChild(remove)
	remove.addEventListener('click', function (event) {
		event.preventDefault()
		elem.remove()
	})
}

//Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li.

let uls = ul.children

// заменить text на span через childNodes
for (const li of uls) {
	let span = document.createElement('span')
	let text = li.childNodes[0]
	console.log(text.textContent)
	span.textContent = text.textContent

	li.replaceChild(span, text)
	console.log(span)
	// text[0].textContent = `<span>${text}</span>`
}

// console.log(li.childNodes[1])

// function addLine (elem){
// 	elem
// }

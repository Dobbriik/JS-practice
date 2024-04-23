//Давайте сделаем так, чтобы любой абзац удалялся по клику на нем:
let elems = document.querySelectorAll('p')

for (let elem of elems) {
	elem.addEventListener('click', function () {
		elem.remove()
	})
}

//Сделайте так, чтобы любая li удалялась по клику на нее.

let list = document.querySelector('ul')

for (const item of list.children) {
	item.addEventListener('click', function () {
		this.remove()
	})
}

//Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.

let parent = document.querySelector('#parent')
console.log(parent.lastElementChild)
let button = document.querySelector('#button')

button.addEventListener('click', function () {
	parent.lastElementChild.remove()
})

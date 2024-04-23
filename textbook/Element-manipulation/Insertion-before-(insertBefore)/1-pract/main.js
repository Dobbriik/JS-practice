//Вставьте перед этим элементом элемент с текстом 'new'.

let parent = document.querySelector('#parent')
let item = document.querySelector('#elem')

let itemNew = document.createElement('li')
itemNew.textContent = 'new'

parent.insertBefore(itemNew, item)

//Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент приводил к тому, что в конец его текста будет добавляться '!'.

itemNew.addEventListener('click', function () {
	itemNew.textContent += '!'
})

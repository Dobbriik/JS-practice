//createElement. Параметром этого метода следует передавать имя тега, который должен быть создан.

//Если записать результат работы createElement в переменную, то в этой переменной будет такой элемент, как будто бы мы получили его через querySelector.

//Единственное отличие - наш элемент не будет размещен на странице. А так мы можем менять ему текст, атрибуты, навешивать обработчики событий и в конце концов разместить его на странице.

//Для размещения нового элемента на странице применяется метод appendChild. Этот метод следует применять к тому элементу, в который мы хотим поместить наш элемент. А параметром метода следует передавать наш новый элемент, созданный ранее через createElement.

let parent = document.querySelector('#parent')

let p = document.createElement('p')
p.textContent = '!'

parent.appendChild(p)

//Вставьте ему в конец li с текстом 'item'.

let list = document.querySelector('#elem')

let item = document.createElement('li')
item.textContent = 'item'
item.textContent = 'item'

list.appendChild(item)

//Дан ol и кнопка:

let list2 = document.querySelector('#elem2')
let btn = document.querySelector('#button')

btn.addEventListener('click', function () {
	let item2 = document.createElement('li')
	item2.textContent = 'item'
	list2.appendChild(item2)
})

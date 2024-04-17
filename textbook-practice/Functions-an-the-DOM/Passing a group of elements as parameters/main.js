//Сделайте функцию appendText, которая первым параметром будет принимать массив DOM элементов, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.

function appendText(elems, text) {
	for (const elem of elems) {
		elem.textContent += text
	}
}

let pars = document.querySelectorAll('p')
appendText(pars, '!')

//Сделайте функцию appendElem, которая первым параметром будет принимать ссылку на DOM объект, в котором лежит тег ul, а вторым - текст. Сделайте так, чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец переданного тега ul.

function appendElem(elem, text) {
	let li = document.createElement('li')
	li.textContent = text
	elem.appendChild(li)
}

let ul = document.querySelector('ul')

appendElem(ul, 'item')

//Дан массив и ul. С помощью функции appendElem, созданной в предыдущей задаче, запишите каждый элемент массива в отдельную li в этом ul.

let arr = [1, 2, 3, 4]
arr.forEach(element => {
	appendElem(ul, element)
})

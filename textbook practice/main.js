// 1

// let par = document.getElementsByClassName('www')

// for (const elem of par) {
// 	elem.innerHTML += '!!!'
// 	elem.style.color = 'red'
// }

//2

// let parent = document.querySelector('#parent')

// let elems1 = parent.querySelector('.www')
// let elems2 = parent.querySelector('.ggg')

//3

// let parent = document.getElementById('parent')
// console.log(parent.lastChild) // Выведет asdas
// console.log(parent.lastElementChild) // Выведет <span>Text 2</span>

// 4

// let list = document.querySelector('#list')

// console.log(list.nextSibling) //text(3)
// console.log(list.nextElementSibling) // <li>text4</li>

// console.log(list.previousSibling) //  	text(2)
// console.log(list.previousElementSibling) //  <li>text2</li>

//5

// let elem = document.querySelector('#elem')

// console.log(elem.childNodes[0])
// console.log(elem.childNodes[1])
// console.log(elem.childNodes[2])

// for (let node of elem.childNodes) {
// 	console.log(node)
// }

// let elem1 = document.querySelector('#elem')
// console.log(elem1.children[0])

// elem1.childNodes.forEach(elem => {
// 	console.log(elem)
// })

//6 Название узлов в JavaScript
// let div = document.querySelector('#elem')

// for (const elem of div.childNodes) {
// 	console.log(elem.nodeName)
// }

//7 Переберите циклом все узлы этого дива и выведите в консоль только узлы-элементы и текстовые узлы.

// ELEMENT_NODE (1): Элемент HTML, такой как <p>, <div>, <a> и т.д.

// ATTRIBUTE_NODE (2): Атрибут HTML, такой как class, id, href и т.д.

// TEXT_NODE (3): Текстовый узел, содержащий текст.

// COMMENT_NODE (8): Комментарий в HTML, например <!-- Комментарий -->.

// DOCUMENT_NODE (9): Узел, представляющий весь документ.

// DOCUMENT_TYPE_NODE (10): Узел, представляющий тип документа, такой как <!DOCTYPE html>.

// let div = document.querySelector('#elem')

// div.childNodes.forEach(elem => {
// 	console.log(elem.nodeType)
// })

// 8 Переберите циклом все узлы этого дива и выведите в консоль тексты всех узлов.

// let div = document.querySelector('#elem')

// // console.log(div.childNodes)

// div.childNodes.forEach(elem => {
// 	// console.log(elem) // узлы
// 	console.log(elem.nodeName)
// 	console.log(elem.nodeType)
// 	if (elem.nodeType == 8 || elem.nodeType == 3) {
// 		console.log(elem.data)
// 	}
// 	if (elem.nodeType == 1) {
// 		console.log(elem.innerHTML)
// 	}
// 	// elem.innerHTML += `${elem.nodeType}`
// 	// elem.data += `${elem.nodeType}`
// 	elem.textContent += `${elem.nodeType}`
// })

// 9 Формы ,Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.

// let textArea = document.querySelector('#text')
// let par = document.querySelector('p')

// textArea.addEventListener('blur', function () {
// 	par.textContent += ` ${textArea.value}`
// 	textArea.value = ''
// })

// 10

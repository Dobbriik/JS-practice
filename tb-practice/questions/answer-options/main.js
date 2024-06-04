//

let checkS = document.querySelector('button')
let test = document.querySelector('#test')

let questions = [
	{
		text: 'вопрос 1?',
		right: 0,
		variants: ['вариант 1', 'вариант 2', 'вариант 3'],
	},
	{
		text: 'вопрос 2?',
		right: 1,
		variants: ['вариант 1', 'вариант 2', 'вариант 3'],
	},
	{
		text: 'вопрос 3?',
		right: 2,
		variants: ['вариант 1', 'вариант 2', 'вариант 3'],
	},
]

for (const iterator of questions) {
	let div = document.createElement('div')
	let p = document.createElement('p')
	p.textContent = iterator.text
	for (const elem of iterator.variants) {
		let label = document.createElement('label')
		label.textContent = elem
		let input = document.createElement('input')
		input.type = 'radio'
		input.name = iterator.text.slice(-2, -1)
		input.addEventListener('focus', function () {
			let idVar = getIdQuest(input)
			changeClass(input, idVar === iterator.right)
		})
		label.insertAdjacentElement('afterBegin', input)
		div.appendChild(label)
	}

	div.insertAdjacentElement('afterBegin', p)
	test.appendChild(div)
}

checkS.addEventListener('click', function () {
	let inputs = document.querySelectorAll('input')
	for (const input of inputs) {
		if (input.checked) {
			let idVar = getIdQuest(input)
			let idQuest = getIdQuest(input.parentElement)
			console.log(idQuest)
			changeClass(input, idVar === questions[idQuest].right)
		}
	}
})

function getIdQuest(input) {
	let child = input.parentElement
	let parent = Array.from(child.parentElement.children)
	let clearParent = []
	for (const elem of parent) {
		if (elem.tagName == child.tagName) {
			clearParent.push(elem)
		}
	}
	return clearParent.indexOf(child)
}

function changeClass(elem, ifBoolean) {
	let child = elem.parentElement
	let quest = child.parentElement.firstElementChild
	if (ifBoolean) {
		quest.classList.add('right')
		quest.classList.remove('wrong')
	} else {
		quest.classList.add('wrong')
	}
}

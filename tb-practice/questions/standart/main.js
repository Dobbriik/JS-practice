//
let inputs = document.querySelectorAll('input')
let test = document.querySelector('#test')
let btn = document.querySelector('button')

let answers = ['ответ 1', 'ответ 2', 'ответ 3']

// 1
// let questions = ['вопрос 1?', 'вопрос 2?', 'вопрос 3?']

// 2
// let questions = {
// 	'Вопрос 1?': 'ответ 1',
// 	'Вопрос 2?': 'ответ 2',
// 	'Вопрос 3?': 'ответ 3',
// }

// 3
let questions = [
	{
		text: 'вопрос 1?',
		right: 'ответ 1',
	},
	{
		text: 'вопрос 2?',
		right: 'ответ 2',
	},
	{
		text: 'вопрос 3?',
		right: 'ответ 3',
	},
]

// 1
// for (let i = 0; i < questions.length; i++) {
// 	createQuest(test, questions[i], answers[i].slice(-1))
// }

// 2
// for (const key in questions) {
// 	createQuest(test, key, questions[key].slice(-1))
// }

// 3
for (const questResult of questions) {
	createQuest(test, questResult.text, questResult.right.slice(-1))
}

function createQuest(parent, quest, res) {
	let div = document.createElement('div')
	let p = document.createElement('p')
	p.textContent = quest
	let input = document.createElement('input')
	input.addEventListener('keypress', function (event) {
		if (event.key == 'Enter') {
			changeClass(this.value == res, input)
		}
	})
	div.append(p, input)
	parent.appendChild(div)
}

function changeClass(ifBoolean, elem) {
	if (ifBoolean) {
		elem.previousElementSibling.classList.add('right')
		elem.previousElementSibling.classList.remove('wrong')
	} else {
		elem.previousElementSibling.classList.add('wrong')
	}
}

function checkData(elem) {
	let num = Number(elem.getAttribute('data-right').slice(-1))
	changeClass(num === Number(elem.value), elem)
}
function checkAnswers(elem, arr) {
	let child = elem.parentElement
	let parent = Array.from(child.parentElement.children)
	let id = Number(parent.indexOf(child))
	changeClass(elem.value == arr[id].slice(-1), elem)
}

for (const input of inputs) {
	input.addEventListener('keypress', function (event) {
		if (event.key == 'Enter') {
			// checkData(input)
			checkAnswers(input, answers)
		}
	})
	input.parentElement
}

btn.addEventListener('click', function () {
	for (const input of document.querySelectorAll('input')) {
		// checkData(input)
		checkAnswers(input, answers)
	}
})

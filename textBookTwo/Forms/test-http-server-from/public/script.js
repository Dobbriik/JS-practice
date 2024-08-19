const a = document.querySelector('#link')
const form = document.querySelector('#forLink')
const formMail = document.querySelector('#mail')
const targetForm = document.querySelector('#targetForm')
let arrInput = {}
// for (const input of form.children) {
// 	arrInput[input.type]
// }
a.addEventListener('click', function (event) {
	event.preventDefault()
	form.submit()
})
form.addEventListener('submit', function (event) {
	event.preventDefault()
})
formMail.addEventListener('submit', function (event) {
	let input = [...this.children]
	console.log(input[0].value)
	if (input[0].value !== 'sasha') {
		event.preventDefault()
	}
})

targetForm.addEventListener('submit', function (event) {
	event.preventDefault()
	let formDateNew = new FormData(targetForm)
	formDateNew.append('test4', '321')
	formDateNew.delete('test2')
	console.log(Array.from(formDateNew))
	for (let entry of formDateNew.entries()) {
		console.log(entry)
	}
	for (let key of formDateNew.keys()) {
		console.log(key)
	}
	for (let value of formDateNew.values()) {
		console.log(value)
	}
	targetForm.submit()
})

let elems = document.querySelectorAll('p')

for (let [key, elem] of elems.entries()) {
	console.log(key, elem)
}

for (let [key, { id, textContent }] of elems.entries()) {
	console.log(key, id, textContent)
}

//Получите номера, id и value инпутов.

let inputs = document.querySelectorAll('input')

for (const [key, { id, value }] of inputs.entries()) {
	console.log(key, id, value)
}

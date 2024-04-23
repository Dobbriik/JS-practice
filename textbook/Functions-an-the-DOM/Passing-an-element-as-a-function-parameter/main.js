//Сделайте функцию appendText, которая первым параметром будет принимать DOM элемент, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец этого элемента.

function appendText(elem, text) {
	elem.textContent += text
}

let par1 = document.querySelector('.elem1')
appendText(par1, '!')

let par2 = document.querySelector('.elem2')
appendText(par2, '!')

let par3 = document.querySelector('.elem3')
appendText(par3, '!')

//Даны абзацы. Получите их, переберите циклом и каждому добавьте в конец '!' с помощью функции appendText, сделанной в предыдущей задаче.

let pars = document.querySelectorAll('p')
for (const elem of pars) {
	appendText(elem, '?')
}

//Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст. Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута.

function setValue(elem, value) {
	elem.value = value
}
let inputs = document.querySelectorAll('input')
for (const elem of inputs) {
	setValue(elem, 'Text')
}

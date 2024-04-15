//Клонировать элемент можно с помощью метода cloneNode. В этот метод нужно передавать параметром true либо false. Если передан true, то элемент клонируется полностью, вместе со всем атрибутами и дочерними элементами, а если false - только сам элемент.

let parent = document.querySelector('#parent')
let elem = parent.querySelector('.elem')

let clone = elem.cloneNode(true)
parent.appendChild(clone)

//Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

let input = document.querySelector('input')
let copy = document.querySelector('button')

copy.addEventListener('click', function () {
	let clone = input.cloneNode(true)
	copy.insertAdjacentElement('beforebegin', clone)
})

//Модифицируйте созданную мною функцию так, чтобы параметром она принимала не id элемента, а произвольный CSS селектор.

function setText(select, text = '') {
	let elem = document.querySelector(select)
	elem.textContent = text
}

setText('p', 'asd')

//Сделайте функцию setAttr, которая будет менять атрибут DOM элементу. Пусть первым параметром функция принимает селектор элемента, вторым - имя атрибута, а третьим - его новое значение.

function setAtr(select, attribute, value) {
	let elem = document.querySelector(select)
	elem.setAttribute(attribute, value)
}

setAtr('p', 'style', 'color: green')

//Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.

function appendText(select, text) {
	let elem = document.querySelectorAll(select)
	for (const item of elem) {
		item.textContent += text
	}
}

appendText('.par', ' new')

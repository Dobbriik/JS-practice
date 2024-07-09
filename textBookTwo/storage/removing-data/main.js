localStorage.removeItem('key')

let value = localStorage.getItem('key')

//Сделайте счетчик обновления страницы. Пусть счетчик обнуляется после того, как дойдет до 10.

let countLocal = localStorage.getItem('count')

if (!countLocal) {
	localStorage.setItem('count', 1)
} else {
	let count = Number(localStorage.getItem('count'))
	if (count > 10) {
		localStorage.removeItem('count')
	} else {
		document.body.textContent = count
		count++
		localStorage.setItem('count', count)
	}
}

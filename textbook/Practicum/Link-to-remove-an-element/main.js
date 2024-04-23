//Ссылка на удаление элемента

// let elem = document.querySelector('#elem')
// let remove = document.querySelector('#remove')

// remove.addEventListener('click', function (event) {
// 	elem.remove()
// 	event.preventDefault() // отменяем переход по ссылке
// })

let link = document.querySelector('#remove')

let par = document.querySelector('#elem')

link.addEventListener('click', function (elem) {
	elem.preventDefault()
	par.remove()

	console.log(elem)
})

//
// let div = document.querySelector('div')

// div.addEventListener('click', function (event) {
// 	if (event.target.tagName === 'DIV') {
// 		console.log('клик именно по диву')
// 	}
// 	if (event.target.tagName === 'P') {
// 		console.log('клик именно по абзацу')
// 	}
// })

let div = document.querySelector('div')

div.addEventListener('click', function (event) {
	if (event.target.matches('div')) {
		console.log('клик именно по диву')
	}
	if (event.target.matches('p')) {
		console.log('клик именно по абзацу')
	}
})

//Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.
//Модифицируйте предыдущую задачу. Сделайте так, чтобы при клике на li, ей в конец добавлялся восклицательный знак, а при клике на ul в консоль выводилась информация об этом.

let wrap = document.querySelector('.wrapper')
wrap.addEventListener('click', function (event) {
	if (event.target.matches('div.wrapper')) {
		console.log('Тыкнули на див')
	}
	if (event.target.matches('ul')) {
		console.log('Тыкнули на ul')
	}
	if (event.target.matches('li')) {
		event.target.textContent += '!'
		console.log('Тыкнули на li')
	}
	console.log(event.target.tagName)
})

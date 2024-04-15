//
let elem = document.querySelector('#elem')

elem.addEventListener('click', function () {
	setTimeout(function () {
		alert('!')
	}, 3000)
})

//Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.

let par = document.querySelector('p')

window.onload = setTimeout(() => {
	par.textContent = '10 секунд прошло'
}, 10000)

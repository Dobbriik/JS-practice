//Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.

let start = document.querySelector('#start')
let i = 100
start.addEventListener('click', function sts() {
	setInterval(() => console.log(i--), 1000)
})

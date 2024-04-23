//Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.

let par = document.querySelector('p')
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')

let idInterval = []
start.addEventListener('click', function () {
	let idInterval1 = setInterval(() => {
		par.textContent++
	}, 1000)
	idInterval.push(idInterval1)
	console.log(idInterval)
})

stop.addEventListener('click', function () {
	idInterval.forEach(element => {
		clearInterval(element)
	})
})

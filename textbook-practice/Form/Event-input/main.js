//Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.
let elem1 = document.querySelector('#elem1')

elem1.addEventListener('input', function () {
	if (this.value.length == 5) {
		console.log('Длина текста 5 символов.')
	}
})

// Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.

let elem2 = document.querySelector('#elem2')
let par = document.querySelector('p')

let i = 5

elem2.addEventListener('input', function () {
	if (this.value.length <= 5) {
		par.textContent = `Осталось символов : ${i - this.value.length}`
	} else {
		par.textContent = `Превышение количества символов на : ${-(
			i - this.value.length
		)}`
	}
})

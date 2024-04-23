// через id
let btns = document.querySelectorAll('button')
let ps = document.querySelectorAll('p')

// for (const btn of btns) {
// 	btn.addEventListener('click', function () {
// 		console.log(this.dataset.id)
// 		let par = document.querySelector('#' + this.dataset.id)
// 		par.classList.toggle('hidden')
// 	})
// }

//Второй способ

// for (let i = 0; i < btns.length; i++) {
// 	btns[i].addEventListener('click', function () {
// 		ps[i].classList.toggle('hidden')
// 	})
// }

// Третий способ

for (const btn of btns) {
	btn.addEventListener('click', function () {
		this.previousElementSibling.classList.toggle('hidden')
	})
}

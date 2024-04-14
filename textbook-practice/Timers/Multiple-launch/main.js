//
let start = document.querySelector('#start')
let i = 100
start.addEventListener('click', function sts() {
	setInterval(() => console.log(i--), 1000)
	this.removeEventListener('click', sts)
})

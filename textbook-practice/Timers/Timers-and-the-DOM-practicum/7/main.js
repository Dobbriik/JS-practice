//
let par = document.querySelector('p')
setInterval(() => {
	if (par.style.color == 'red') {
		par.style.color = 'green'
	} else {
		par.style.color = 'red'
	}
}, 1000)

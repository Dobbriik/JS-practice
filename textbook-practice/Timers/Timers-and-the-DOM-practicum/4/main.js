//Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.

let inp = document.querySelector('input')
let par = document.querySelector('p')
let idInt
function add() {
	par.textContent = +this.value
	idInt = setInterval(() => {
		par.textContent--
		if (par.textContent <= 0) {
			clearInterval(idInt)
		}
	}, 1000)
}

inp.addEventListener('blur', add)

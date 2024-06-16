let inputOne = document.querySelector('#taskOne')
let inputTwo = document.querySelector('#taskTwo')

inputOne.addEventListener('blur', function () {
	if (this.value.length <= 9) {
		this.classList.remove('success')
		this.classList.remove('error')
		this.classList.add('success')
	} else {
		this.classList.remove('success')
		this.classList.remove('error')
		this.classList.add('error')
	}
})

inputTwo.addEventListener('blur', function () {
	if (this.value < 10) {
		this.dataset.type = 'success'
	} else if (this.value >= 10 && this.value <= 20) {
		this.dataset.type = 'warning'
	} else if (this.value > 20) {
		this.dataset.type = 'error'
	}
})

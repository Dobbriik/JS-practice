let pars = document.querySelectorAll('p')

for (const p of pars) {
	p.addEventListener('click', function () {
		p.classList.toggle('active')
	})
	let numText = Number(p.textContent)
	if (!(numText % 2)) {
		p.classList.add('error')
	} else {
		p.classList.add('success')
	}
}

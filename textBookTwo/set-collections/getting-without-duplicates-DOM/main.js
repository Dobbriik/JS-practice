//Даны абзацы и кнопка. Пользователь кликает на эти абзацы в произвольном порядке. Сделайте так, чтобы по нажатию на кнопку в конец каждого абзаца, на который был совершен клик, был добавлен восклицательный знак.

let pars = document.querySelectorAll('p')
let button = document.querySelector('button')
let set = new Set()

for (const p of pars) {
	p.addEventListener('click', function () {
		set.add(this)
	})
}

button.addEventListener('click', function () {
	for (const p of set) {
		p.textContent += '!'
	}
})

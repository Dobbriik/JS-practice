//Объект localStorage не является итерируемым. Тем не менее в нем есть индексы и длина. Это значит, что можно выполнить перебор записей через обычный цикл for со счетчиком:
//По нажатию на кнопку выведите циклом все записи из локального хранилища.

function getAllEntries() {
	const btn = document.querySelector('button')
	btn.addEventListener('click', function () {
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i)
			const value = localStorage.getItem(key)
			console.log(key, value)
		}
	})
}
getAllEntries()

//
let input = document.querySelector('#input')
let list = document.querySelector('#list')

input.addEventListener('keypress', function (event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li')

		let task = document.createElement('span')
		task.classList.add('task')
		task.textContent = this.value
		task.addEventListener('dblclick', function () {
			let inputChange = document.createElement('input')
			inputChange.value = task.textContent
			task.textContent = ''
			inputChange.addEventListener('keypress', function (events) {
				if (events.key == 'Enter') {
					inputChange.parentElement.textContent = inputChange.value
				}
			})
			task.appendChild(inputChange)
		})
		li.appendChild(task)

		let remove = document.createElement('span')
		remove.classList.add('remove')
		remove.textContent = 'удалить'
		remove.addEventListener('click', function () {
			remove.parentElement.remove()
		})
		li.appendChild(remove)

		let mark = document.createElement('span')
		mark.classList.add('mark')
		mark.textContent = 'сделано'
		mark.addEventListener('click', function () {
			task.classList.toggle('done')
		})
		li.appendChild(mark)

		list.appendChild(li)

		this.value = ''
	}
})

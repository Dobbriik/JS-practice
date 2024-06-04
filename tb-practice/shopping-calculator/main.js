//
let name = document.querySelector('#name')
let price = document.querySelector('#price')
let amount = document.querySelector('#amount')
let add = document.querySelector('#add')
let table = document.querySelector('#table')
let total = document.querySelector('#total')

function createCell(tr, value, name) {
	let td = document.createElement('td')
	td.textContent = value
	td.classList.add(name)
	td.addEventListener('click', function () {
		recountTotal()
	})
	tr.appendChild(td)
	return td
}

function recountTotal() {
	let costs = table.querySelectorAll('.cost')
	let sum = 0
	if (costs) {
		for (const elem of costs) {
			sum += Number(elem.textContent)
		}
	}
	total.textContent = sum
}

function allowEdit(td) {
	td.addEventListener('dblclick', function () {
		let inputChange = document.createElement('input')
		inputChange.value = this.textContent
		this.textContent = ''
		inputChange.focus()
		inputChange.addEventListener('keypress', function (event) {
			if (event.key == 'Enter') {
				td.textContent = this.value
				let sum = 1
				if (td.classList.contains('price') || td.classList.contains('amount')) {
					for (const elem of td.parentElement.children) {
						if (
							elem.classList.contains('price') ||
							elem.classList.contains('amount')
						) {
							sum *= Number(elem.textContent)
						}
						if (elem.classList.contains('cost')) {
							elem.textContent = sum
						}
					}
					recountTotal()
				}
			}
		})
		this.appendChild(inputChange)
	})
}

add.addEventListener('click', function () {
	let tr = document.createElement('tr')

	allowEdit(createCell(tr, name.value, 'name'))
	allowEdit(createCell(tr, price.value, 'price'))
	allowEdit(createCell(tr, amount.value, 'amount'))
	createCell(tr, price.value * amount.value, 'cost')

	createCell(tr, 'удалить', 'remove').addEventListener('click', function () {
		this.parentElement.remove()
		recountTotal()
	})

	table.appendChild(tr)
	recountTotal()
})

// 1 Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.

// 2 Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.

// 3 Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.

// 4 Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.

let list = document.querySelector('#elem')

let arr = [1, 2, 3, 4, 5]

for (const elem of arr) {
	//1
	let item = document.createElement('li')
	item.textContent = elem
	list.insertAdjacentElement('beforeEnd', item)
	//2
	item.addEventListener('click', function () {
		console.log(this.textContent)
	})

	item.addEventListener('click', function add() {
		//3
		this.textContent += '!'
		//4
		item.removeEventListener('click', add)
	})
}

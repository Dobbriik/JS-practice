//Метод append позволяет вставить в конец какого-либо элемента другой элемент. Параметром метод принимает элемент, как правило созданный через createElement, либо строку. Можно добавить сразу несколько элементов или строк, перечислив их через запятую.

// родитель.append(элемент или строка);

let parent = document.querySelector('#parent')

let p = document.createElement('p')
p.textContent = '!'

parent.append(p)

//Поместим сразу несколько абзацев в конец блока #parent:

let p1 = document.createElement('p')
p1.textContent = 'a'

let p2 = document.createElement('p')
p2.textContent = 'b'

parent.append(p1, p2)

// Давайте в качестве параметра метода используем строку:

parent.append('!')

//Давайте заполним таблицу tr-ками и td-шками:

let table = document.querySelector('#table')

for (let i = 1; i <= 3; i++) {
	let tr = document.createElement('tr') // создаем tr-ку

	// Заполняем tr-ку td-шками:
	for (let j = 1; j <= 3; j++) {
		let td = document.createElement('td') // создаем td-шку
		td.textContent = j // пишем в нее текст

		tr.append(td) // добавляем созданную td-шку в конец tr-ки
	}

	table.append(tr) // добавляем созданную tr-ку в конец таблицы
}

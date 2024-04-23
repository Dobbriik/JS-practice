// 1 Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет).

// 2 Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым).

let ps = document.querySelectorAll('p')

for (const p of ps) {
	p.innerHTML = `<span>${p.textContent}</span>`
}

function linkAddClass(elem, className = '', text = '') {
	let addClass = document.createElement('a')
	addClass.href = ''
	addClass.textContent = text
	addClass.addEventListener('click', function (event) {
		event.preventDefault()
		// для p
		// elem.firstChild.classList.toggle(className)
		// для таблицы
		//3
		elem.classList.toggle(className)
		//2
		// this.remove()
	})
	elem.appendChild(addClass)
}

for (const p of ps) {
	console.log(p.firstChild)
	linkAddClass(p, 'colored', 'зачер')
}

//Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со ссылкой. По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона.

// 3 Модифицируйте предыдущую задачу так, чтобы первое нажатие по ссылке красило ряд в зеленый фон, а второе нажатие отменяло это действие.

let trs = document.querySelectorAll('table tr')

for (const tr of trs) {
	linkAddClass(tr, 'color-green', 'покрасить')
}

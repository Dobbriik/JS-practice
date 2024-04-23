//Параметры по умолчанию

// укажем родительский элемент и количество. При этом нам не нужно будет указывать тип - ведь элементы объекта настроек не имеют порядка, и мы можем опускать их как угодно. Итак, вот наша настройка:

let config = {
	root: '#parent',
	amount: 10,
}

;(function ({ root, type = 'p', amount = 5 }) {
	let parent = document.querySelector(root)

	for (let i = 1; i <= amount; i++) {
		let elem = document.createElement(type)
		parent.append(elem)
	}
})(config)

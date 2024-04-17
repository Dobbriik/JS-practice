//Передача настроек модуля через замыкания

let config = {
	root: '#parent',
	type: 'p',
	amount: 5,
}
;(function ({ root, type, amount }) {
	let parent = document.querySelector(root)

	for (let i = 1; i <= amount; i++) {
		let elem = document.createElement(type)
		parent.append(elem)
	}
})(config)

// или так
;(function (root, type, amount) {
	let parent = document.querySelector(root)

	for (let i = 1; i <= amount; i++) {
		let elem = document.createElement(type)
		parent.append(elem)
	}
})('#parent', 'p', 1)

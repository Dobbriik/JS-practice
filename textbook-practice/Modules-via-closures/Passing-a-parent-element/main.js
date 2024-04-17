//Таким образом получится, что родительский элемент мы передаем в модуль снаружи и легко можем его поменять. А дочерние элементы являются внутренним делом модуля.

;(function (root) {
	let parent = document.querySelector(root)

	let div1 = parent.querySelector('#div1')
	let div2 = parent.querySelector('#div2')
	let div3 = parent.querySelector('#div3')

	let res = parent.querySelector('#res')
	let btn = parent.querySelector('#btn')

	btn.addEventListener('click', function () {
		let num1 = Number(div1.textContent)
		let num2 = Number(div2.textContent)
		let num3 = Number(div3.textContent)

		res.textContent = num1 + num2 + num3
	})
})('#parent')

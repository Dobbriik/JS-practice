//Дана кнопка и три инпута, в которые вводятся числа. По нажатию на кнопку выведите в консоль сумму введенных чисел. Реализуйте задачу с помощью модуля.

//Хорошей практикой считается не зашивать какие-то значения в модуль, а передавать их параметром самого модуля (то есть параметром вызывающейся на месте функции):

;(function (inp1, inp2, inp3, btn) {
	let input1 = document.querySelector(inp1)
	let input2 = document.querySelector(inp2)
	let input3 = document.querySelector(inp3)
	let btn1 = document.querySelector(btn)
	btn1.addEventListener('click', function () {
		let sum = +input1.value + +input2.value + +input3.value
		console.log(sum)
	})
})('#inp1', '#inp2', '#inp3', 'button')

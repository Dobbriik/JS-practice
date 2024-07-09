//Сохраните его в локальное хранилище. Затем сделайте 3 инпута и кнопку. Пусть в инпуты вводятся фамилия, имя и возраст. По нажатию на кнопку запишите нового юзера в конец сохраненного в хранилище массива.

let users = [
	{
		surn: 'surn1',
		name: 'name1',
		age: 31,
	},
	{
		surn: 'surn2',
		name: 'name2',
		age: 32,
	},
	{
		surn: 'surn',
		name: 'name3',
		age: 33,
	},
]

localStorage.setItem('users', JSON.stringify(users))

const inputs = document.querySelectorAll('input')
const btn = document.querySelector('button')

const usersArr = JSON.parse(localStorage.getItem('users'))
btn.addEventListener('click', function () {
	const [surn, name, age] = [...inputs].map(input => input.value)
	usersArr.push({
		surn: surn,
		name: name,
		age: age,
	})
	localStorage.setItem('users', JSON.stringify(usersArr))
})

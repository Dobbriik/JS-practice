let json = '[1, 2, 3, 4, 5]'

let arr = JSON.parse(json)
arr.push(6)

let res = JSON.stringify(arr)
console.log(res)

//Добавьте в конец строки еще одного юзера.
//Поменяйте имя второго юзера.

let jsonUsers = '["user1","user2","user3","user4","user5"]'

let arrUsers = JSON.parse(jsonUsers)
arrUsers[1] = 'user22'
arrUsers.push('users6')

let resJsonUsers = JSON.stringify(arrUsers)

console.log(resJsonUsers)

//Добавьте в эту строку еще одного работника.
let jsonDate = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`

let arrJsonDate = JSON.parse(jsonDate)

arrJsonDate.push({
	name: 'user4',
	age: 30,
	salary: 2500,
})

let resJsonDate = JSON.stringify(arrJsonDate)

console.log(arrJsonDate)

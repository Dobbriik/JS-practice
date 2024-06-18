//Преимуществом типа Symbol в качестве ключа объекта является то, что такие ключи не будут участвовать в переборе циклом.
let obj = { a: 1, b: 2, c: 3 }

let sym = Symbol()
obj[sym] = 'text'

for (let key in obj) {
	console.log(obj[key]) // 1, 2, 3
}
console.log(obj)

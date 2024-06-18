//С помощью метода Symbol.for можно создавать символы с именем. Эти символы будут сохранены в глобальный реестр символов и доступ к ним можно будет получить из любого места кода.

function func1() {
	let sym = Symbol.for('test')
	return sym
}

function func2() {
	let sym = Symbol.for('test')
	return sym
}

let sym1 = func1()
let sym2 = func2()

console.log(sym1 === sym2)

//Пусть у вас есть несколько объектов. Добавьте каждому из них ключ в виде символа с именем 'sum'. Сделайте в этом ключе функцию, которая будет возвращать сумму элементов объекта.

let obj1 = { a: 1, b: 2, c: 3 }
let obj2 = { a: 4, b: 5, c: 6 }

let sym = Symbol.for('sum')

let sum = function () {
	let sum = 0
	for (const key in this) {
		sum += this[key]
	}
	console.log(sum)
}

obj1[sym] = sum
obj2[sym] = sum

obj1[sym]()
obj2[sym]()

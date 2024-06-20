//Строки также имеют встроенный итератор. Давайте для примера переберем символы строки циклом:

for (let elem of 'abc') {
	console.log(elem) // 'a', 'b', 'c'
}

console.log([...'asd'])

// /Перебирите циклом цифры этого числа и найдите их сумму.

let string = '123452'

let sum = 0
for (const elem of string) {
	sum += Number(elem)
}

console.log(sum)

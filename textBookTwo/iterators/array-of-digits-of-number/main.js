let num = 12345

// let arr = [...num] // ошибка

let arrString = [...String(num)]
console.log(arrString) // ['1', '2', '3', '4', '5']

//У нас, однако, получился массив строк, а не чисел. Исправим проблему с помощью хитрого приема, используя метод map:

let arrNum = [...String(num)].map(Number)
console.log(arrNum) // [1, 2, 3, 4, 5]

//Дано число. Найдите сумму его цифр.

let numbers = 43513

let sum = 0

for (const iterator of [...String(numbers)].map(Number)) {
	sum += iterator
}

console.log(sum)

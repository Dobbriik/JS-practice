//Существует специальный метод Array.isArray, с помощью которого можно проверить переменную на то, содержит ли она настоящий массив или нет.

//Массив:
let test = [1, 2, 3]
let res = Array.isArray(test)

console.log(res) // выведет true

//Объект:
let test2 = { a: 1, b: 2, c: 3 }
let res2 = Array.isArray(test2)

console.log(res2) // выведет false

//Примитив:
let test3 = 'abcde'
let res3 = Array.isArray(test3)

console.log(res3) // выведет false

//Псевдомассив:

let test4 = document.querySelectorAll('p')
let res4 = Array.isArray(test4)

console.log(res4) // выведет false

//Переберите этот массив циклом и для каждого элемента проверьте, массив он или нет.
let test5 = [[1, 2, 3], { a: 1, b: 2, c: 3 }, [3, 4, 5], { x: 1, y: 2, z: 3 }]

for (const elem of test5) {
	console.log(Array.isArray(elem) + ' ' + elem)
}

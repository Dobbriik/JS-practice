//Преобразование в массив
let set = new Set([1, 2, 3])

//Можно преобразовать ее в массив, используя прием с деструктуриацией:
let arr = [...set]
console.log(arr)
//А можно воспользоваться методом Array.from:
let arrFrom = Array.from(set)
console.log(arrFrom)

console.log(set)

//Преобразование массива в Set

let testArr = [1, 2, 3, 4, 3]

let testSet = new Set(testArr)
console.log(testSet)

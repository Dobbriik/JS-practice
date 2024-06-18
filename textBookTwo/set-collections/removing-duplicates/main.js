let arr = [1, 2, 3, 1, 3, 4]

let set = new Set(arr)

console.log([...new Set(arr)])

//Напишите функцию, которая параметром будет принимать массив и возвращать этот массив без дублей.

function getArrNotDupl(arr) {
	return [...new Set(arr)]
}

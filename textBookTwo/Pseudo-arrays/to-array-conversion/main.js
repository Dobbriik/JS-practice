//Преобразование к массиву
let elems = document.querySelectorAll('p')

let arr = []

for (let elem of elems) {
	arr.push(elem)
}
console.log(arr)

let arr2 = [...elems]
console.log(arr2)

let arr3 = Array.from(elems)
console.log(arr3)

//С помощью метода slice получите все абзацы, кроме первого и последнего.

let arrNew = arr3.slice(1, -1)
console.log(arrNew)

arrNew.forEach(function (elem) {
	console.log(elem.textContent)
})

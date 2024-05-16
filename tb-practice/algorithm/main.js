//
function sum(arr) {
	if (arr.length === 1) {
		return arr[0]
	}
	return arr[0] + sum(arr.slice(1))
}

function count(arr) {
	if (arr.length === 1) {
		return 1
	}
	return 1 + count(arr.slice(1))
}

function find(list, num) {
	let mid = Math.floor(list.length / 2)
	if (list[mid] === num) {
		return
	}
}

let arr = sum([1, 1, 3])
let arrLength = count([1, 1, 31, 1, 31, 1, 3])

console.log()

let counter = 0

function quicSort(arr) {
	if (arr.length < 2) {
		counter++
		console.log(counter)
		return arr
	}
	counter++
	console.log(counter)
	let rand = Math.floor(Math.random() * arr.length)
	let pivot = arr[rand]
	arr.splice(rand, 1)
	let less = arr.filter(elem => elem <= pivot)
	let greater = arr.filter(elem => elem > pivot)

	return quicSort(less).concat([pivot]).concat(quicSort(greater))
}

function sort(arr) {
	let arr2 = []
}

function max(arr) {
	let arr2 = []
	if (arr.length == 2) {
		arr[0] > arr[1] ? arr2.push(arr[0]) : arr2.push(arr[1])
	}

	// for (let i = 0; i < arr.length - 1; i++) {
	// 	for (let j = 0; j < arr.length - 1; j++) {
	// 		let elem1 = arr[j]
	// 		if (arr[j] > arr[j + 1]) {
	// 			arr[j] = arr[j + 1]
	// 			arr[j + 1] = elem1
	// 		}
	// 	}
	// }
	return arr
}

let arrs = [5, 3, 8, 4, 2, 1, 7, 6]

// console.log(Math.floor(Math.random() * arrs.length))

let arrs2 = max(arrs)

console.log(arrs2)

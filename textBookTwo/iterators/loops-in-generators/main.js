//Внутри генераторов можно использовать циклы. При этом мы можем ставить циклы на паузу с помощью yield. Давайте посмотрим на примере. Будем ставить цикл на паузу каждую итерацию:

function* func(num) {
	for (let i = num; i > 1; i *= 2) {
		yield i
	}
}

let iter = func(5)

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

function* numFiba() {
	let first = 0
	yield first
	let second = 1
	yield second
	for (let i = first + second; i > 0; i = second + first) {
		first = second
		second = i
		yield i
	}
}

let fiba = numFiba()

console.log(fiba.next())
console.log(fiba.next())
console.log(fiba.next())
console.log(fiba.next())
console.log(fiba.next())
console.log(fiba.next())
console.log(fiba.next())
console.log(fiba.next())
console.log(fiba.next())
console.log(fiba.next())
console.log(fiba.next())
console.log(fiba.next())
console.log(fiba.next())
console.log(fiba.next())
console.log(fiba.next())

function fib(n) {
	if (n > 2) {
		n = n - 3
	}
	let count = 0
	let first = 1
	let second = 1
	for (let i = first + second; i > 0; i = first + second) {
		first = second
		second = i
		if (n === count) {
			return i
		}
		count++
	}
}

console.log(fib(3))

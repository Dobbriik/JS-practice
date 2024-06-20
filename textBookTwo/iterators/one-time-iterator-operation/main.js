function* func() {
	yield 1
	yield 2
	yield 3
}

let iter = func()

for (let elem of iter) {
	console.log(elem) // 1, 2, 3
}

for (let elem of iter) {
	console.log(elem) // не работает
}

//Для решения проблемы нужно для каждого нового цикла создавать свой итератор:
for (let elem of func()) {
	console.log(elem) // 1, 2, 3
}

for (let elem of func()) {
	console.log(elem) // 1, 2, 3
}

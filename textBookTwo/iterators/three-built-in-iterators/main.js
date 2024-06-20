//На самом деле каждый итерируемый объект содержит не один итератор, а три: values, keys и entries. Для каждого типа объектов по умолчанию применяется свой итератор. Для массивов - это values, а, например, для коллекции Map, это entries.

let map = new Map()
map.set('a', 1)
map.set('b', 2)
map.set('c', 3)

for (let elem of map) {
	console.log(elem) // ['a', 1], ['b', 2], ['c', 3]
}

for (let elem of map.keys()) {
	console.log(elem) // 'a', 'b', 'c'
}

for (let elem of map.values()) {
	console.log(elem) // 1, 2, 3
}

//Какой итератор по умолчанию действует в коллекции Set?

let set = new Set([1, 2, 3])

for (const iterator of set) {
	console.log(iterator)
}

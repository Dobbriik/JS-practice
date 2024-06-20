//Все итерируемые объекты имеют встроенный итератор keys, позволяющий перебирать ключи. Давайте проверим его на массиве:

let arr = ['a', 'b', 'c']

let iter = arr.keys()

for (let elem of iter) {
	console.log(elem) // 0, 1, 2
}

let map = new Map()

map.set('a', 1)
map.set('b', 2)
map.set('c', 3)

let iterMap = map.keys()

for (const iterator of iterMap) {
	console.log(iterator)
}

let set = new Set([1, 2, 3])

set.add(5)

let iterSet = set.keys()

for (const iterator of iterSet) {
	console.log(iterator)
}

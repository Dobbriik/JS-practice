//Все итерируемые объекты имеют встроенный итератор values, позволяющий перебирать значения. Давайте проверим его на коллекции Map:

let map = new Map()

map.set('a', 1)
map.set('b', 2)
map.set('c', 3)

let iter = map.values()

for (let elem of iter) {
	console.log(elem) // 1, 2, 3
}

let arr = [4, 5, 6]

let iterArr = arr.values()

for (const iterator of iterArr) {
	console.log(iterator)
}

let set = new Set([7, 8, 9])

let iterSet = set.values()

for (const iterator of set) {
	console.log(iterator)
}

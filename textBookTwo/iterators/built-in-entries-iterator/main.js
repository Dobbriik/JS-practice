//Все итерируемые объекты имеют встроенный итератор entries, позволяющий перебирать пары ключ-значение. Давайте проверим его на массиве:
let arr = ['a', 'b', 'c']

for (let entry of arr.entries()) {
	console.log(entry) // [0, 'a'], [1, 'b'], [2, 'c']
}

for (let [key, value] of arr.entries()) {
	console.log(key) // 0, 1, 2
	console.log(value) // 'a', 'b', 'c'
}

//Проверьте работу данного итератора на коллекции Map.

let map = new Map()

map.set('a', 1)
map.set('b', 2)
map.set('c', 3)

for (const [key, val] of map.entries()) {
	console.log(key)
	console.log(val)
}

//Проверьте работу данного итератора на коллекции Set.

let set = new Set(['10', 11, 12])

for (const iterator of set.entries()) {
	console.log(iterator)
}

//Проверьте работу данного итератора на коллекции NodeList.

let pars = document.querySelectorAll('p')

for (const iterator of pars.entries()) {
	console.log(iterator)
}

let map = new Map()

let arr1 = [1, 2]
let arr2 = [3, 4]

map.set(arr1, 'data1')
map.set(arr2, 'data2')

//Эту коллекцию можно перебрать с помощью цикла for-of:
for (let elem of map) {
	console.log(elem)
}

//Можно отделить ключи и значения с помощью деструктуризации:

for (let [key, elem] of map) {
	console.log(key)
	console.log(elem)
}

let map = new Map()

let arr1 = [1, 2]
let arr2 = [3, 4]

map.set(arr1, 'data1')
map.set(arr2, 'data2')

//Чтобы получить только ключи или только значения, существуют специальные методы. Для получения значений метод values:
let values = map.values()

//Аналогично с ключами:
let keys = map.keys()

//Существует также метод entries, возвращает набор пар ключ-значение:
let entries = map.entries()
console.log(entries)

//Пусть дана коллекция Map. Получите массив ее ключей и переберите их циклом for-of.
for (const key of keys) {
	console.log(key)
}

//Пусть дана коллекция Map. Получите массив ее элементов и переберите их циклом for-of.
for (const value of values) {
	console.log(value)
}

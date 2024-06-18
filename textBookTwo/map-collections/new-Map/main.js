//Коллекции Map представляют собой объекты, в которых в качестве ключей могут выступать как примитивы, так и объекты.
let map = new Map()

let arr1 = [1, 2]
let arr2 = [3, 4]

map.set(arr1, 'data1')
map.set(arr2, 'data2')

console.log(map.get(arr1))
console.log(map.get(arr2))

//Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции эти массивы, а значениями - какие-нибудь строки.

let newArr1 = [1, 2, 3]
let newArr2 = [1, 2, 3]
let newArr3 = [1, 2, 3]

let newMap = new Map()

newMap.set(newArr1, 'arr1')
newMap.set(newArr2, 'arr2')
newMap.set(newArr3, 'arr3')

//Пусть даны 3 объекта и 3 массива. Создайте коллекцию Map, сделайте ключами коллекции объекты, а значениями - соответствующие массивы.

let obj1 = { object1: 'object1' }
let obj2 = { object2: 'object2' }
let obj3 = { object3: 'object3' }

let array1 = ['array1']
let array2 = ['array2']
let array3 = ['array3']

let objMap = new Map()

objMap.set(obj1, array1)
objMap.set(obj2, array2)
objMap.set(obj3, array3)

console.log(objMap.get(obj1))
console.log(objMap.get(obj2))
console.log(objMap.get(obj3))

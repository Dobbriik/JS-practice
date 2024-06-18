let mapNew = new Map()
let arr1 = []
let arr2 = []
mapNew.set(arr1, 'test')
mapNew.set(arr2, 'test')

//Размер коллекции
console.log(mapNew.size)

//Проверить наличие ключа в коллекции можно с помощью метода has:
console.log(mapNew.has(arr1))

//Удалить элемент из коллекции можно с помощью метода delete:
mapNew.delete(arr1)

//Очистить всю коллекцию можно с помощью метода clear:
mapNew.clear()

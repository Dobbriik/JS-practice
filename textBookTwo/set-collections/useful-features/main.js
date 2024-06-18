//Размер коллекции
let set = new Set()

set.add(1)
set.add(2)
set.add(3)

console.log(set.size)

//Проверка наличия значения
console.log(set.has(1))

//Удаление элементов
set.delete(1)

//Очистка коллекции
set.clear()

//Создайте коллекцию Set с начальными значениями 1, 2 и 3. Выведите на экран количество элементов в коллекции.
//Проверьте наличие в коллекции элемента со значением 3, а затем элемента со значением 4.

let newSet = new Set([1, 2, 3, 3])

console.log(newSet.size)
console.log(newSet.has(3))
console.log(newSet.has(4))

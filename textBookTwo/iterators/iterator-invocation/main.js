//Теперь в этой переменной содержится объект с методом next. Этот метод будет возвращать объект с ключом value, содержащим значение элемента, и ключом done, содержащим информацию о том, закончился ли перебор или нет:
let obj = [1]

let func = obj[Symbol.iterator]()

console.log(func.next())
console.log(func.next())

//Получите итератор коллекции Map. Последовательно вызывайте его, пока элементы коллекции не закончатся.

let map = new Map()

map.set(1, '23')
map.set(21, '23')

let iter = map[Symbol.iterator]()

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

//Получите итератор коллекции NodeList. Последовательно вызывайте его, пока элементы коллекции не закончатся.

let ps = document.querySelectorAll('p')
let iterP = ps[Symbol.iterator]()

console.log(iterP.next())
console.log(iterP.next())
console.log(iterP.next())
console.log(iterP.next())

let child = document.body.children
let iterB = child[Symbol.iterator]()

console.log(iterB.next())
console.log(iterB.next())
console.log(iterB.next())
console.log(iterB.next())
console.log(iterB.next())

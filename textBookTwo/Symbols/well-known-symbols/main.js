//Существуют специальные встроенные символы, которые используются JavaScript в служебных целях. Такие символы называются well-known symbols (хорошо известные символы).

let arr = [1, 2, 3]
let func = arr[Symbol.iterator]()
console.log(func)

let map = new Map()

map.set('asd', 'text1')
map.set(2, 'text2')
map.set(3, 'text3')

let func2 = map[Symbol.iterator]()
console.log(func2)

let set = new Set([1, 2, 3])

let func3 = set[Symbol.iterator]()
console.log(func3)

let obj = { a: 1, b: 2, c: 3 }

let sym = Symbol()
obj[sym] = 'text'

console.log(obj)

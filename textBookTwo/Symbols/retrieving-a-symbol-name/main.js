//Имея переменную с символом, можно получить его имя в глобальном реестре. Это делается с помощью метода Symbol.keyFor.
let sym = Symbol.for('test')
let sym1 = Symbol.for('test1')
let sym2 = Symbol.for('test2')

let key = Symbol.keyFor(sym)
console.log(key) // выведет 'test'

console.log(Symbol.keyFor(sym1))
console.log(Symbol.keyFor(sym2))

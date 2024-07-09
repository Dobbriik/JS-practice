//Каждая запись в локальном хранилище имеет свой номер. По номеру можно получить ключ этой записи:
let key = localStorage.key(0)
let key2 = localStorage.key(1)
let val = localStorage.getItem(key)
let val2 = localStorage.getItem(key2)

console.log(key)
console.log(val)
console.log(val2)

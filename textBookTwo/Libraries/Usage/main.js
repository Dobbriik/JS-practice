// UMD просто подключить, ESM через импорт
console.log(_)

let res = _.chunk(['a', 'b', 'c', 'd'], 2)
console.log([
	['a', 'b'],
	['c', 'd'],
])
// console.log(res)

const arr = [1, 2, 3, 4, 5]

console.log(_.first(arr, [2]))

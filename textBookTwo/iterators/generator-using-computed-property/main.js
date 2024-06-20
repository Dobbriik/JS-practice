//На самом деле можно переписать наш код по-другому через вычисляемое свойство:
let obj = {
	a: 1,
	b: 2,
	c: 3,
	[Symbol.iterator]: function* () {
		for (const key in this) {
			yield { key: key, val: this[key] }
		}
	},
}

for (const iterator of obj) {
	console.log(iterator)
}

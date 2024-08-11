let paramsString = 'a=1&b=2&c=3'
let searchParams = new URLSearchParams(paramsString)
let resGet = searchParams.get('a')
let resHas = searchParams.has('a')
let resString = searchParams.toString()

searchParams.set('b', 'x')
searchParams.set('d', '4')
searchParams.append('a', '4')
searchParams.delete('c')
console.log(searchParams, resGet, resHas, resString)

let resAll = searchParams.getAll('a')
console.log(resAll)

for (let p of searchParams) {
	console.log(p)
}

let paramsStringNew = 'test1=param1&test2=param2&test3=param3'
let newSearchParams = new URLSearchParams(paramsStringNew)
newSearchParams.append('test3', 'param4')
newSearchParams.delete('test2')
newSearchParams.set('test1', 'param4')
console.log(newSearchParams)

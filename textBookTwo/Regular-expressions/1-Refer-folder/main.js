//
let str = 'ahb acb aeb aeeb adcb axeb'
let elem = str.replace(/a..b/g)
console.log(elem)

let str1 = 'a.a a..a aba abba abbba abca abea'
console.log(str1.replace(/a(\.)a/g))

let str2 = '[abc] {abc} abc (abc) [abc]'
console.log(str2.replace(/\[.+?\]/g, '[!]'))

let str3 = 'aaa aba accca azzza wwwwa'
console.log(str3.replace(/a[^a ]{1,}a/g, '!'))

let str4 = '2025-12-31 12:59:59'

console.log(str4.split(/[- :]/))

let str5 = 'asxca buzxb csgd'
let res2 = str5.replace(/([a-z])[a-z]+\1/g, '!')
console.log(res2)

let str6 = 'aaxca buzxb csgd'
let res = str6.replace(/(?<letter>[a-z]).+\k<letter>/g, '!')

console.log(res)

let str11 = 'abc def'
let reg11 = /[a-z]+/g
let res11 = str11.match(reg11)
console.log(res11)

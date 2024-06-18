let parent = document.querySelector('div')
let elems1 = document.getElementsByTagName('p') // HTMLCollection
let elems2 = document.querySelectorAll('p') // NodeList
let children = parent.children
let childNodes = parent.childNodes

let p = document.createElement('p')
let p2 = document.createElement('p')
parent.append(p, p2)

console.log(elems1)
console.log(elems2)
console.log(children)
console.log(childNodes)

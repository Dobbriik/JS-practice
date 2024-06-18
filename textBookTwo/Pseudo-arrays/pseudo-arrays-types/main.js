//Псевдомассивы бывают различных типов. Тип зависит от способа получения.

let elems = document.querySelectorAll('p')
console.log(elems) // NodeList

let elems2 = document.getElementsByTagName('p')
console.log(elems2) // HTMLCollection

let par = document.querySelector('#par')
console.log(par)
console.log(par.childNodes) // NodeList
console.log(par.children) // HTMLCollection
console.log(document.getElementsByClassName('par')) // HTMLCollection

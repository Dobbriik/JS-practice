//Проверьте, является ли этот элемент элементом с классом www.

let div = document.querySelector('#elem')
console.log(div.matches('.www'))

//Дан элемент. Проверьте, является ли этот элемент абзацем.

console.log(div.matches('p'))

//Даны две переменные elem1 и elem2, содержащие два элемента:

let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')

console.log(elem1.contains(elem2))

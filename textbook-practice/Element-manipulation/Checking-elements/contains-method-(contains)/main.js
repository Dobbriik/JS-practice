//Метод contains позволяет проверить, содержит ли один элемент внутри себя другой. Параметром метода передается элемент, который будет проверяться на то, что он находится внутри элемента, к которому применился метод.

// родитель.contains(элемент);

//Проверим, находится ли абзац #child в блоке #parent:

let parent = document.querySelector('#parent')
let child = document.querySelector('#child')

let contains = parent.contains(child)
console.log(contains) // true

//

let parent1 = document.querySelector('#parent1')
let child1 = document.querySelector('#child1')

let contains1 = parent1.contains(child1)
console.log(contains1) // false

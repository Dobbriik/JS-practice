//Метод insertBefore позволяет вставить элемент перед другим элементом. Чаще всего используется после создания элемента с помощью createElement. Метод применяется к родителю того элемента, перед которым произойдет вставка.

//родитель.insertBefore(элемент, перед кем вставить);

let parent = document.querySelector('#parent')
let before = document.querySelector('#before')

let p = document.createElement('p')
p.textContent = '!'

parent.insertBefore(p, before)

//Добавим абзац в начало элемента #parent. Для этого вставим наш абзац перед первым потомком #parent. Этого потомка можно найти с помощью firstElementChild:

let p2 = document.createElement('p')
p2.textContent = '!2'

parent.insertBefore(p2, parent.firstElementChild)

//При передаче вторым параметром null метод insertBefore срабатывает как appendChild. В то же время, если в элементе нет дочерних элементов, firstElementChild возвращает null. Следовательно, добавлять в начало элемента можно даже тогда, когда в нем нет дочерних элементов:

let p3 = document.createElement('p')
p3.textContent = '!3'

parent.insertBefore(p3, parent.firstChild)

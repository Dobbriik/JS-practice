//Метод prepend позволяет вставить в начало какого-либо элемента другой элемент. Параметром метод принимает элемент, как правило созданный через createElement, либо строку. Можно добавить сразу несколько элементов или строк, перечислив их через запятую.

//родитель.prepend(элемент или строка);

let parent = document.querySelector('#parent')

let p = document.createElement('p')
p.textContent = '!'

parent.prepend(p)

// Поместим сразу несколько абзацев в начало блока #parent:

let p1 = document.createElement('p')
p1.textContent = 'a'

let p2 = document.createElement('p')
p2.textContent = 'b'

parent.prepend(p1, p2)

//Давайте в качестве параметра метода используем строку:
parent.prepend('!')

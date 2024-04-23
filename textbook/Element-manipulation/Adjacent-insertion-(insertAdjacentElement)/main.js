//Метод insertAdjacentElement позволяет вставить элемент в любое место страницы. Чаще всего используется после создания элемента с помощью createElement. Код вставляется относительно опорного элемента. Можно сделать вставку перед опорным элементом (способ вставки beforeBegin), после него (способ вставки afterEnd), а также в начало (способ вставки afterBegin) или в конец (способ вставки beforeEnd) опорного элемента.

//опорный элемент.insertAdjacentElement(способ вставки, код для вставки);

//Способ beforeBegin
//Пусть опорный элемент - это элемент #target. Вставим перед ним новый абзац:

let p = document.createElement('p')
p.textContent = '!1 beforeBegin'

let target = document.querySelector('#target')
target.insertAdjacentElement('beforeBegin', p)

//Способ afterEnd
//А теперь вставим новый абзац после опорного элемента:

let p2 = document.createElement('p')
p2.textContent = '!2 afterEnd'

target.insertAdjacentElement('afterEnd', p2)

//Способ afterBegin

let p3 = document.createElement('p')
p3.textContent = '!3 afterBegin'

target.insertAdjacentElement('afterBegin', p3)

//Способ beforeEnd

let p4 = document.createElement('p')
p4.textContent = '!4 beforeEnd'

target.insertAdjacentElement('beforeEnd', p4)

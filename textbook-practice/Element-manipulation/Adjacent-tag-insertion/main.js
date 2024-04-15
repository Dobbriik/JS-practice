//Метод insertAdjacentHTML позволяет вставить строку HTML кода в любое место страницы. Код вставляется относительно опорного элемента. Можно сделать вставку перед опорным элементом (способ вставки 'beforeBegin'), после него (способ вставки 'afterEnd'), а также в начало (способ вставки 'afterBegin') или в конец (способ вставки 'beforeEnd') опорного элемента.

//опорный элемент.insertAdjacentHTML(способ вставки, код для вставки);

let target = document.querySelector('#target')
target.insertAdjacentHTML('beforeBegin', '<p>!</p>')

//Всё так же как для  insertAdjacentElement только html форматом после запятой.

//Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.

let select = document.querySelector('#select')
let option = select.lastElementChild
option.selected = true

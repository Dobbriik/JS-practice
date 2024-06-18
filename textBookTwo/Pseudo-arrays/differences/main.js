//Отличия от массивов
//У них нет методов массивов, таких как map, join, slice.
let elems = document.querySelectorAll('p')

//console.log(elems.slice(1, 3)) // будет ошибка
//console.log(elems.join('')) // будет ошибка

// for (const elem of elems) { // будет ошибка
// 	elem.textContent += '!'
// }

// elems.map(function (elem) { // будет ошибка
// 	elem.textContent += '!'
// })

// works
elems.forEach(function (elem) {
	elem.textContent += '!'
})

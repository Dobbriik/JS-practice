//Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.

// let tds = document.querySelectorAll('#table td');

// for (let td of tds) {
// 	td.textContent = '!';
// }

let table = document.querySelectorAll('table td')

let btn = document.querySelector('button')

btn.addEventListener('click', function () {
	for (const td of table) {
		td.textContent *= 2
	}
})

//
// 'use strict'

// let elem = document.querySelector('#elem')
// elem.addEventListener('blur', parent)

// function parent() {
// 	console.log(this.value) // выведет 'text'

// 	let self = this // запишем this в любую переменную, например, в self

// 	function child() {
// 		console.log(self.value) // выведет 'text'
// 	}
// 	child()
// }

//Автор кода хотел, чтобы по потери фокуса на экран вывелся квадрат числа из value инпута. Однако, почему-то при потери фокуса в консоль выдается ошибка. Исправьте ошибку автора кода. Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка.

// "use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
// 	alert( square() );

// 	function square() {
// 		return this.value * this.value;
// 	}
// }

'use strict'

let elem = document.querySelector('#elem')
elem.addEventListener('blur', func)

function func() {
	let newThis = this
	alert(square())

	function square() {
		return newThis.value * newThis.value
	}
}

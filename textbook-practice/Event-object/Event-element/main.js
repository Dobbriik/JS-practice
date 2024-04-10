//
// let elem = document.querySelector('#elem')

// elem.addEventListener('click', function (event) {
// 	console.log(event.target) // выведет наш абзац
// 	console.log(this) // выведет наш див
// })

//Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - выведите информацию об этом в консоль.

let elem1 = document.querySelector('#elem1')

elem1.addEventListener('click', function (event1) {
	if (event1.target.tagName === 'UL') {
		console.log(event1.target.tagName)
	} else if (event1.target.tagName === 'LI') {
		event1.target.textContent += '!'
	}
	// console.log(event1.target.tagName) // выведет наш абзац
	// console.log(elem1.tagName)
	// console.log(this) // выведет наш див
})

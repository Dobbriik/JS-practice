//
let i = 0

// function timer() {
// 	setTimeout(function () {
// 		console.log(++i)

// 		if (i < 10) {
// 			// запускаем, только если счетчик меньше 10
// 			timer()
// 		}
// 	}, 1000)
// }
// timer()

//Выведите в консоль число 0. Через секунду выведите число 1, через две секунды выведите число 2, через 3 секунды выведите число 3. И так далее до бесконечности.

function timer() {
	setTimeout(function () {
		console.log(i++)
		timer()
	}, 1000)
}
timer()

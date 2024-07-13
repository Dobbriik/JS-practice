//Сделайте так, чтобы функция make принимала два параметра: номер одного и другого элемента массива. Пусть результатом асинхронной операции эта функция возвращает сумму указанных элементов.

let sum = 0

function getSum([...num], callback) {
	setTimeout(function () {
		const arr = [1, 2, 3, 4]
		callback(num.map(elem => arr[elem]))
	}, 1000)
}

getSum([0, 1], function (arr) {
	sum = arr.reduce((acc, elem) => acc + elem, 0)
	return sum
})

console.log(sum)
setTimeout(function () {
	console.log(sum)
}, 2000)

//Сделайте промис, внутри которого будет задержка в 5 секунд, после которой промис должен выполнится, своим результатом вернув какой-нибудь текст. Выведите этот текст на экран.

function imageLoad(img, callback) {
	const image = document.createElement('img')
	image.src = img
	image.addEventListener('load', function () {
		callback(image)
	})
	image.addEventListener('error', function () {
		callback(image, this)
	})
}

// let promises = new Promise(function (resolve, img) {
// 	const image = document.createElement('img')
// 	image.src = img
// 	image.addEventListener('load', function () {
// 		resolve(image)
// 	})
// 	image.addEventListener('error', function () {
// 		resolve(image, this)
// 	})
// })

// console.log(promises.then())

// const paths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (const path of paths) {
// 	promises.then(function (img, error) {
// 		if (!error) {
// 			document.body.appendChild(img)
// 		} else {
// 			console.log('ошибка')
// 		}
// 	}, `./img/${path}.jpg`)
// }

let arr = [2, 3]

const promiseArr = new Promise(function (resolve) {
	for (const elem of arr) {
		setTimeout(function () {
			resolve(elem)
		}, 1000)
	}
})
for (const iterator of arr) {
	promiseArr.then(function (res) {
		console.log(res)
	})
}

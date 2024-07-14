//Напишите код, который дождется окончания загрузки всех картинок, а затем добавит их в цикле в конец body.
function getImgPromise(path) {
	return new Promise(function (resole, reject) {
		const img = document.createElement('img')
		img.src = path
		img.addEventListener('load', function () {
			resole(this)
		})
		img.addEventListener('error', function () {
			reject('error')
		})
	})
}

const arrPath = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const imgPromise = []

for (const path of arrPath) {
	imgPromise.push(getImgPromise(`./img/${path}.jpg`))
}

Promise.all(imgPromise)
	.then(function (img) {
		img.forEach(elem => document.body.appendChild(elem))
	})
	.catch(function (error) {
		console.log(error)
	})

//Выполните его промисификацию.
// window.addEventListener('DOMContentLoaded', function () {
// 	console.log('dom загружен')
// })

function promiseWindow() {
	return new Promise(function (resolve) {
		window.addEventListener('DOMContentLoaded', function () {
			resolve('dom загружен')
		})
	})
}
promiseWindow().then(function (res) {
	console.log(res)
})

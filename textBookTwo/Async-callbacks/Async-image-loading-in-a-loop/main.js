//И решения в данной ситуации нет: невозможно запустить цикл, использовать внутри него асинхронную функцию, а потом поймать момент завершения всех функций цикла. Либо вам не нужно ловить этот момент и приведенный выше код вам подойдет либо добро пожаловать в callback hell.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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

for (let path of arr) {
	console.log(path)
	imageLoad(`./img/${path}.jpg`, function (image, err) {
		document.body.append(image)
	})
}

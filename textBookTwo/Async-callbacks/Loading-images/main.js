//Реализуйте функцию loadImage.

function imageLoad(img, callback) {
	const image = document.createElement('img')
	image.src = img
	image.addEventListener('load', function () {
		console.log(this)
		callback(image)
	})
	image.addEventListener('error', function () {
		callback(image, this)
	})
}

imageLoad('img.jspg', function (img, error) {
	if (!error) {
		document.body.appendChild(img)
	} else {
		console.log('ошибка', error.name)
	}
})

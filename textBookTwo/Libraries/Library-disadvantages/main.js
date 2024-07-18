async function sliderImg() {
	const arrPath = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	let arrImg = []
	function getImg(path) {
		return new Promise(function (resolve, reject) {
			const img = document.createElement('img')
			img.src = `./img/${path}.jpg`
			img.addEventListener('load', function () {
				resolve(this)
			})
			img.addEventListener('error', function () {
				reject('error')
			})
		})
	}

	for (const path of arrPath) {
		arrImg.push(getImg(path))
	}

	const arrImgs = await Promise.all(arrImg).then(function (imgs) {
		for (const img of imgs) {
			const div = document.createElement('div')
			div.classList = 'wrapper'
			div.appendChild(img)
			document.querySelector('#slider').appendChild(div)
		}
	})

	$(document).ready(function () {
		$('.slider').slick({
			dots: true,
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear',
		})
	})
}

sliderImg()

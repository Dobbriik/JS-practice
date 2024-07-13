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

// img.src = './img/1.jpg'

imageLoad('./img/1.jpg', function (img, error1) {
	if (!error1) {
		document.body.appendChild(img)
	} else {
		console.log('ошибка')
	}
	imageLoad('./img/2.jpg', function (img2, error2) {
		if (!error2) {
			document.body.appendChild(img2)
		} else {
			console.log('ошибка')
		}
		imageLoad('./img/3.jpg', function (img3, error3) {
			if (!error3) {
				document.body.appendChild(img3)
			} else {
				console.log('ошибка')
			}
			imageLoad('./img/4.jpg', function (img4, error4) {
				if (!error4) {
					document.body.appendChild(img4)
				} else {
					console.log('ошибка')
				}
				imageLoad('./img/5.jpg', function (img5, error5) {
					if (!error5) {
						document.body.appendChild(img5)
					} else {
						console.log('ошибка')
					}
					imageLoad('./img/6.jpg', function (img6, error6) {
						if (!error6) {
							document.body.appendChild(img6)
						} else {
							console.log('ошибка')
						}
						imageLoad('./img/7.jpg', function (img7, error7) {
							if (!error7) {
								document.body.appendChild(img7)
							} else {
								console.log('ошибка')
							}
							imageLoad('./img/8.jpg', function (img8, error8) {
								if (!error8) {
									document.body.appendChild(img8)
								} else {
									console.log('ошибка')
								}
								imageLoad('./img/9.jpg', function (img9, error9) {
									if (!error9) {
										document.body.appendChild(img9)
									} else {
										console.log('ошибка')
									}
									imageLoad('./img/10.jpg', function (img10, error10) {
										if (!error10) {
											document.body.appendChild(img10)
											console.log('картинки загружены')
										} else {
											console.log('ошибка')
										}
									})
								})
							})
						})
					})
				})
			})
		})
	})
})

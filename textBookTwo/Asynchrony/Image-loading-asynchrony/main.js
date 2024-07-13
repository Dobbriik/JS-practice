//Сделайте кнопку, по нажатию на которую будет загружаться картинка. Покажите картинку, когда она будет загружена. Выведите сообщение в случае проблем с загрузкой картинки.
const image = document.createElement('img')
const btn = document.createElement('button')
btn.textContent = 'add ing'
document.body.appendChild(btn)

btn.addEventListener('click', function () {
	image.src = 'image.jpgs'
})

image.addEventListener('load', function () {
	document.body.appendChild(image)
})

image.addEventListener('error', function () {
	console.log('ошибка загрузки картинки')
})

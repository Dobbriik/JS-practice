// Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.
// Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.
// Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.

let elem = document.querySelector('#elem')
let btnOpen = document.querySelector('.btnOpen')
let btnBlock = document.querySelector('.btnBlock')
let info = document.querySelector('.info')
elem.disabled = true

btnOpen.addEventListener('click', function () {
	elem.disabled = false
})

btnBlock.addEventListener('click', function () {
	elem.disabled = true
})

info.addEventListener('click', function () {
	console.log(elem.disabled)
})

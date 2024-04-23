//Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном.

//Модифицируйте предыдущую задачу так, чтобы по нажатию на активированный пункт списка активация с него снималась.

let lis = document.querySelectorAll('ul li')
for (const li of lis) {
	li.addEventListener('click', function () {
		li.classList.toggle('bgc')
	})
}

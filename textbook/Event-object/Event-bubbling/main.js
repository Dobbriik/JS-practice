//
//Нажмите теперь на самый внутренний красный блок - и вы увидите, как событие сначала сработает в красном блоке, потом в голубом, потом в зеленом. И это логично, ведь кликая на внутренний блок, вы одновременно кликаете на все внешние.

//То есть получается, что когда вы кликаете на самый внутренний блок, событие клика возникает сначала в нем, затем срабатывает в его родителе, в родителе его родителя и так далее, пока не дойдет до самого верха.

//Такое поведение называется всплытием (англ. bubbling) событий - по аналогии со всплытием пузырька воздуха со дна. Так же, как и пузырек, наше событие как будто выплывает наверх, каждый раз срабатывая на более высоких блоках.

let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')
let elem3 = document.querySelector('#elem3')

elem1.addEventListener('mouseup', function () {
	alert('зеленый')
})
elem2.addEventListener('mouseup', function () {
	alert('голубой')
})
elem3.addEventListener('mouseup', function () {
	alert('красный')
})

console.log('object')

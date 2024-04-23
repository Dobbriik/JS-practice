//Свойство event.clientX содержит в себе координаты курсора мыши по оси X. Для определения координат есть также свойства event.clientY, event.pageX, event.pageY. Давайте посмотрим разницу между clientX/clientY и pageX/pageY.

//Как работают clientX и clientY: если у вас есть окно 1000 на 1000 пикселей, и мышь находится в центре, то clientX и clientY будут оба равны 500. Если вы затем прокрутите страницу по горизонтали или вертикали, не двигая курсор, то значения clientX и clientY не изменятся, так как отсчитываются относительно окна, а не документа.

//Как работают pageX и pageY: если у вас есть окно 1000 на 1000 пикселей, и курсор находится в центре, то pageX и pageY будут равны 500. Если вы затем прокрутите страницу на 250 пикселей вниз, то pageY станет равным 750. Таким образом pageX и pageY содержат координаты события с учетом прокрутки.

let elem = document.getElementById('elem')

document.addEventListener('mousemove', function (event) {
	elem.innerHTML = event.clientX + ' : ' + event.clientY
})

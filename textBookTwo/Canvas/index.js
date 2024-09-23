//1
let canvas1 = document.querySelector('#one').getContext('2d')

//2
let canvas2 = document.querySelector('#two').getContext('2d')

canvas2.beginPath() // начинаем путь рисования
canvas2.moveTo(50, 50) // стартовая координата (x,y)
canvas2.lineTo(150, 50) // до куда рисовать (x,y)
canvas2.stroke() // подтвердить рисование

//3 Нарисуем квадратик

let canvas3 = document.querySelector('#three').getContext('2d')

canvas3.beginPath()
canvas3.moveTo(50, 50)
canvas3.lineTo(150, 50)
canvas3.lineTo(150, 150)
canvas3.lineTo(50, 150)
canvas3.closePath() //Замыкание фигур
canvas3.stroke()

//Закрашивание фигур

let canvas4 = document.querySelector('#four').getContext('2d')

canvas4.beginPath()
canvas4.moveTo(50, 50)
canvas4.lineTo(100, 100)
canvas4.lineTo(150, 50)
//canvas4.lineTo(50, 50); - этот шаг опускаем
//canvas4.closePath(); - и этот тоже
canvas4.fill()

//линия
let canvasTaskOne = document.querySelector('#taskOne').getContext('2d')
let swapBtn = document.querySelector('#swap')
let arrRender = []
let counter = 0
swapBtn.addEventListener('click', function () {
	canvasTaskOne.clearRect(
		0,
		0,
		canvasTaskOne.canvas.width,
		canvasTaskOne.canvas.height
	)
	arrRender[counter++](canvasTaskOne)
	if (counter >= arrRender.length) {
		counter = 0
	}
})

arrRender.push(canvas => {
	canvas.beginPath()
	canvas.moveTo(50, 50)
	canvas.lineTo(150, 50)
	canvas.stroke()
})

arrRender.push(canvas => {
	canvas.beginPath()
	canvas.moveTo(50, 50)
	canvas.lineTo(50, 150)
	canvas.stroke()
})

arrRender.push(canvas => {
	canvas.beginPath()
	canvas.moveTo(50, 50)
	canvas.lineTo(150, 150)
	canvas.stroke()

	canvas.beginPath()
	canvas.moveTo(150, 50)
	canvas.lineTo(50, 150)
	canvas.stroke()
})

arrRender.push(canvas => {
	canvas.beginPath()
	canvas.moveTo(50, 50)
	canvas.lineTo(150, 50)
	canvas.lineTo(150, 150)
	canvas.lineTo(50, 150)
	canvas.closePath()
	canvas.stroke()
})

arrRender.push(canvas => {
	canvas.beginPath()
	canvas.moveTo(50, 150)
	canvas.lineTo(150, 150)
	canvas.lineTo(100, 100)
	canvas.closePath()
	canvas.stroke()
})

arrRender.push(canvas => {
	canvas.beginPath()
	canvas.moveTo(50, 50)
	canvas.lineTo(150, 50)
	canvas.stroke()

	canvas.beginPath()
	canvas.moveTo(125, 25)
	canvas.lineTo(150, 50)
	canvas.lineTo(125, 75)
	canvas.stroke()
})

arrRender.push(canvas => {
	canvas.beginPath()
	canvas.moveTo(50, 50)
	canvas.lineTo(150, 50)
	canvas.lineTo(150, 150)
	canvas.lineTo(50, 150)
	canvas.fill()
})

arrRender.push(canvas => {
	canvas.beginPath()
	canvas.moveTo(50, 150)
	canvas.lineTo(150, 150)
	canvas.lineTo(100, 50)
	canvas.fill()
})
//Рисование прямоугольников через canvas на JavaScript
//Метод strokeRect
let strokeRects = document.querySelector('#strokeRect').getContext('2d')
strokeRects.strokeRect(50, 50, 100, 75)
// Метод fillRect
//Метод fillRect(x, y, ширина, высота) работает также, как и strokeRect, только рисует закрашенный прямоугольник. Посмотрим на примере:
//ctx.fillRect(50, 50, 100, 75);

//Метод rect
//Следующий метод rect(x, y, ширина, высота) также рисует прямоугольник. Но видимым этот прямоугольник станет, только если применить метод stroke или fill. В первом случае будет контур, а во втором - фигура.
//ctx.rect(50, 50, 100, 75);
//ctx.stroke();

//Метод clearRect
//Следующий метод clearRect(x, y, ширина, высота) работает как ластик, очищая прямоугольную область и делая содержимое совершенно прозрачным.

//ctx.fillRect(50, 50, 100, 100);
//ctx.clearRect(75, 75, 50, 50)

//Рисование окружностей через canvas на JavaScript
//Следующий метод arc рисует дугу с центром в некоторой точке. Он принимает следующие параметры: x, y, радиус r, начальный угол startAngle, конечный угол endAngle, рисовать по или против часовой стрелки direction.

let circle = document.querySelector('#circle').getContext('2d')

circle.arc(100, 100, 75, 0, getRadians(360))
circle.stroke()
function getRadians(degrees) {
	return (Math.PI / 180) * degrees
}

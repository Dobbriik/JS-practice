import http from 'http'

//Поменяйте код ответа на 404. В качестве текста страницы выведите текст о том, что страница не найдена.
function responseServer() {
	http
		.createServer((request, response) => {
			response.statusCode = 200
			response.write('404 Page not founds')
			response.end()
		})
		.listen(3000)
}

//HTTP заголовки
function header() {
	http
		.createServer((request, response) => {
			response.setHeader('Cache-Control', 'no-cache')
			response.statusCode = 200
			response.write('hello world again')
			response.end()
		})
		.listen(3000)
}

//Отправка HTML

function getTime() {
	const now = new Date()
	let minutes = now.getMinutes()
	if (minutes < 10) {
		minutes = `0${minutes}`
	}
	return `${now.getHours()}:${now.getHours()}:${now.getSeconds()}`
}

function responseHtml() {
	http
		.createServer((request, response) => {
			response.setHeader('Content-Type', 'text/html')
			response.statusCode = 200
			response.write(`<b>${getTime()}</b>`)
			response.end()
		})
		.listen(3000)
}

//Код ответа

function simplify() {
	http
		.createServer((request, response) => {
			response.writeHead(404, 'Content-Type', 'text/plain')
			response.write('page not found')
			response.end()
		})
		.listen(3000)
}

function simplifyTwo() {
	http
		.createServer((request, response) => {
			response.writeHead(200, {
				'Content-Language': 'ru',
				'Content-Type': 'text/html',
			})
			response.write('{Hello}')
			response.end()
		})
		.listen(3000)
}
simplifyTwo()

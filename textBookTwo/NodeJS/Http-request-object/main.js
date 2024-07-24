import http from 'http'
//Пообращайтесь к серверу с различными URL. Посмотрите, что будет выводится в консоль в этом случае.
//Выведите в консоль содержимое заголовка host.
http
	.createServer((request, response) => {
		console.log(request.url)
		// console.log(request.method)
		console.log(request.headers.host)
		// console.log(request.host)

		response.writeHead(200, { 'Content-Type': 'text/html' })
		response.write('text')
		response.end()
	})
	.listen(3000)

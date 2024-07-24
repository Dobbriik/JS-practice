import http, { request } from 'http'

function createNewServer() {
	http
		.createServer((request, response) => {
			response.write('Hello world')
			response.end()
		})
		.listen(3000)
}

createNewServer()

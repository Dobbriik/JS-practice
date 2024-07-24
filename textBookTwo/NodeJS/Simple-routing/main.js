import http from 'http'

function routing() {
	http
		.createServer((request, response) => {
			if (request.url != '/favicon.ico') {
				let text = '0'
				const status = 200
				switch (request.url) {
					case '/page1':
						text = '1'
						break
					case '/page2':
						text = '2'
						break
					case '/page3':
						text = '3'
						break
				}
				response.writeHead(200, { 'Content-Type': 'text/html' })
				response.write(text)
				response.end()
			}
		})
		.listen(2000)
}

//Дан объект с URL-лами и соответствующими им текстами страниц:

let obj = {
	'/page1': 'file1.html',
	'/page2': 'file2.html',
	'/page3': 'file3.html',
}

function createServer(obgUrl) {
	http
		.createServer((request, response) => {
			if (request.url != '/favicon.ico') {
				let text = obgUrl[request.url]
				console.log(text)
				let status = 200
				if (!text) {
					text = 'shit happens'
					status = 404
				}
				response.writeHead(status, { 'Content-type': 'text/htm' })
				response.write(text)
				response.end()
			}
		})
		.listen(3000)
}
createServer(obj)

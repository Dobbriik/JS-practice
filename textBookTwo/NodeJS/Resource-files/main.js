import http from 'http'
import fs from 'fs'

//Создайте файл styles.css. Отдайте его по соответствующему запросу. Не забудьте правильно указать тип данных.

//Создайте файл script.js. Отдайте его по соответствующему запросу. Не забудьте правильно указать тип данных.

//Разместите у себя файл с фавиконкой, назвав его favicon.ico. Уберите в вашем коде условие для блокировки двойного запроса, а вместо этого отдавайте корректную фавиконку.

function createRouting(rout, Property) {
	const objUrlPath = {
		'/favicon.ico': { path: './src/favicon.ico', type: 'img/ico' },
		'/src/script.js': { path: './src/script.js', type: 'text/js' },
		'/src/style.css': { path: './src/style.css', type: 'text/css' },
		'/index': { path: './index.html', type: 'text/html' },
	}
	return objUrlPath[rout][Property]
}

function newServer() {
	http
		.createServer((request, response) => {
			async function getFile() {
				let status = 200
				let data
				let type
				try {
					const url = request.url
					const pathRes = createRouting(url, 'path')
					const typeRes = createRouting(url, 'type')
					data = await fs.promises.readFile(`${pathRes}`)
					type = typeRes
				} catch (error) {
					status = 404
					data = 'Pizdos'
					type = 'text/html'
				}
				response.writeHead(status, { 'Content-type': type })
				response.write(data)
				response.end()
			}
			getFile()
		})
		.listen(2000)
}

newServer()
//Скопируйте приведенный код HTML страницы и разместите его в файле. Отдайте этот файл браузеру по соответствующему запросу. Сделайте так, чтобы браузер получил запрошенные им файлы ресурсов, на которые ссылается наша HTML страница.

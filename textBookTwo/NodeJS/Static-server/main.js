import http from 'http'
import fs from 'fs'
import { getPath } from './func/getPath.js'
import { getMimeType } from './func/getMimeType.js'

//Сделайте сайт о вашем городе. Пусть сайт состоит из 6-ти HTML страниц. К этим страницам должен быть подключен общий CSS файл, общий JavaScript файл, добавлены картинки. На каждой странице должна быть менюшка, с помощью которой можно будет перемещаться по страницам сайта.

function createSeverodvinskServer() {
	http
		.createServer(async (request, response) => {
			let path = getPath(request.url)
			let data
			let status = 200
			try {
				if (!path) {
					throw new Error()
				}
				data = await fs.promises.readFile(path)
			} catch (error) {
				path = './root/src/404.html'
				status = 404
				data = await fs.promises.readFile(path)
			}

			response.writeHead(status, { 'Content-type': `${getMimeType(path)}` })
			response.write(data)
			response.end()
		})
		.listen(3000)
}

createSeverodvinskServer()

import http from 'http'
import fs from 'fs'
import { getMimeType } from './func/mime.js'

http
	.createServer(async (request, response) => {
		let url = request.url
		let path
		let layout
		let status
		try {
			if (url.split('.').length % 2) {
				if (!url.endsWith('/')) {
					url += '/'
				}
				status = 200
				let lpath = 'layout.html'
				let cpath = 'page' + url + 'content.html'
				let tpath = 'page' + url + 'title.html'
				path = tpath

				layout = await fs.promises.readFile(lpath, 'utf8')
				let content = await fs.promises.readFile(cpath, 'utf8')
				let title = await fs.promises.readFile(tpath, 'utf8')

				layout = layout.replace(/\{% get content %\}/, content)
				layout = layout.replace(/\{% get title %\}/, title)
			} else {
				path = 'root/src' + url
				layout = await fs.promises.readFile(path, 'utf8')
				console.log(path)
			}
		} catch (error) {
			status = 404
			let lpath = 'layout.html'
			let cpath = 'page/404/content.html'
			let tpath = 'page/404/title.html'
			path = tpath
			layout = await fs.promises.readFile(lpath, 'utf8')
			let content = await fs.promises.readFile(cpath, 'utf8')
			let title = await fs.promises.readFile(tpath, 'utf8')
			layout = layout.replace(/\{% get content %\}/, content)
			layout = layout.replace(/\{% get title %\}/, title)
		}

		response.writeHead(status, { 'Content-Type': `${getMimeType(path)}` })
		response.write(layout)
		response.end()
	})
	.listen(3000)

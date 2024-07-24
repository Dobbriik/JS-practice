import http from 'http'

//Пусть изначально наш счетчик имеет значение 100. Каждый запрос уменьшайте это значение на единицу и отдавайте новое значение в браузер. Как только счетчик дойдет до нуля, выведите результатом запроса сообщение об этом.

function countResponse() {
	function counter(num) {
		if (num > 0) {
			return num
		} else {
			return '10 requests were made'
		}
	}
	let num = 10
	http
		.createServer((request, response) => {
			response.writeHead(200, { 'Content-type': 'text/html' })
			response.write(`${counter(num--)}`)
			response.end()
		})
		.listen(3000)
}

export default {
	'/test/': function () {
		let str = '<ul>'

		for (let i = 1; i < 9; i++) {
			str += '<li>' + i + '</li>'
		}

		str += '</ul>'

		return str
	},
	'/page1/': function () {
		return '[1,2,3]'
	},
	'/page2/': function () {
		return 'this page2'
	},
	'/page3/': function () {
		return 'this page3'
	},
	'/array/': function () {
		let arr = [1, 2, 3, 4, 5]
		let str = '<ul>'
		for (const element of arr) {
			str += `<li>${element}</li>`
		}
		str += '</ul>'
		return str
	},
	'/handler/': function (data, resp) {
		resp.setHeader('Content-Type', 'application/json')
		return '[1,2,3]'
	},
	'/handler2/': function (data, resp) {
		resp.setHeader('Content-Type', 'text/plain')
		return '[1,2,3]'
	},
}

export default {
	'/handler/': function (data) {
		console.log(data)
		return 'Xyi'
	},
	'/getSum/': function ({ get }) {
		console.log(get)
		return +get.num1 + +get.num2
	},
	'/getString/': function ({ get }) {
		const arr = ['Hello', 'world', 'again']
		return arr[get.count]
	},
	'/postSum/': function ({ post }) {
		let sum = 0
		for (const key in post) {
			sum += +post[key]
		}
		return sum
	},
	'/urlPost/': function ({ post }) {
		console.log(post)
		let sum = 0
		for (const key in post) {
			console.log(post[key])
			sum += +post[key]
		}
		return sum
	},
	'/formData/': function ({ post }) {
		console.table(post)
		return true
	},

	'/ajaxFormDataSend/': function ({ post }) {
		let sum = []
		for (const num of Object.values(post)) {
			sum.push(num)
		}

		const res = sum.reduce((acc, val) => (acc += +val), 0) / sum.length
		return res
	},
	'/sendJsonFetch/': function ({ post }) {
		const data = JSON.parse(post)
		console.log(typeof data)
		console.log(typeof post)
		return data
	},
	'/corsAjax/': function ({ post }) {
		console.log(`post your port:${post}`)
		return `server say my port ${3001}`
	},
}

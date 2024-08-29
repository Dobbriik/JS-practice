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
}

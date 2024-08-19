let arr = ['user1', 'user2', 'user3']
export default {
	'/handler/': function ({ get, post }) {
		function mean(arr) {
			return arr.reduce((acc, num) => {
				return acc + +num
			}, 0)
		}
		const arr = [get.test1, get.test2, get.test3, get.test4, get.test5]
		return mean(arr) / arr.length
	},
	'/name/': function ({ get }) {
		console.log(get.name)
		console.log(get.surname)
		return 'data received'
	},
	'/date/': function ({ get }) {
		function isValidDate(dateString) {
			const date = new Date(dateString)
			return !isNaN(date) && date.toISOString().slice(0, 10) === dateString
		}
		const userDate = [get.year, get.month, get.day].join('-')
		if (isValidDate(userDate)) {
			return 'successfully'
		}
		return 'error date'
	},
	'/postData/': function ({ post }) {
		const validLogin = 'Alex'
		const validPassword = 'Shitikov'
		try {
			if (post.login === validLogin && post.password === validPassword) {
				return 'Authorization is successful'
			}
			return 'Authentication error'
		} catch (error) {
			return 'Input error'
		}
	},
	'/dataLink/': function ({ get }) {
		return get.num ** 2
	},
	'/getSum/': function ({ get }) {
		return +get.num1 + +get.num2
	},
	'/getUser/': function ({ get }) {
		if (!arr[get.user]) {
			return 'Error user'
		}
		return arr[get.user]
	},
	'/jsSubmit/': function (date) {
		console.log(date)
		return 'send successful'
	},
	'/sendMail/': function ({ post }) {
		console.log(post.mail)
		return 'mail send successful'
	},
	'/target/': function ({ post }) {
		console.log(post)
		return 'data successfully received'
	},
}

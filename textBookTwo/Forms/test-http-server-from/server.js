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
}

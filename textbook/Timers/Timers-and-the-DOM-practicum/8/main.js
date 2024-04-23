//
let par = document.querySelector('p')

setInterval(() => {
	let newDate = new Date()
	function addZero(num) {
		if (num < 10) {
			return '0' + num
		} else {
			return num
		}
	}
	let h = addZero(newDate.getHours())
	let m = addZero(newDate.getMinutes())
	let s = addZero(newDate.getSeconds())

	par.innerHTML = `${h}:${m}:${s}`
}, 1000)

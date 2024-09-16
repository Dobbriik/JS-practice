let func = []

for (let i = 0; i < 4; i++) {
	func.push(e => {
		if (i % e.present) console.log(i)
	})
}
/**
 *
 * @param {*} present число для остатка от деление
 */
function loop(present) {
	const event = {
		present,
	}
	func.forEach(fc => fc(event))
}

loop(3)

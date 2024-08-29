const dataTest = {
	number: 1,
}

export async function getNumber() {
	return dataTest.number
}

export async function change() {
	dataTest.number++
	_notifyObserver()
}

let subscribe = []

export function observer(func) {
	subscribe.push(func)
}

function _notifyObserver() {
	subscribe.forEach(element => {
		try {
			element()
		} catch (error) {
			console.log('ppz')
		}
	})
}

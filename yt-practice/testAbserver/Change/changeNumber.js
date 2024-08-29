import { change } from '../dataTest.js'

export function getChangeBtn() {
	const btn = document.createElement('button')
	btn.textContent = 'Change'
	btn.addEventListener('click', () => {
		change()
	})

	return btn
}

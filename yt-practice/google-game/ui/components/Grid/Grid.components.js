import {
	getGridSize,
	subscribe,
	unSubscribe,
} from '../../../core/state-manager.js'
import { CellComponent } from './cell/Cell.component.js'

export function GridComponent() {
	console.log('grid creating')
	const element = document.createElement('table')

	const observer = () => {
		render(element)
	}
	subscribe(observer)

	render(element)
	return {
		element,
		cleanUp: () => {
			unSubscribe(observer)
		},
	}
}

async function render(element) {
	console.log('grid render')
	element.innerHTML = ''

	const gridSize = await getGridSize()
	for (let y = 0; y < gridSize.rowsCount; y++) {
		const tr = document.createElement('tr')
		tr.classList = 'grid'

		for (let x = 0; x < gridSize.columnsCount; x++) {
			const td = CellComponent(x, y)
			tr.appendChild(td.element)
		}
		element.append(tr)
	}
}

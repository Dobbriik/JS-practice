import {
	getGooglePositions,
	getPlayersPositions,
} from '../../../../core/state-manager.js'
import { GoogleComponent } from '../../common/Google/Google.component.js'
import { PlayerComponent } from '../../common/Player/Player.component.js'

export function CellComponent(x, y) {
	const element = document.createElement('td')
	render(element, x, y)
	return { element }
}

async function render(element, x, y) {
	const googlePosition = await getGooglePositions()
	const player1Position = await getPlayersPositions(1)
	const player2Position = await getPlayersPositions(2)

	if (googlePosition.x === +x && googlePosition.y === +y) {
		element.append(GoogleComponent().element)
	} else if (player1Position.x === +x && player1Position.y === +y) {
		element.append(PlayerComponent(1).element)
	} else if (player2Position.x === +x && player2Position.y === +y) {
		element.append(PlayerComponent(2).element)
	} else {
		element.append(`(${x},${y})`)
	}
}

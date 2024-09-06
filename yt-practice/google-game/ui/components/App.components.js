import { GAME_STATUSES } from '../../core/constants.js'
import { getGameStatus, subscribe } from '../../core/state-manager.js'
import { GridComponent } from './Grid/Grid.components.js'
import { LoseComponent } from './Lose/Lose.component/Lose.component.js'
import { ResultPanelComponent } from './ResultPanel/ResultPanel.components.js'
import { SettingsComponent } from './Settings/Settings.components.js'
import { StartComponent } from './Start/Start.component/Start.component.js'

export function AppComponent() {
	const localeState = {
		prevGameStatus: null,
		cleanupFunction: [],
	}

	subscribe(() => {
		let renderApp
		render(element, localeState)
	})

	console.log('app creating')

	const element = document.createElement('div')
	render(element, localeState)
	return { element }
}

async function render(element, localeState) {
	const gameStatus = await getGameStatus()

	if (localeState.prevGameStatus === gameStatus) return
	localeState.prevGameStatus = gameStatus

	localeState.cleanupFunction.forEach(cf => cf())
	localeState.cleanupFunction = []

	element.innerHTML = ''
	switch (gameStatus) {
		case GAME_STATUSES.IN_PROGRESS: {
			console.log(gameStatus)
			const settingsComponent = SettingsComponent()
			const resultPanelComponent = ResultPanelComponent()
			const gridComponent = GridComponent()
			localeState.cleanupFunction.push(settingsComponent.cleanUp)
			localeState.cleanupFunction.push(resultPanelComponent.cleanUp)
			localeState.cleanupFunction.push(gridComponent.cleanUp)

			element.append(
				settingsComponent.element,
				resultPanelComponent.element,
				gridComponent.element
			)
			break
		}
		case GAME_STATUSES.LOSE: {
			console.log(gameStatus)

			const loseComponent = LoseComponent()
			element.append(loseComponent.element)
			break
		}
		case GAME_STATUSES.WIN: {
			console.log(gameStatus)

			break
		}
		case GAME_STATUSES.SETTINGS: {
			console.log(gameStatus)

			const settingsComponent = SettingsComponent()
			const startComponent = StartComponent()
			element.append(settingsComponent.element, startComponent.element)
			break
		}
		default: {
			throw new Error('Error status')
		}
	}
}

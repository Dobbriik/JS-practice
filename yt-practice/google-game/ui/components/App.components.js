import { GAME_STATUSES } from '../../core/constants.js'
import { getGameStatus } from '../../core/state-manager.js'
import { GridComponent } from './Grid/Grid.components.js'
import { LoseComponent } from './Lose/Lose.component/Lose.component.js'
import { ResultPanelComponent } from './ResultPanel/ResultPanel.components.js'
import { SettingsComponent } from './Settings/Settings.components.js'
import { StartComponent } from './Start/Start.component/Start.component.js'

export function AppComponent() {
	const element = document.createElement('div')
	render(element)
	return { element }
}

async function render(element) {
	const gameStatus = await getGameStatus()

	switch (gameStatus) {
		case GAME_STATUSES.IN_PROGRESS: {
			const settingsComponent = SettingsComponent()
			const resultPanelComponent = ResultPanelComponent()
			const gridComponent = GridComponent()
			element.append(
				settingsComponent.element,
				resultPanelComponent.element,
				gridComponent.element
			)
			break
		}
		case GAME_STATUSES.LOSE: {
			const loseComponent = LoseComponent()
			element.append(loseComponent.element)
			break
		}
		case GAME_STATUSES.WIN: {
			break
		}
		case GAME_STATUSES.SETTINGS: {
			const settingsComponent = SettingsComponent()
			const startComponent = StartComponent()
			element.append(settingsComponent.element, startComponent.element)
			break
		}

		default:
			throw new Error('Error status')

			break
	}
}

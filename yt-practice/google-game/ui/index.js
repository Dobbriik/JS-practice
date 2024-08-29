import { getGameStatus, subscribe, unSubscribe } from '../core/state-manager.js'
import { AppComponent } from './components/App.components.js'

const rootElement = document.querySelector('#root')

function renderApp() {
	rootElement.innerHTML = ''
	const appComponent = AppComponent()
	rootElement.append(appComponent.element)
	return getGameStatus()
}

renderApp()

subscribe(renderApp)

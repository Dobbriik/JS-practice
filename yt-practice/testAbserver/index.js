import { getNumber, observer } from './dataTest.js'
import { getChangeBtn } from './Change/changeNumber.js'

const div = document.querySelector('#test')

async function renderTest() {
	div.textContent = await getNumber()
	div.append(getChangeBtn())
}

renderTest()

observer(renderTest)

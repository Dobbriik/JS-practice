import { _china } from './cities/china.js'
import { _france } from './cities/france.js'
import { _germany } from './cities/Germany.js'
import { _rus } from './cities/rus.js'
import { _usa } from './cities/usa.js'

export const _dataCS = {
	country: [
		['Россия', _rus],
		['США', _usa],
		['Китай', _china],
		['Германия', _germany],
		['Франция', _france],
	],
}

export async function getCountryAndCitiesArray() {
	return [..._dataCS.country]
}

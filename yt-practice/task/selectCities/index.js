import { getCountryAndCitiesArray } from './data.js'

const countrySelect = document.querySelector('#country')
const citiesSelect = document.querySelector('#cities')
const arrCS = await getCountryAndCitiesArray()

for (const cities of arrCS) {
	const option = document.createElement('option')
	option.value = arrCS.indexOf(cities)
	option.selected = true
	option.textContent = cities[0]
	countrySelect.appendChild(option)
}

countrySelect.addEventListener('change', function () {
	citiesSelect.innerHTML = ''
	const arrCities = arrCS[countrySelect.value][1]
	for (const city of arrCities) {
		const option = document.createElement('option')
		option.textContent = city
		citiesSelect.appendChild(option)
	}
})

let elem = [...countrySelect.children][0]

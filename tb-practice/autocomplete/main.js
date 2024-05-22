//Сейчас мы реализуем автодополнение. Под этим термином понимается выпадающая подсказка при вводе текста в инпут. Давайте посмотрим на примере. Ниже я сделал инпут, в который можно ввести название страны. При этом, если ввести какие-то буквы, то под инпутом появится список стран, которые начинаются на введенную строку.

let countriesAlphabet = {
	a: [
		'Afghanistan',
		'Albania',
		'Algeria',
		'Andorra',
		'Angola',
		'Antigua and Barbuda',
		'Argentina',
		'Armenia',
		'Australia',
		'Austria',
	],
	b: [
		'Bahamas',
		'Bahrain',
		'Bangladesh',
		'Barbados',
		'Belarus',
		'Belgium',
		'Belize',
		'Benin',
		'Bermuda',
		'Bhutan',
	],
	c: [
		'Cambodia',
		'Cameroon',
		'Canada',
		'Cabo Verde',
		'Cayman Islands',
		'Central African Republic',
		'Chad',
		'Chile',
		'China',
		'Colombia',
	],
}

let input = document.querySelector('#elem')
let list = document.querySelector('#list')

input.addEventListener('input', function () {
	list.innerHTML = ''

	let firstSymbol = input.value.slice(0, 1).toLocaleLowerCase()
	let allStartSymbol =
		input.value.slice(0, 1).toLocaleUpperCase() + input.value.slice(1)

	let similarCountries = []

	if (countriesAlphabet[firstSymbol]) {
		similarCountries = countriesAlphabet[firstSymbol].filter(function (
			country
		) {
			return country.startsWith(allStartSymbol)
		})
	}

	for (const country of similarCountries) {
		let li = document.createElement('li')
		li.textContent = country
		list.appendChild(li)
		li.addEventListener('click', function () {
			input.value = this.textContent
			list.innerHTML = ''
		})
	}
})

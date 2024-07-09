//С помощью свойства length можно узнать количество записей в локальном хранилище:
//По нажатию на кнопку узнайте количество записей в локальном хранилище и, если их больше 10, очистите хранилище.

function getEventEntries() {
	const btnNum = document.querySelector('button')
	btnNum.addEventListener('click', function () {
		const entries = localStorage.length
		console.log(entries)
		if (Number(entries) > 10) {
			localStorage.clear()
		}
	})
}

getEventEntries()

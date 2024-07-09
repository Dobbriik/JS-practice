// const arr = [1, 2, 3, 4]
// localStorage.setItem('arr', JSON.stringify(arr))

// let jsonArr = localStorage.getItem('arr')

// console.log(JSON.parse(jsonArr))

//Даны инпуты и кнопка. По нажатию на кнопку получите тексты всех инпутов в виде массива и сохраните этот массив в локальное хранилище.
//Модифицируйте предыдущую задачу. Сделайте так, чтобы при следующем заходе на страницу в инпутах стояли сохраненные в локальном хранилище значения.

const inputs = document.querySelectorAll('input')
const btn = document.querySelector('button')

if (localStorage.getItem('arr')) {
	const arr = JSON.parse(localStorage.getItem('arr'))
	for (let i = 0; i < arr.length; i++) {
		inputs[i].value = arr[i]
	}
}

btn.addEventListener('click', function () {
	let arr = []
	for (const iterator of inputs) {
		arr.push(iterator.value)
	}
	localStorage.setItem('arr', JSON.stringify(arr))
	console.log(localStorage.getItem('arr'))
	console.log('object')
})

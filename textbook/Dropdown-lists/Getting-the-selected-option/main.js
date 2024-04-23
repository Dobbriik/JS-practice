//
let select = document.querySelector('#select')
console.log(select[select.selectedIndex])

let btn = document.querySelector('button')
//Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.
//Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.

btn.addEventListener('click', function () {
	console.log(select[select.selectedIndex].text)
	select[select.selectedIndex].text += '!'
})

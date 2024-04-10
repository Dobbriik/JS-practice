//
let select = document.querySelector('#select')

//Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.
for (let option of select) {
	option.textContent += ` ${option.value}`
}

let select1 = document.querySelector('#select')
console.log(select1[0])

let elem1 = document.querySelector('#elem1')
elem1.addEventListener('blur', func)

let elem2 = document.querySelector('#elem2')
elem2.addEventListener('blur', func)

function func() {
	console.log(this.value) // выведет или 'text1', или 'text2'
}
//мы создаем всего одну функцию и привязываем ее к любому количеству инпутов. Если бы this не указывал на тот элемент, в котором произошло событие, то у нас бы такое не получилось - пришлось бы для каждого инпута создавать свою функцию с тем же кодом!

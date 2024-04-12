//С помощью метода call и функции func выведите на экран value каждого из инпутов.

function func() {
	console.log(this.value)
}

let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')
let elem3 = document.querySelector('#elem3')

func.call(elem1)
func.call(elem2)
func.call(elem3)

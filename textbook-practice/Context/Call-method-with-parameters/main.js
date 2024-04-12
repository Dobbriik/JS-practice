// func.call(elem, param1, param2);

//Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'hello, John Smit'. Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями.

let elem = document.querySelector('#elem')

function func(surname, name) {
	console.log(this.value + ', ' + name + ' ' + surname)
}

func.call(elem, 'Smit', 'John') // тут должно вывести 'hello, John Smit'

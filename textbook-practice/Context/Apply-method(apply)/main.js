//func.apply(elem, [param1, param2]);

let elem = document.querySelector('#elem')

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name)
}

func.apply(elem, ['John', 'Smit']) // тут должно вывести 'hello, John Smit'

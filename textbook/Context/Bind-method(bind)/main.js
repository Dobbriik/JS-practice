//метод bind позволяет навсегда привязать контекст к функции. Своим результатом этот метод возвращает новую функцию, внутри которой this будет иметь жестко заданное значение.

let elem = document.querySelector('#elem')

function func(param1, param2) {
	console.log(this.value + param1 + param2)
}

let newFunc = func.bind(elem)

newFunc('1', '2')

//Не обязательно записывать результат работы bind в новую функцию newFunc, можно просто перезаписать func. После этого func будет такой же функцией, как и была, но с жестко связанным this:
func = func.bind(elem)

//Напишите в указанном месте конструкцию с методом bind так, чтобы this внутри функции func всегда указывал на инпут из переменной elem.

let elem1 = document.getElementById('elem1')

function func1(name, surname) {
	console.log(this.value + ', ' + name + ' ' + surname)
}

func1 = func1.bind(elem1)

// тут напишите конструкцию с bind()

func1('John', 'Smit') // тут должно вывести 'hello, John Smit'
func1('Eric', 'Luis') // тут должно вывести 'hello, Eric Luis'

//Существуют специальные функции, с помощью которых можно создавать свои итераторы. Такие функции называются генераторы. Имена таких функций должны начинаться со звездочки:

//Внутри генераторов используется ключевое слово yield, указывающее то, что должен вернуть итератор на следующем вызове. Для примера давайте сделаем так, чтобы первый вызов возвращал 1, второй - 2, а третий - 3:
function* func() {
	yield 5
	yield 4
	yield 3
	yield 2
	yield 1
}

let iter = func()

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
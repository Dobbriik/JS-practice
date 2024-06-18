//Создайте коллекцию Set с какими-нибудь числами. Переберите эту коллекцию циклом и найдите сумму ее элементов.
let set = new Set()

set.add(1)
set.add(2)
set.add(3)

let sum = 0
for (let elem of set) {
	sum += elem
}
console.log(sum)

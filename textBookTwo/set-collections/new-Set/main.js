//Коллекции Set позволяют создать массивы без дублей. Давайте посмотрим, как работать с такими коллекциями. Для начала нужно создать коллекцию с помощью следующей команды:

let set = new Set()

//добавлять новые элементы с помощью метода add:
set.add(1)
set.add(2)
set.add(3)

//При этом при попытке добавить уже существующий в коллекции элемент нового добавления не произойдет:
//Создайте коллекцию Set. С помощью метода add добавьте в нее элементы. Убедитесь, что дубли элементов не добавляются.
set.add(3)
set.add(4)
set.add(3)

console.log(set)

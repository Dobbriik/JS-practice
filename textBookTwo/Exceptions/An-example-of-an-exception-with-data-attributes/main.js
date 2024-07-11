//Переделайте мой код так, чтобы функция getCost выбрасывала два типа исключений: если отсутствует цена и если отсутствует количество. Хорошо подумайте над названиями этих исключений. В блоке catch выведите разные сообщения об ошибке для исключений разных типов.

function getCost(elem) {
	if (elem.dataset.price !== undefined && elem.dataset.amount !== undefined) {
		return elem.dataset.price * elem.dataset.amount
	} else if (elem.dataset.price == undefined) {
		throw {
			name: 'ProductPriceError',
			message: 'отсутствует цена продукта',
		}
	} else if (elem.dataset.amount == undefined) {
		throw {
			name: 'ProductAmountError',
			message: 'отсутствует значение количество продукта',
		}
	}
}

const product = document.querySelector('#product')

try {
	const cost = getCost(product)
} catch (error) {
	console.log(error.name)
	console.log(error.message)
}

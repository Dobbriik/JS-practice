//Иногда бывает нужно преобразовать некую структуру данных, например, массив или объект, в строку. Это может понадобится, например, чтобы отправить эту структуру через интернет или сохранить в какое-то хранилище.

//Для этого в JavaScript был придуман специальный формат JSON (произносится джейсон).

//Формат JSON может содержать одну из двух структур: или массив, или объект с парами ключ-значение. Массивы и объекты строятся так же, как и в JavaScript, но имеют ограничение: все строки и строковые ключи объектов должны быть взяты в двойные кавычки.

let jsonArr = '[1, 2, 3, 4, 5, "a", "b"]'

let jsonObj = `{
	"a": "aaa",
	"b": "bbb",
	"c": "ccc",
	"111": "ddd"
}`

let jsonArrAndObj = `[
	{
		"a": "aaa",
		"b": "bbb"
	},
	{
		"c": "ccc",
		"d": "ddd"
	}
]`

//В отличие от структур JavaScript, в JSON не разрешены запятые после последних элементов массивов и объектов:

let json1 = '[1, 2, 3, 4, 5,]' // неверно
let json2 = '[1, 2, 3, 4, 5]' // верно

let json3 = '[null, true, false]'

//Вручную преобразуйте это в формате JSON.
let arr = '[1, 2, 3, "a", "b", "c"]'
console.log(arr)

let obj = `{
	"a": 1,
	"b": 2,
	"c": "eee",
	"d": true
}`

let obj2 = `{
	"a": ["a", "b", "c"],
	"b": "111",
	"c": "eee"
};`

console.log(obj2)
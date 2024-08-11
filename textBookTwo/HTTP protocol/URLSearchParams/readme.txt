1. Как вы уже знаете, при работе с формами и GET запросами в JavaScript возникают строки такого вида:
let paramsString = 'a=1&b=2&c=3';
Иногда нужно программным образом изменить значение какого-либо параметра из этой строки.
let paramsString = 'a=1&b=2&c=3';
let searchParams = new URLSearchParams(paramsString);

2. Получение значения параметра
С помощью метода get можно получить значение параметра:
let res = searchParams.get('a');
console.log(res);

3. Проверка наличия параметра
С помощью метода has можно проверить наличие параметра. Проверим существующий параметр: let res = searchParams.has('a');
console.log(res); // выведет true

4. Преобразование в строку
let res = searchParams.toString();
console.log(res); // выведет 'a=1&b=2&c=3'

5. Изменение параметров
С помощью метода set можно изменить значение параметра:
searchParams.set('b', 'x');

6. Добавление параметров 
С помощью метода set можно также добавить новый параметр:
searchParams.set('d', '4');

6. Добавление параметров через append
Может создать копию, а не изменять или просто добавить.
searchParams.append('a', '4');

7. Удаление параметров
searchParams.delete('b');

8. Перебор параметров циклом
Параметры можно перебирать циклом: 
for (let p of searchParams) {
	console.log(p);
}
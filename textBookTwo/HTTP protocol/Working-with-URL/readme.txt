1. В JavaScript иногда приходится работать с адресами ссылок. Для этого предназначен класс URL, позволяющий получать и изменять части адресов.
let path = 'http://site.ru:3000/dir/eee/page.html#show?a=1&b=2&c=3';
let url = new URL(path);

2. Протокол
С помощью свойства protocol можно получить протокол:
let res = url.protocol;
console.log(res); // выведет 'http://'

3. Хост
С помощью свойства host можно получить имя домена с портом:
let res = url.host;
console.log(res); // выведет 'site.ru:3000'

4. Имя хоста
С помощью свойства hostname можно получить имя домена:
let res = url.hostname;
console.log(res); // выведет 'site.ru'

5. Порт
С помощью свойства port можно получить порт:
let res = url.port;
console.log(res); // выведет '3000'

6. Путь
С помощью свойства pathname можно отбросить имя домена, получив путь:
let res = url.pathname;
console.log(res); // выведет '/dir/eee/page.html#show?a=1&b=2&c=3'

7. Хеш
С помощью свойства hash можно получить значение хеша:
let res = url.hash;
console.log(res); // выведет 'show'

8. GET параметры
- С помощью свойства search можно получить строку GET параметров:
let res = url.search;
console.log(res); // выведет 'a=1&b=2&c=3'
- С помощью свойства searchParams можно получить GET параметры в виде объекта класса URLSearchParams:
let res = url.searchParams;
console.log(res); // выведет объект класса URLSearchParams
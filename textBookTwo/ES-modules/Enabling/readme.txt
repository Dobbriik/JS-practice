1. Включение ES
{
	"type" : "module"
}

2. Для сборки модулей мы будем пользоваться популярным сборщиком Webpack.
npm install webpack --save-dev
Теперь установим также Webpack CLI, позволяющий обращаться к сборщику через командную строку:
npm install webpack-cli --save-dev

3. Принцип работы сборщика Webpack
Бандл - Сборщик заходит в точку входа, смотрит какие модули подключены к ней. К этим модулям также могут быть подключены другие модули. Сборщик следует по всем подключениям и собирает весь код в один файл. Этот файл называется бандл. 
Точка входа - Обычно создают некий основной файл, к которому подключаются остальные файлы. Этот файл называется точка входа.
development - Режим  предназначен для процесса разработки.
production - Режим предназначен для итогового кода, который будет выложен в работу.

4. Настройка сборщика Webpack
Установленый сборщик должен быть настроен в webpack.config.js.

export default {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: './dist/bundle.js',
	}
};
mode - регулирует режим сборки.
entry -  задает точку входа.
output - имя бандла.

5. Настройка запуска сборки

{
	"type" : "module",
	"scripts" : {
		"build" : "webpack"
	}
}
npm run build

6. Подключение бандла к верстке
создаем index.html в dist и подключаем bundle.js
после run build должен подключиться скрипт из src

7. Создание ES модуля
Разместим наш модуль в файле src/math.js  и сделаем в нем несколько функций.

8. Подключение ES
Это делается с помощью команд import и from в src/index.js

9. Переименование при импорте
Это делается с помощью команды as.
import {root2 as sqrt, root3} from './math.js';

10. Импорт всего содержимого модуля
import * as math from './math.js';
пример - math.root2(2)

11. Экспорт по умолчанию 
export default - при помощи команды можно экспортировать только одно значение.
имя при import выбирается произвольно.

12. Комбинация экспортов
import test, {func1, func2} from './test.js';

13. Импорт всего содержимого при комбинации экспортов
import test, * as mod from './test.js';

14. Экспорт значений (!!! искомое значение храниться в str.default = 'test')
export default 'test';
import str from './test.js';

15. Экспорт массивов
export default [1, 2, 3, 4];
import arr from './test.js';

16. Экспорт объектов
export default {
	a: 1,
	b: 2,
	c: 3
};
import obj from './test.js';

17. Значения как константы
Импортированные значения ведут себя как константы. Их нельзя изменить как const

18. Импорт npm модулей
npm install underscore
import _ from 'underscore'; указывать спереди ./ для npm модулей - не нужно

19. Можно импортировать не все функции, а только необходимые
Если знаешь какие нужны 
import {first, last} from 'underscore';

20. Динамический импорт ES модулей
ES модули можно импортировать динамически.
btn.addEventListener('click', function() {
	import('./test.js').then(({func1, func2}) => {
		let res1 = func1();
		let res2 = func2();
		
		console.log(res1, res2);
	});
});

21. Динамический множественный импорт 
Можно динамически импортировать сразу несколько модулей:
btn.addEventListener('click', function() {
	Promise.all([
		import('./module1.js'),
		import('./module2.js'),
		import('./module3.js'),
	])
	.then(([module1, module2, module3]) => {
		
	});
});

22. Преобразование CommonJS модулей в ES
В CommonJS импорты выполняются с помощью команды require, параметром которой указывается путь к модулю. Результат команды записывается в переменную.
В CommonJS не ставится расширение .js для файлов, а в ES - ставится.
let math = require('./math');
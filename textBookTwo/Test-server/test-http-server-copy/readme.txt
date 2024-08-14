1. Тестовый сервер на JavaScript
npm run start

2. Генерация HTML через тестовый сервер
export default {
	'/test/': function() {
		return '<b>text</b>';
	}
}
1. Отправка форм
<form action="/handler/">
	<input name="test1">
	<input name="test2">
	<input type="submit">
</form>
В параметр нашего обработчика попадут отправленные данные формы:
export default {
	'/handler/': function(data) {
		console.log(data); // выведется в консоль сервера
		return 'form data received';
	}
}

2. Методы отправки форм
Формы могут быть отправлены двумя способами: методом GET или методом POST. Способ отправки формы регулируется атрибутом method формы.
<form action="/handler/" method="GET">
export default {
	'/handler/': function({get, post}) {
		console.log(get);
		console.log(post);
		return 'form data received';
	}
}

3. Отправка форм методом GET
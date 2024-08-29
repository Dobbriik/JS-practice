1.Введение в AJAX
Технология AJAX представляет собой способ обновления части страницы без ее полной перезагрузки. В основе технологии лежит JavaScript, протокол HTTP, и некоторая серверная часть, например, PHP, NodeJS, либо какая-то иная.
В настоящее время работа с AJAX реализуется через fetch.

button.addEventListener('click', function() {
	fetch('/ajax.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});

4. Код HTTP ответа в AJAX запросе
button.addEventListener('click', function() {
	fetch('/ajax.html').then(response => {
		console.log(response.status); // например, 200
	});
});

5. Успешность AJAX запроса
button.addEventListener('click', function() {
	fetch('/ajax.html').then(response => {
		console.log(response.ok); // выведет true или false
	});
});

6. Исключительные ситуации при AJAX
.catch(
		error => {
			alert(error);
		})

7. Заголовки HTTP запроса через AJAX
button.addEventListener('click', function() {
	let promise = fetch('/handler/', {
		headers: {
			name1: 'value1',
			name2: 'value2',
		}
	});
});
//Дан элемент. Вставьте перед ним следующий тег:
//<div class="www"><p>text</p><p>text</p><input></div>

let div = document.querySelector('#elem')
div.insertAdjacentHTML(
	'beforebegin',
	'<div class="www"><p>text</p><p>text</p><input></div>'
)

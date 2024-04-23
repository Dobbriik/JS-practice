//  Формы ,Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.

let textArea = document.querySelector('#text')
let par = document.querySelector('p')

textArea.addEventListener('blur', function () {
	par.textContent += ` ${textArea.value}`
	textArea.value = ''
})

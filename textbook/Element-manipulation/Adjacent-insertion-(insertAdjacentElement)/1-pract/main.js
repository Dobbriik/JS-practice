//Вставьте перед ним абзац с текстом '!!!'.
let div = document.querySelector('#elem')
let par1 = document.createElement('p')
par1.textContent = 'par1!!!'

div.insertAdjacentElement('beforeBegin', par1)

//Вставьте после него абзац с текстом '!!!'.
let par2 = document.createElement('p')
par2.textContent = 'par2!!!'

div.insertAdjacentElement('afterEnd', par2)

//Вставьте ему в начало абзац с текстом '!!!'.

let par3 = document.createElement('p')
par3.textContent = 'par3!!!'

div.insertAdjacentElement('afterBegin', par3)

//Вставьте ему в конец абзац с текстом '!!!'.

let par4 = document.createElement('p')
par4.textContent = 'par4!!!'

div.insertAdjacentElement('beforeEnd', par4)

//Поверх среднего '!!!'.
let par5 = document.createElement('p')
par5.textContent = 'par5!!!'

div.children[2].insertAdjacentElement('beforebegin', par5)

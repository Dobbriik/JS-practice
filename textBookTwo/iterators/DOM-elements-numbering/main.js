let pars = document.querySelectorAll('p')

for (const [num, elem] of pars.entries()) {
	console.log(num)
	elem.textContent += '!'
}

console.log(pars[2])

let td = document.querySelectorAll('td')

for (const [num, elem] of td.entries()) {
	elem.textContent += num + 1
}

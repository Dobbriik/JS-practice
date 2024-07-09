let keys = Object.keys(localStorage)
let values = Object.values(localStorage)

console.log(keys, values)

const btn = document.querySelector('button')

btn.addEventListener('click', function () {
	console.log(Object.keys(localStorage))
	console.log(Object.values(localStorage))
})

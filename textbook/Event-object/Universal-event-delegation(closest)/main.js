//
let list = document.querySelector('#list')

list.addEventListener('click', function (event) {
	let li = event.target.closest('li')
	console.log(li)
	// console.log(event.target.closest('li'))
	if (li) {
		li.innerHTML += '!'
	}
	// console.log(event.target)
})

// list.addEventListener('click', function (event) {
// 	let li = event.target.closest('li')

// 	if (li) {
// 		li.textContent = li.textContent + '!'
// 	}
// })

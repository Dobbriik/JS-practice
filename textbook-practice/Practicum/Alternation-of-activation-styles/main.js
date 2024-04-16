//1
let tds = document.querySelectorAll('table td')

// let color = 'color1'
// for (let td of tds) {
// 	td.addEventListener('click', function () {
// 		if (color == 'color1') {
// 			color = 'color2'
// 		} else {
// 			color = 'color1'
// 		}

// 		this.classList.add(color)
// 	})
// }

//2

// let tds2 = document.querySelectorAll('#table td')

let i = 0
let colors = ['color1', 'color2', 'color3']

for (let td of tds) {
	td.addEventListener('click', function () {
		this.classList.add(colors[i])

		i++
		if (i == colors.length) {
			i = 0
		}
	})
}

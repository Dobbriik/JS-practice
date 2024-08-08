import { root2 as sqrt, root3, pow2 as square, pow3 as cube } from './math.js'
// import * as math from './math.js'
import * as mod from './test.js'
import test from './test.js'
import * as nums from './num.js'
import _ from 'underscore'
import __ from 'lodash'

const result = +sqrt(3) + +root3(3)
const result2 = +square(3) + +cube(3)

function getSum(arr) {
	return arr.reduce((acc, elem) => {
		return acc + elem
	}, 0)
}

// console.log(getSum(test))
// console.log(mod.hello())
// console.log(getSum([nums.one, nums.two, nums.three]))

let arr = [1, 2, 3, 4, 5]
let res = _.first(arr) + _.last(arr)
console.log(res)

let testCompact = [1, 2, false, '', 3]
console.log(__.compact(testCompact))

let testContact = [[1], [[2]], 3]
let newConcat = __.concat(testContact)
console.log(newConcat)

//Сделайте модуль, экспортирующий массив названий дней недели. По нажатию на кнопку импортируйте этот модуль и выведите дни недели в виде списка ul.

function createWeekList() {
	const btn = document.createElement('button')
	btn.textContent = 'Create'
	btn.addEventListener('click', function () {
		import('./days-of-week.js').then(arr => {
			const ul = document.createElement('ul')
			for (const element of arr.default) {
				const li = document.createElement('li')
				li.textContent = element
				ul.appendChild(li)
			}
			document.body.appendChild(ul)
		})
	})
	document.body.appendChild(btn)
}

function createWeekAndMonthList() {
	const btn = document.createElement('button')
	btn.textContent = 'Create'
	btn.addEventListener('click', function () {
		Promise.all([import('./days-of-week.js'), import('./month.js')]).then(
			([week, month]) => {
				document.body.append(crateList(week.default), crateList(month.default))
			}
		)
	})
	document.body.appendChild(btn)
}

function crateList(arr) {
	const ul = document.createElement('ul')
	for (const element of arr) {
		const li = document.createElement('li')
		li.textContent = element
		ul.appendChild(li)
	}
	return ul
}

createWeekAndMonthList()

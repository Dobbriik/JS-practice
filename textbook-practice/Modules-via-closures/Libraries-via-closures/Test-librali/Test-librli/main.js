// import _ from 'underscore'
import { newFind, newMap } from './src/js/module.js'
console.log(adas)

let arr = newMap([1, 2, 3], function (elem) {
	return elem ** 2
})
// console.log(arr)
let arr2 = newFind([1, 2, 3], function (elem) {
	return elem % 3 === 0
})

let object = {
	name: 'alex',
	family: 'shitikov',
	age: '25',
}

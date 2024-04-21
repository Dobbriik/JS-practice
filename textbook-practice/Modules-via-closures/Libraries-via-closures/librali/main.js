// import objects from './new.js'
// import _ from 'underscore'
const _ = require('underscore')

const evens = _.filter([1, 2, 3, 4, 5, 6], function (num) {
	return num % 2 == 0
})

console.log(evens)
console.log('object')

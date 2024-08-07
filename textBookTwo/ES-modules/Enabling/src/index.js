import { root2 as sqrt, root3, pow2 as square, pow3 as cube } from './math.js'
import * as math from './math.js'
import test from './test.js'

const result = +sqrt(3) + +root3(3)
const result2 = +square(3) + +cube(3)
const all = +math.pow2(2) + +math.root3(4)

console.log(result)
console.log(result2)
console.log(all)
console.log(math)
console.log(test())

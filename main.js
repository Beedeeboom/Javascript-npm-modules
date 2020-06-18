import { add, subtract, number } from "./file1.js"
import _ from "./node_modules/lodash-es/lodash.default.js"
var global = "this is a global var";

console.log(add(5, 4))
console.log(subtract(5,4))
console.log(number)

//We can also import this way by giving a name to the entire object being imported:
import * as Steph from "./file1.js"
var global = "this is a global var";

console.log(Steph.add(5, 4))
console.log(Steph.subtract(5,4))
console.log(Steph.number)
console.log(_.random(1000,2000))
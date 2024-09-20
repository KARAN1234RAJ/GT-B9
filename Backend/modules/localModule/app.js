// app.js
const math = require("./math");
const myModule = require("./myModule");
/**
const result1 = math.add(5, 3); // result1 will be 8
const result2 = math.subtract(10, 4); // result2 will be 6

console.log(`Result of add: ${result1}`);
console.log(`Result of subtract: ${result2}`);
 */

const greeter = new myModule.Greeter("Karan Raj");
console.log(greeter.greet());

console.log(`Value of PI: ${myModule.PI}`);

console.log(`3 * 4 = ${myModule.multiply(3, 4)}`);
     
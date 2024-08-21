// calling of a function

// without Argument
// function myFunc(a, b) {
//   console.log("The values are :");
//   console.log("a = ", a);
//   console.log("b = ", b);
// }
// myFunc();

//default Argument

function add(a = 0, b = 0) {
  return a + b;
}

console.log(add(10, 5)); 
console.log(add(10));
console.log(add());

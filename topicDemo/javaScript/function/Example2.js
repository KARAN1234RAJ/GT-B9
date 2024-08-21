const sum = function (a, b) {
  //function expression
  return a + b;
};
console.log(sum(3, 4));

let x = function () {
  //anonymous function
  console.log("I'm anonymous function!");
};
x();

const add = (a, b) => {
  return a + b;
};
console.log(add(10, 5));

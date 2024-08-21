const a = function () {
  console.log("I am from function expression - a");
};

function b(a) {
  console.log("Hey I am from function - b");
  a();
}
b(a);

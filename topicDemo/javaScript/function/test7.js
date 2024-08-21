// function exampleFunction() {
//   if (true) {
//     let localVar = "I am a local variable";
//     console.log(localVar);
//   }

//   // console.log(localVar);
// }

// exampleFunction();

//========================
// function outerFunction() {
//   let outerVariable = "I am from the outer function";
//   function innerFunction() {
//     console.log(outerVariable);
//   }

//   return innerFunction;
// }
// let innerFunc = outerFunction();
// innerFunc();
// outerFunction()();

//========================

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// let add5 = makeAdder(5);
// let add10 = makeAdder(10);

// console.log(add5(20));
// console.log(add10(30));
// // console.log(makeAdder(100)(20));

//=================================
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

console.log(sum(10)(20)(30)(40));

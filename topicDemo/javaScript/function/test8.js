function outerFunction() {
  let outerVar = "I am an outer variable";
  function innerFunction() {
    console.log(outerVar);
  }
  return innerFunction;
}
let closure = outerFunction();
closure();
outerFunction()();

//================================

// let globalVar = "I am a global variable";
// function outerFunction() {
//   function innerFunction() {
//     console.log(globalVar);
//   }
//   return innerFunction;
// }
// let closure2 = outerFunction();
// closure2();

//=================
// for (var i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i); 
//   }, 1000);
// }

//===================

// for (var i = 1; i <= 5; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i); 
//     }, 1000);
//   })(i);
// }

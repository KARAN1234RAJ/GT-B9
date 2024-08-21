// function myFunc() {
//   return function calc() {  
//     return 2;
//   };
// }
// console.log(myFunc());
// let a = myFunc();
// let answer = a();
// console.log(answer);

//================================
function myFunc() {
  return function calc(x) {
    return x * 2;
  };
}

let answer = myFunc()(2);
console.log(answer);

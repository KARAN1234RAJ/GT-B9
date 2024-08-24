// console.log(10);
// const goodFunc = () => {
//   console.log("good");
// };

// const bestFunc = () => {
//   goodFunc();
//   console.log("best");
// };
// bestFunc();

//====call back===
// function One() {
//   console.log("One is called");
// }
// One();
// function Two(callback) {
//   console.log("Two is called");
//   callback();
// }
// Two(One);

//===
setTimeout(() => {
  console.log("I am from setTimeout");
}, 2000);

setTimeout(function CallbackHere() {
  console.log("I am from setTimeout2");
}, 2000);

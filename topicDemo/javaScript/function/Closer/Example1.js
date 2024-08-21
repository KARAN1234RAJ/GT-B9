//=================================
// function greet() {
//   const name = "John";
//   return function () {
//     console.log(`Hi ${name}`);
//   };
// }
// const greeting = greet();
// greeting();

//=================================
// function setCount() {
//   return function () {
//     let number = 0;
//     console.log(++number);
//   };
// }
// const counter = setCount();
// counter();
// counter();
// counter();

//=================================
// const createCallbacks = () => {
//   for (var i = 1; i <= 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 2000*i);
//   }
// };
// createCallbacks();

//===========================
// const count = () => {
//   let count = 0;
//   return {
//     increment: () => ++count,
//     decrement: () => --count,
//     getCount: () => console.log(count),
//   };
// };
// const counter = count();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.getCount();

//=========================================

// const init = () => {
//   let initialized = false;
//   return () => { 
//     if (initialized) {
//       return console.warn("init function already called, not initializing");
//     }
//     initialized = true;
//     return console.info("initialized");
//   };
// };
// init()();

// const initialize = init();
// initialize();
// initialize();
// initialize();
// initialize();
//==================================
// function OuterFunction() {
//   var outerVariable = 100;
//   function InnerFunction() {
//   console.log(outerVariable);
//   }
//   return InnerFunction;
// }
// var innerFunc = OuterFunction();
// innerFunc();

//==================================
var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();
console.log(counter.value()); 
counter.increment();
counter.increment();
console.log(counter.value()); 
counter.decrement();
console.log(counter.value()); 

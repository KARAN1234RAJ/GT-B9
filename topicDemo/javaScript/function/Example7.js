// with argument object
// function myFunc() {
//      console.log(arguments[0]);
     
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(arguments[2]);
//   console.log(arguments[3]);
//   console.log(arguments[4]);
//   console.log(arguments[5]);
// }
// myFunc(1, 2, "This is argument object", "a", "b", "hello");

//========================================================

// function func1() {
//   console.log(arguments[0]);
//   arguments[1] = "I am new value"; 

//   console.log("In function func1, y = ", arguments[1]);
// }
// x = "Hello Guys!";
// y = "I am old value";
// func1(x, y);
// console.log("In global, y = ", y);

//======================================

function myFunc(b,c,d,e,f,...a) {
  console.log(a);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

myFunc("One", "Two","three","four");

// function greet() {
//   console.log("Hello world");
// }
// function sayName(name) {
//   console.log("Hello" + " " + name);
// }
// setTimeout(greet,0);
// sayName("Karan");

//================================
// Callback Function Example
function greet(name, myFunction) {
  console.log("Hello world");
  myFunction(name);
}
function sayName(name) {
  console.log("Hello" + " " + name);
}
setTimeout(greet, 8000, "Gokul", sayName);

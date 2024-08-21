function demo() {
  console.log("setTimeout Demo!");
}
setTimeout(demo, 3000); 

greet("World");

function greet(name) {
  console.log("Hello " + name);
}

//====================

console.log(arrowFunc);
var arrowFunc = () => {
  console.log("Arrow Function");
};

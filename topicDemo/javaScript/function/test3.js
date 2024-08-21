let demo = function () {
  console.log("Example of anonymous functions");
};
demo();
//=============================
let area = function (length, breadth) {
  return length * breadth;
};
let x = area(10, 5);
console.log("Area of the rectangle is = ", x);

//=================================

function greet(wish) {
  console.log(wish(), "everyone!");
} 
const wish = function () {
  return "Good Morning";
}
greet(wish);
greet(function(){
  return "Hello";
})

//=================================
setTimeout(function () {
  console.log("I will run after 5 seconds!");
}, 5000);

let a = true;
let b = true;
let c = false;

if (a && b && c) {
  console.log(" conditions are true");
} else {
  console.log("condition is false");
}

//========================
// let isAdult = true;
// let hasID = true;
// let isSober = true;

// if (isAdult && hasID && isSober) {
//   console.log("You can enter the bar");
// } else {
//   console.log("You cannot enter the bar");
// }

//=======================

function isEven(num) {
  return num % 2 === 0;
}
function isPositive(num) {
  return num > 0;
}
let num1 = 4;
if (isEven(num1) && isPositive(num1)) {
  console.log("The number is even and positive");
} else {
  console.log("The number is not even and positive");
}

let a = true;
let b = false;
let c = true;

if (a || b || c) {
  console.log("At least one condition is true");
} else {
  console.log("All conditions are false");
}
//============================================

let hasPermission = false;
let isVIP = false;
let hasTicket = false;

if (hasPermission || isVIP || hasTicket) {
  console.log("You can enter the event");
} else {
  console.log("You cannot enter the event");
}
//===============================

function isEven(num) {
  return num % 2 === 0;
}
function isPositive(num) {
  return num > 0;
}
let num1 = -4;
if (isEven(num1) || isPositive(num1)) {
  console.log("The number is either even or positive or both");
} else {
  console.log("The number is neither even nor positive");
}

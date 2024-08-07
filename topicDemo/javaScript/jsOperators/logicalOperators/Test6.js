function isEven(num) {
  return num % 2 === 0;
}
function isPositive(num) {
  return num > 0;
}
let num1 = -4;
let num2 = -3;
let num3 = 2;
if (
  (isEven(num1) && isPositive(num1)) ||
  (isEven(num2) && isPositive(num2)) ||
  (isEven(num3) && isPositive(num3))
) {
  console.log("At least one number is even and positive");
} else {
  console.log("No number is both even and positive");
}

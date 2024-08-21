// test-1
let num1 = 70;
let num2 = num1;
console.log(num1);//70
console.log(num2);//70
num1 = 40;
console.log(num1);//40
console.log(num2);//40,70

// test-2
function multiplication(tmp) {
  tmp = tmp * 50;
  return tmp;
}
var num = 30;
var result = multiplication(num);
console.log(num); //30
console.log(result); //1500

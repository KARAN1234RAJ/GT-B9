let userAge;
let defaultAge = 18;

let ageToCheck = userAge || defaultAge;

console.log(ageToCheck);

//============================
function sayHello() {
  console.log("Hello");
  return true;
}
let isUserLoggedIn = false;
if (isUserLoggedIn && sayHello()) {
  console.log("User is logged in and greeted");
} else {
  console.log("User is not logged in");
}

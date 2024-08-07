function isAdult(age) {
  return age >= 18;
}
function hasPermission(hasDrivingLicense, isSuspended) {
  return hasDrivingLicense && !isSuspended;
}
let age = 25;
let hasDrivingLicense = true;
let isSuspended = false;
if (isAdult(age) && hasPermission(hasDrivingLicense, isSuspended)) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

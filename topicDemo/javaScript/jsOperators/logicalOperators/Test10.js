let a = true;
let b = false;
let c = true;
let d = false;

if ((a && b) || (c && d)) {
  console.log("At least one AND condition is true");
} else {
  console.log("Both AND conditions are false");
}

//=============================================

let age = 20;
let hasID = true;
let isSober = false;

if ((age >= 18 && hasID) || isSober) {
  console.log("You can enter the club");
} else {
  console.log("You cannot enter the club");
}


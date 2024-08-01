//1
// if (typeof variable === "undefined") {
//   console.log("condition True");
// } else {
//   console.log("condition False");
// }
//2
// if (variable === null) {
//   console.log("condition True");
// } else {
//   console.log("condition False");
// }
// 3
// if (null == undefined) {
//   console.log("condition True");
// } else {
//   console.log("condition False");
// }
//4
// if (null === undefined) {
//   console.log("condition True");
// } else {
//   console.log("condition False");
// }

//5
// function doNothing() {}
// console.log(doNothing());

// 6
function checkUndefined(x) {
  if (typeof x === "undefined") {
    console.log("x is undefined");
  } else {
    console.log("x is not undefined");
  }
}

checkUndefined();
checkUndefined(5);

//7
console.log(2+null);
console.log(2+undefined);

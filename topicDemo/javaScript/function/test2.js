// let obj1 = { website: "GrowTech" };
// let obj2 = obj1;
// console.log(obj1);
// console.log(obj2);
// obj1.website = "GrowTech Indore";
// console.log(obj1);
// console.log(obj2);
//============================
let originalObj = {
  name: "GrowTech",
  rating: 4.5,
  topic: "JavaScript",
};
function demo(tmpObj) {
  tmpObj.rating = 5;
  console.log(tmpObj.rating);
}
console.log(originalObj.rating);//4.5
demo(originalObj);//5
console.log(originalObj.rating);//5
//==========================

let originalArr = ["GrowTech", "Indore", "is", "the"];

function pushArray(tmpArr) {
  tmpArr.push("best");
  console.log(tmpArr);
}

console.log(originalArr);
pushArray(originalArr)
console.log(originalArr);

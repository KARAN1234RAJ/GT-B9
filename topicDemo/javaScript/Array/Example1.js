// literal Way
var arr = [1, 2, 3, "Hello"];
console.log(arr); //1,2,3,Hello
// Constructor way
// let newArray = new Array(1,"Grow","Tech")
// console.log(newArray);
arr.push(20);
console.log(arr); //1,2,3, Hello, 20
arr.pop();

console.log(arr); //1,2,3, Hello
console.log(arr[3]);
arr[3] = "Hello And Welcome";
console.log(arr.length);

// Array Traversing
let AspirantsName = ["Gokul","Khushi","Murli","Divya","Tanushree"];
AspirantsName.unshift("Ankita");
console.log(AspirantsName.indexOf("Divya"));
AspirantsName[4]="Divya Ji";

for(let i = 0; i < AspirantsName.length; i++){
    console.log(AspirantsName[i]);
}

let count = 0;
let defaultCount = 10;
var result = count || defaultCount;
console.log(result);//0, 10

let text = "";
let defaultText = "Default";
var result = text || defaultText;
console.log(result);//"",default

let isActive = false;
let defaultActive = true;
var result = isActive || defaultActive;
console.log(result);// true,true

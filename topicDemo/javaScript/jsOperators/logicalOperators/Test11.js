let count = 0;
let defaultCount = 10;

let result = count ?? defaultCount;
console.log(result);

let text = "";
let defaultText = "Default";

result = text ?? defaultText;
console.log(result);

let isActive = false;
let defaultActive = true;

result = isActive ?? defaultActive;
console.log(result);

// let value = NaN;
// let defaultValue = 100;

// let result = value ?? defaultValue;
// console.log(result);
//============================
// let value = NaN;
// let defaultValue = 100;

// let result = value || defaultValue;
// console.log(result);

//============================
// let count = 0;
// let defaultCount = 10;

// let result = count ?? defaultCount;
// console.log(result);

// result = count || defaultCount;
// console.log(result);

//===============================
// let text = "";
// let defaultText = "Default";

// let result = text ?? defaultText;
// console.log(result);

// result = text || defaultText;
// console.log(result);

//============================
let isActive = false;
let defaultActive = true;

let result = isActive ?? defaultActive;
console.log(result);

result = isActive || defaultActive;
console.log(result);

//==================================

let config = {
  port: null,
  host: undefined,
  retries: NaN,
};

let port = config.port ?? 8080;
let host = config.host ?? "localhost";
let retries = config.retries ?? 5;

console.log(port); 
console.log(host); 
console.log(retries); 

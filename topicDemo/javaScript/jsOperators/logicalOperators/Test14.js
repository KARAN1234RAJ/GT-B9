// let value = NaN;
// let defaultValue = 100;

// let result = value ?? defaultValue;
// console.log(result);//NaN
//============================
// let value = NaN;
// let defaultValue = 100;

// let result = value || defaultValue;
// console.log(result);//100

//============================
// let count = 0;
// let defaultCount = 10;
// let result = count ?? defaultCount;
// console.log(result);//0
// result = count || defaultCount;
// console.log(result);//10

//===============================
// let text = "";
// let defaultText = "Default";

// let result = text ?? defaultText;
// console.log(result);//""

// result = text || defaultText;
// console.log(result);//default

//============================
// let isActive = false;
// let defaultActive = true;

// let result = isActive ?? defaultActive;
// console.log(result);//false

// result = isActive || defaultActive;
// console.log(result);// true

//==================================

let config = {
  port: null,
  host: undefined,
  retries: NaN,
};

let port = config.port ?? 8080;
let host = config.host ?? "localhost";
let retries = config.retries ?? 5;

console.log(port); //8080
console.log(host); //localhost
console.log(retries); //NaN

let userInput = null;
let defaultValue = "GrowTech";
let finalValue = userInput ?? defaultValue ?? "Fallback Value";
console.log(finalValue);// GrowTech

//==============Setting Default Value===
function greet(name) {
  name = name ?? "Guest";
  console.log(`Hello, ${name}!`);
}

greet();// 
greet("Karan");

//====================
let primary = null;
let secondary = undefined;
let tertiary = "Tertiary";

let value = primary ?? secondary ?? tertiary ?? "Default";
console.log(value); //Tertiary

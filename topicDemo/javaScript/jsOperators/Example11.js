let a = 10;
let b = "10";
let c = 10;

console.log(a === b);

console.log(a === c);

//==================

34 === "34";
34 !== "34";
//===================
let a1 = NaN;
let b1 = 10;

console.log(a1 === b1);
console.log(a1 !== b1);
//============================
null === null;
undefined === undefined;
null === undefined;
//======================
let car1 = {
  name: "Audi",
};

let car2 = {
  name: "Audi",
};

console.log(car1 === car1);

console.log(car1 === car2);

console.log(car1 !== car1);

console.log(car1 !== car2);

//========================
console.log(2 == 2);

console.log(2 == "2");

console.log(false == false);

console.log(false == 0);

let student1 = {
  name: "John",
  class: 10,
};

let student2 = {
  name: "John",
  class: 10,
};

let student3 = {
  name: "Peter",
  class: 10,
};

console.log(student1 == student1);

console.log(student1 == student2);

console.log(student1 == student3);

//======================================

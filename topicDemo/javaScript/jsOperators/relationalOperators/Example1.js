// test-1
console.log(5 == "5");
console.log("hello" == "hello");
console.log(0 == false);

// test-2
console.log(5 === "5");
console.log("hello" === "hello");
console.log(0 === false);

// test-3
console.log(5 != "5");
console.log("hello" != "world");
console.log(0 != false);

// test-4
console.log(5 !== "5");
console.log("hello" !== "world");
console.log(0 !== false);

// test-5
console.log(10 > 5);
console.log(5 > 10);
console.log(5 > 5);

// test-6
console.log(10 >= 5);
console.log(5 >= 10);
console.log(5 >= 5);

// test-7
console.log(5 < 10);
console.log(10 < 5);
console.log(5 < 5);

// test-8
console.log(5 <= 10);
console.log(10 <= 5);
console.log(5 <= 5);

// test-9
let age = 18;
if (age >= 18) {
  console.log("You are eligible for admission.");
} else {
  console.log("You are not eligible for admission.");
}

// test -10
console.log("apple" < "banana");
console.log("apple" > "Apple");
console.log("apple" === "apple");

// test -11
let userInput = "5";
let requiredNumber = 5;
if (userInput == requiredNumber) {
  console.log("Loose equality, types are converted: true");
}
if (userInput === requiredNumber) {
  console.log("Strict equality, types are not converted: false");
} else {
  console.log("Strict equality, types are not converted: true");
}

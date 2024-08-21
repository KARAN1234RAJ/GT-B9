//Creating a JavaScript Object
// 1. Using an Object Literal
// let person = {
//   name: "Harsh",
//   age: 3,
//   city: "Gaya",
// };
// console.log(person);

//2. Using the new Object() Constructor

// const car = new Object();
// car.make = "Toyota";
// car.model = "Corolla";
// car.year = 2020;

// console.log(car.make);

//3. Using the Object.create() Method

// const animal = Object.create(null);
// animal.species = "Mammal";
// animal.eat = function () {
//   console.log("I am eating");
// };
//======================
// const proto = {
//   greet: function () {
//     console.log("Hello, " + this.name);
//   },
// };

// const personOne = Object.create(proto);
// personOne.name = "Charlie";
// personOne.greet();

//4.Using a Constructor Function
// function personOne(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log("Hello, " + this.name);
//   };
// }

// const person1 = new personOne("Karan", 25);
// const person2 = new personOne("Harsh", 28);

// person1.greet();
// person2.greet();

//======================

// function createPerson(name, age) {
//   return {
//     name: name,
//     age: age,
//     greet: function () {
//       console.log("Hello, " + this.name);
//     },
//   };
// }

// const person1 = createPerson("Rohit", 40);
// person1.greet();
//===================

// const name = "Emli ";
// const age = 35;

// const person = { name, age };

// console.log(person);

//===================

let laptop = new Object();

laptop.brand = "Lenovo";
laptop.model = "ThinkPad";
console.log(laptop);
// let arr = [];
// console.log(arr);

//=================

let animal = {
  species: "Mammal",
  eat: function (food) {
    console.log("I am eating", food);
  },
};

let dog = Object.create(animal);
console.log(dog);
dog.eat("Food");

//==========================
let course = {
  name: "JavaScript",
  duration: "6 months",
  instructor: "Karan",
};

console.log(course);
let Address = {
  city: "Indore",
  state: "Mp",
};
console.log(Address);

let CourseDetails = Object.assign({}, course, Address);

console.log(CourseDetails);
//==========================

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
let person1 = new Person("Gokul", "27", "M");
let person2 = new Person("Saloni", "26", "F");

console.log(person1);
console.log(person2);

//=========================
class Book{
  constructor(title, author, publicationYear){
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
}
let Geeta = new Book("Shreemad Bhagwat Gita","VedVyas","400bce")
console.log(Geeta);


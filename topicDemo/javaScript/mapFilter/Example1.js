let num = [1, 2, 3, 4, 5, 6];
let numSqr = num.map((num) => num * num);

console.log(numSqr);
let result = num.filter((num) => num * num > 20);
console.log(result);

//======================

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];
// console.log(users);
// let result1 = users.filter((user) => user.age > 25).map((user) => user.name);
// console.log(result1);
// let name = result1.map((user) => user.name);
// console.log(name);

// console.log(
//   users.filter((user) => user.name === "Charlie").map((usr) => usr.age)
// );

//=======================

const products = [
  { name: "Laptop", categories: ["Electronics", "Computers"] },
  { name: "Shirt", categories: ["Apparel", "Men"] },
  { name: "Coffee Maker", categories: ["Home", "Kitchen"] },
];
console.log(
  products.map((product) => `${product.categories[0]}:${product.name}`)
);

//============================

const students = [
  { name: "Alice", grades: [85, 90, 78] },
  { name: "Bob", grades: [60, 65, 70] },
  { name: "Charlie", grades: [95, 100, 92] },
];
let filterData = students
  .filter(
    (student) =>
      student.grades.reduce((acc, grade) => acc + grade, 0) /
        student.grades.length >=
      70
  )
  .map((student) => {
    const average = Math.floor(
      student.grades.reduce((acc, grade) => acc + grade, 0) /
        student.grades.length
    );
    console.log(average);

    return { name: student.name, avg: average };
  });
console.log(filterData);

//====================================
/*Assume you have an array of people, each with a list of hobbies. You want to create a new array of names of people who have a particular hobby, say "reading", and you want to include the number of their other hobbies in the result.*/

const people = [
  { name: "Emma", hobbies: ["reading", "swimming"] },
  { name: "John", hobbies: ["cooking", "football", "gaming"] },
  { name: "Lucy", hobbies: ["reading", "drawing", "singing"] },
  { name: "Mark", hobbies: ["golf", "chess", "reading", "dancing"] },
];

const data = people
  .filter((person) => person.hobbies.includes("reading"))
  .map((person) => {
    return {
      name: person.name,
      otherHobbiesCount: person.hobbies.filter((hobby) => hobby != "reading")
        .length,
    };
  });
console.log(data);

// Output: [
//   { name: "Emma", otherHobbiesCount: 1 },
//   { name: "Lucy", otherHobbiesCount: 2 },
//   { name: "Mark", otherHobbiesCount: 3 }
// ]

//=============================
/**
 * Imagine you have a complex object representing employees, where each employee has a list of projects. You want to create an array of project names for each employee, but only for employees who are "active".
 */

const employees = [
  {
    name: "Alice",
    status: "active",
    projects: [{ title: "Project A" }, { title: "Project B" }],
  },
  { name: "Bob", status: "inactive", projects: [{ title: "Project C" }] },
  {
    name: "Charlie",
    status: "active",
    projects: [{ title: "Project D" }, { title: "Project E" }],
  },
];

let projectList = employees
  .filter((employee) => employee.status === "active")
  .map((data) => {
    return { name: data.name, projects: data.projects };
  });
console.log(projectList);

// Output: [
//   { name: "Alice", projects: ["Project A", "Project B"] },
//   { name: "Charlie", projects: ["Project D", "Project E"] }
// ]

//=================================

/**
Suppose you have an array of users, each with an array of tasks, and each task has a completed boolean flag. You want to create a new array of all task titles that are marked as completed across all users.
 */

const users = [
  {
    name: "Alice",
    tasks: [
      { title: "Task 1", completed: true },
      { title: "Task 2", completed: false },
    ],
  },
  {
    name: "Bob",
    tasks: [
      { title: "Task 3", completed: true },
      { title: "Task 4", completed: true },
    ],
  },
  {
    name: "Charlie",
    tasks: [
      { title: "Task 5", completed: false },
      { title: "Task 6", completed: true },
    ],
  },
];

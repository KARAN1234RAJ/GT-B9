// let num = [1, 2, 3, 4, 5, 6];
// let numSqr = num.map((num) => num * num);

// console.log(numSqr);
// let result = num.filter((num) => num * num > 20);
// console.log(result);

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

// const products = [
//   { name: "Laptop", categories: ["Electronics", "Computers"] },
//   { name: "Shirt", categories: ["Apparel", "Men"] },
//   { name: "Coffee Maker", categories: ["Home", "Kitchen"] },
// ];
// console.log(
//   products.map((product) => `${product.categories[0]}:${product.name}`)
// );

//============================

// const students = [
//   { name: "Alice", grades: [85, 90, 78] },
//   { name: "Bob", grades: [60, 65, 70] },
//   { name: "Charlie", grades: [95, 100, 92] },
// ];
// let filterData = students
//   .filter(
//     (student) =>
//       student.grades.reduce((acc, grade) => acc + grade, 0) /
//         student.grades.length >=
//       70
//   )
//   .map((student) => {
//     const average = Math.floor(
//       student.grades.reduce((acc, grade) => acc + grade, 0) /
//         student.grades.length
//     );
//     console.log(average);

//     return { name: student.name, avg: average };
//   });
// console.log(filterData);

//====================================
/*Assume you have an array of people, each with a list of hobbies. You want to create a new array of names of people who have a particular hobby, say "reading", and you want to include the number of their other hobbies in the result.*/

// const people = [
//   { name: "Emma", hobbies: ["reading", "swimming"] },
//   { name: "John", hobbies: ["cooking", "football", "gaming"] },
//   { name: "Lucy", hobbies: ["reading", "drawing", "singing"] },
//   { name: "Mark", hobbies: ["golf", "chess", "reading", "dancing"] },
// ];

// const data = people
//   .filter((person) => person.hobbies.includes("reading"))
//   .map((person) => {
//     return {
//       name: person.name,
//       otherHobbiesCount: person.hobbies.filter((hobby) => hobby != "reading")
//         .length,
//     };
//   });
// console.log(data);

// Output: [
//   { name: "Emma", otherHobbiesCount: 1 },
//   { name: "Lucy", otherHobbiesCount: 2 },
//   { name: "Mark", otherHobbiesCount: 3 }
// ]

//=============================
/**
 * Imagine you have a complex object representing employees, where each employee has a list of projects. You want to create an array of project names for each employee, but only for employees who are "active".
 */

// const employees = [
//   {
//     name: "Alice",
//     status: "active",
//     projects: [{ title: "Project A" }, { title: "Project B" }],
//   },
//   { name: "Bob", status: "inactive", projects: [{ title: "Project C" }] },
//   {
//     name: "Charlie",
//     status: "active",
//     projects: [{ title: "Project D" }, { title: "Project E" }],
//   },
// ];

// let projectList = employees
//   .filter((employee) => employee.status === "active")
//   .map((data) => {
//     return { name: data.name, projects: data.projects };
//   });
// console.log(projectList);

// Output: [
//   { name: "Alice", projects: ["Project A", "Project B"] },
//   { name: "Charlie", projects: ["Project D", "Project E"] }
// ]

//=================================

/**
Suppose you have an array of users, each with an array of tasks, and each task has a completed boolean flag. You want to create a new array of all task titles that are marked as completed across all users.
 */

// const users = [
//   {
//     name: "Alice",
//     tasks: [
//       { title: "Task 1", completed: true },
//       { title: "Task 2", completed: false },
//     ],
//   },
//   {
//     name: "Bob",
//     tasks: [
//       { title: "Task 3", completed: true },
//       { title: "Task 4", completed: true },
//     ],
//   },
//   {
//     name: "Charlie",
//     tasks: [
//       { title: "Task 5", completed: false },
//       { title: "Task 6", completed: true },
//     ],
//   },
// ];

// let tasks = users
//   .map((user) => user.tasks)
//   .flat()
//   .filter((task) => task.completed)
//   .map((task) => task.title);
// console.log(tasks);

// Output: ["Task 1", "Task 3", "Task 4", "Task 6"]

//=============================
/**Imagine you have an array of event objects, each with a date and type property. You want to find all events that are of type "conference" and happened in the past, then map them to an array of their names.*/
// const events = [
//   { name: "Event 1", date: new Date("2023-06-15"), type: "conference" },
//   { name: "Event 2", date: new Date("2024-08-01"), type: "webinar" },
//   { name: "Event 3", date: new Date("2022-11-30"), type: "conference" },
//   { name: "Event 4", date: new Date("2023-09-10"), type: "workshop" }
// ];

/**Suppose you have an array of users, each with a profile object that includes their location. You want to filter out users who are not located in "New York" and then map them to a new array of their full names. */
// const users = [
//   { firstName: "Alice", lastName: "Johnson", profile: { location: "New York" } },
//   { firstName: "Bob", lastName: "Smith", profile: { location: "Los Angeles" } },
//   { firstName: "Charlie", lastName: "Brown", profile: { location: "New York" } }
// ];

//========================
/**Suppose you have an array of orders, each with an orderDate and total. You want to group the orders by year and calculate the total revenue for each year. */

// const orders = [
//   { orderDate: new Date("2023-01-15"), total: 250 },
//   { orderDate: new Date("2023-06-30"), total: 450 },
//   { orderDate: new Date("2022-09-10"), total: 300 },
//   { orderDate: new Date("2022-12-20"), total: 400 },
//   { orderDate: new Date("2021-07-25"), total: 600 }
// ];

//====================
/**Imagine you have an array of products, each with a price and a discounted boolean. You want to filter out products that are not discounted and then apply an additional 10% discount to the remaining products. */
const products = [
  { name: "Laptop", price: 1000, discounted: true },
  { name: "Phone", price: 600, discounted: false },
  { name: "Tablet", price: 450, discounted: true },
  { name: "Monitor", price: 300, discounted: false },
];

const discountedProducts = products
  .filter((product) => product.discounted)
  .map((product) => {
    // const discount = product.price * 0.1;
    return { name: product.name, price: product.price * 0.9 };
  });
console.log(discountedProducts);
/**Suppose you have an array of users, and you want to map each user to a new object that includes their name and a role property, which should be "admin" if their isAdmin flag is true, or "user" otherwise. */
const users = [
  { name: "Alice", isAdmin: true },
  { name: "Bob", isAdmin: false },
  { name: "Charlie", isAdmin: false },
  { name: "David", isAdmin: true },
];
let newUsers = users.map((user) => {
  return { 
    name: user.name, 
    role: user.isAdmin ? "admin" : "user"
   };
});
console.log(newUsers);

/**Assume you receive an array of posts from an API, each with a title, body, and tags. You want to filter out posts that don't contain a specific tag (e.g., "JavaScript") and then map the remaining posts to an array of their titles. */
const posts = [
  { title: "Post 1", body: "Content 1", tags: ["JavaScript", "Web"] },
  { title: "Post 2", body: "Content 2", tags: ["CSS", "Design"] },
  { title: "Post 3", body: "Content 3", tags: ["JavaScript", "React"] },
  { title: "Post 4", body: "Content 4", tags: ["Node.js", "Backend"] },
];

/**Suppose you have an array of employee records, each with name, department, and salary. You want to filter out employees who are not in the "Engineering" department and then create a new array that includes only their names and a 20% increased salary. */
const employees = [
  { name: "Alice", department: "Engineering", salary: 75000 },
  { name: "Bob", department: "Sales", salary: 55000 },
  { name: "Charlie", department: "Engineering", salary: 80000 },
  { name: "David", department: "HR", salary: 50000 },
];

/**Suppose you have an array of objects representing books, each with title, author, and rating. You want to filter out books with a rating lower than 4.5 and then map the remaining books to a string that includes the title and author. */
const books = [
  { title: "Book A", author: "Author A", rating: 4.8 },
  { title: "Book B", author: "Author B", rating: 4.2 },
  { title: "Book C", author: "Author C", rating: 4.9 },
  { title: "Book D", author: "Author D", rating: 4.3 },
];

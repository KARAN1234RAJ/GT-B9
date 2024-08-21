// //company object
// let company = {
//   name: "A",
//   pay: function () {
//     console.log("Paying");
//   },
// };
// //worker object
// let worker = {
//   id: 1,
//   work: function () {
//     console.log("Working");
//   },
// };
//  //worker object inherits company object
// worker.__proto__ = company;
// console.log(worker);
// worker.pay();

///========================================

// let company = {
//   name: "ABC",
//   pay: function () {
//     console.log("Paying");
//   },
// };
// let intern = Object.create(company, {
//   experience: { value: 2 },
// }); //creating intern object from company object
// console.log(intern.experience);
// console.log(intern.name);

//=====================

let workers = [];
console.log(workers.constructor);
let company = {
  name: "BEST",
};
console.log(company.constructor);

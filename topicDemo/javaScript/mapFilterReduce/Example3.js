//Sum of an Array

// const numbers = [1, 2, 3, 4,4, 5];
// const sum = numbers.reduce((acc, curr) => {
//   console.log(`acc= ${acc} and curr =${curr}`);

//   return acc + curr;

// },0)

// console.log(sum);

//Finding the Maximum Value in an Array

// const numbers = [10, 25, 5, 40, 15];
// const max = numbers.reduce(
//   (acc, curr) => {
//     console.log(`acc= ${acc} and curr =${curr}`);
//     return(curr > acc ? curr : acc)
//   },
// );
// console.log(max);

//Flattening an Array of Arrays

// const arrays = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);

// console.log(flattened);

// const arrays = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);

// console.log(flattened);

// Removing Duplicates from an Array
const numbers = [1, 2, 3, 2, 4, 3, 5, 4];

const uniqueNumbers = numbers.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(uniqueNumbers);

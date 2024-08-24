// const simplePromise = new Promise((resolve) => {
//   resolve("This is a simple resolved promise");
// });

// simplePromise.then((message) => {
//   console.log(message);
// });
//============
// const simpleRejectPromise = new Promise((resolve, reject) => {
//   reject("This promise was rejected");
// });

// simpleRejectPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//======

const checkEven = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("The number is even");
    } else {
      reject("The number is odd");
    }
  });
};

checkEven(4)
  .then((message) => {
    console.log(message); // Outputs: The number is even
  })
  .catch((error) => {
    console.error(error);
  });

checkEven(5)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

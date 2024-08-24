const checkNumber = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("Number is greater than 10");
    } else {
      reject("Number is less than or equal to 10");
    }
  });
};

checkNumber(15)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

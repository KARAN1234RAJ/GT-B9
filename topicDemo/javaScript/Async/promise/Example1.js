const promIse = new Promise((resolve, reject) => {
  let anyCondition = true;
  if (anyCondition) {
    resolve("Promise is resolved");
  } else {
    reject("Promise is rejected");
  }
})
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
});
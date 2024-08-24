// Create a thenable promise-like object
// const thenablePromise = {
//      then(onFulfilled, onRejected) {
//        setTimeout(() => {
//          const result = Math.random();
//          if (result > 0.5) {
//            onFulfilled(result);
//          } else {
//            onRejected(new Error('Promise rejected'));
//          }
//        }, 1000);
//      }
//    };
//    thenablePromise
//      .then((result) => {
//        console.log('Fulfilled:', result);
//      }, (error) => {
//        console.error('Rejected:', error);
//      });

//========================

// Creating a new promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 1000);
});

myPromise.then((value) => {
  console.log(value);

});

console.log(myPromise);


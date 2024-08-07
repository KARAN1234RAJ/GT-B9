for (let i = 5; i < 5; i++) {
  console.log(i);
}
//============
let i = 5;
while (i < 5) {
  console.log(i);
  i++;
}
//==========

let j = 5;
do {
  console.log(j);
  j++;
} while (j < 5);

//===================
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
//=====================
let k = 0;
while (k < 10) {
  if (k === 5) {
    break;
  }
  console.log(k);
  k++;
}
//======================
// for (let i = 0; i < 10; i++) {
//      if (i === 5) {
//          continue;
//      }
//      console.log(i);
//  }
//===========
// let i = 0;
// while (i < 10) {
//     i++;
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }
//=========================
// function sum(a, b) {
//      return a + b;
//  }

//  let result = sum(5, 3);
//  console.log(result);
//===========================
// try {
//   let result = riskyOperation();
//   console.log(result);
// } catch (error) {
//   console.error("An error occurred:", error);
// } finally {
//   console.log("This will run regardless of the outcome.");
// }

// function riskyOperation() {
//   throw new Error("Oops!");
// }

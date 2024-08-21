// array = [11, 12, 13, 14, 15];
// for (i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

//==========================
// idx = 0;
// array = [11, 12, 13, 14, 15];
// while (idx < array.length) {
//   console.log(array[idx]);
//   idx++;
// }

//================================

// array = [11, 12, 13, 14, 15];

// array.forEach(function (val) {
//   console.log(val);
// });

//============================

// const directions = ['North', 'South', 'East', 'West'];
// function demo (val, idx, array) {
//   console.log(val);
//   if (idx === array.length - 1) {
//     console.log ('End of directions');
//   }
// }
// directions.forEach(demo);

//=============================

// array = [97, 98, 99, 100, 100];
// const under_hundred = (x) => x <= 100;
// if (array.every(under_hundred)) {
//   console.log("All are less than 100");
// } else {
//   console.log("At least one element is not less than 100");
// }

//===============================

// array = [11, 12, 13, 14, 15];
// sqr = (z) => Math.pow(z, 2);
// powers = array.map(sqr);
// console.log(array);
// console.log(powers);

//=======================

array = [11, 12, 13, 14, 15, 16];

even_num = (x) => x % 2 !== 0;
even_arr = array.filter(even_num);
deleteElement = (x) => x !== 16;
restArray = array.filter(deleteElement);
console.log(array);
console.log(even_arr);
console.log(restArray);

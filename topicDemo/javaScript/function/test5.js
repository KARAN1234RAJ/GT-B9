//test-1
// let x = a => a * a;
// console.log(x(10));

//test-2
let x = (a, n) => {
  let pow = 1;
  for (let i = 0; i < n; i++) {
    pow = pow * a;
  }
  return pow;
};
console.log(x(10, 3));

//test-3


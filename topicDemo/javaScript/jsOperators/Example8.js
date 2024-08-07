const x = +3;
const y = -x;
console.log(x); //3
console.log(y); //-3

const z = -"0xFF";
console.log(z); 

const w = -"123e-5";
console.log(w); 

const n = -"3.14";
console.log(n); // -3.14

console.log(-true); // NaN
console.log(-false); // NaN
console.log(-null); // 0
console.log(+true); //1
console.log(+false); // 0
console.log(+null); // 0
console.log(true); // 1
console.log(false); // 0
console.log(null); //0
console.log(
  -function (val) {
    return val;
  }
); 
console.log(-1n);

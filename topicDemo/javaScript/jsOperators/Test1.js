// Test-1
// let a, b, c;
// a = b = c = 5;
// let exp = a + b++ + ++c;
// console.log(exp); // 16

// Test-2

// let a, b, exp = 10;
// a = b = 5;
// exp += ++a * b++;
// console.log(exp);// 40

// Test-3

// let a = 11;
// a = a++ + ++a;
// console.log(a);

// Test-4

// let a = 11,
//   b = 22,
//   c;

// c = a + b + a++ + b++ + ++a + ++b;

// console.log("a=" + a);//13
// console.log("b=" + b);//24
// console.log("c=" + c);// 103

// Test-5
// let x = 0;
// x = x++ - --x + ++x - x--;

// console.log("x=" + x);// 0

// Test-6
// let y = true;
// y++;
// console.log(y);//2

// Test-7
// let i = 1,j = 2,k = 3;
// let m = i-- - j-- - k--;
// console.log("i=" + i);// 0
// console.log("j=" + j);//1
// console.log("k=" + k);//2
// console.log("m=" + m);//-3,-4

// Test-8
// let a = 1,
//   b = 2;

// console.log(--b - ++a + ++b - --a);//0

// Test-9
// let i = 19,j = 29,k;
// k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
// console.log("i=" + i);//18,19
// console.log("j=" + j);// 29,28
// console.log("k=" + k);//-3,11

// Test-10
// let i = 11;
// let j = --(i++);
// console.log(j);

// Test-11

// let m = 0,n = 0;
// let p = --m * --n * n-- * m--;
// console.log(p);// 1
// console.log(m,n);// -2,-2

// Test -12
console.log(5++);// 6, 5,5,5

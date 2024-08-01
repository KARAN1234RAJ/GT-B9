var n1 = 9007199254740991n;
var n2 = BigInt(9007199254740991);

console.log(n1);
console.log(n2);

const num1 = 112233445566778899233445566778894556646n; //BigInt number declared by appendening n.
const num2 = BigInt(112233445566778899233445566778894556646); //Bignint number declared by calling constructor
const num3 = BigInt("112233445566778899233445566778894556646"); //BigInt number declared by calling constructor where argument passed is a string.

console.log(num1);
console.log(num2);
console.log(num3);

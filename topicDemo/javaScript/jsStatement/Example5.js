function example(x) {
  if (x) {
    console.log("If statement is executed");
  } else {
    console.log("Else statement is executed");
  }
}
let flag1 = true;
let flag2 = false;
example(flag1);//3
example(flag2);//5
let a = 10;
let b = 100;
let c = 10;
example(a == b);//5
example(a == c);//3

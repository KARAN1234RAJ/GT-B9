// const nullValue = null;
// const emptyText = "";
// const someNumber = 42;

// const valA = nullValue ?? "default for A";
// const valB = emptyText ?? "default for B";
// const valC = someNumber ?? 0;

// console.log(valA);//default for A
// console.log(valB);//""
// console.log(valC);//42

//=============================
// const count = 0;
// const text = "";

// const qty = count || 42;
// const message = text || "hi!";
// console.log(qty);//42
// console.log(message);//hi
//==================================

function a() {
  console.log("a was called");
  return undefined;
}
function b() {
  console.log("b was called");
  return false;
}
function c() {
  console.log("c was called");
  return "foo";
}
console.log(a() ?? c());//c,foo
console.log(b() ?? c());//b,false

//==============================



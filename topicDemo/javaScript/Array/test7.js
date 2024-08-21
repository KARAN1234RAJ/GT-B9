// let [itemOne, , itemThree] = ["egg", "butter", "bread"];

// console.log(itemOne);
// console.log(itemThree);

//===================
// let [itemOne, itemTwo, itemThree] = ["egg", "butter"];

// console.log(itemOne, itemTwo, itemThree);
//======================

let [itemOne, itemTwo, itemThree = "bread"] = ["egg", "butter"];

console.log(itemOne, itemTwo, itemThree);

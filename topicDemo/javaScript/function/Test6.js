// const functionToBecalled = () => {
//   console.log("This is the function to be finally called!");
// };

// const callingFunction = (functionToBeCalled) => {
//   functionToBeCalled();
// };

// callingFunction(functionToBecalled);
//=====================================
 const greater = () => {
     console.log("A is greater than B")
 }
 const smaller = () => {
     console.log("A is smaller than B")
 }
 const isAGreater = (a, b, big, small) =>{
     if(a>b){
         big();
     }else{
         small();
     }
 }
 isAGreater(230, 45, greater, smaller);
 
function performHeavyTask() {
     // Some heavy computation
     let result = 0;
     for (let i = 0; i < 1000000; i++) {
       result += i;
     }
     return result;
   }
   
   function createClosure() {
     const data = performHeavyTask();
     
     return function() {
       console.log(data);
     };
   }
   
   const closure = createClosure();
   closure();
   
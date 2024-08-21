let user = {
     getName: function() {
         return "Karan";
     }
 };
 
 // Without optional chaining
 let name = user && user.getName;
 console.log(name()); 
 
 // With optional chaining
 name = user?.getName;
 console.log(name()); 
 
 // If the method doesn't exist
 let age = user?.getAge;
 console.log(age); 
 
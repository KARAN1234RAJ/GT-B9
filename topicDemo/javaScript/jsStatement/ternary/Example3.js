var marks = 50;
if (marks >= 40) {
  console.log("Passed");
} else {
  console.log("Failed");
}

console.log(( marks >= 40 ) ? "Passed" : "Failed" );
//================
function getName( name )
{
    return name? name: "No argument was passed";
}

console.log(getName("Karan")); 
console.log(getName()); 

var str1 = `This is the first line
This is the second line
`;

var str2 = `This is an example of
multiline strings in 
javascript.`;

console.log(str1);
console.log(str2);

//

var MyName = "Karan";
var mathScore = 90;
var scienceScore = 80;

console.log(
  MyName +
    " has scored " +
    mathScore +
    " in maths and " +
    scienceScore +
    " in Science.\nThus his total score is = " +
    (mathScore + scienceScore) +
    "."
);

console.log(`${MyName} has scored ${mathScore} in maths and ${scienceScore} in Science.
     Thus his total score is = ${mathScore + scienceScore} .`);

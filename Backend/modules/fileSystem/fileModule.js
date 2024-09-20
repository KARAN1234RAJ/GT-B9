const fs = require("fs");
const fsPromise = require("fs/promises");

// console.log(fs);
/**
 * create director
 * Async way
 * sync way
 
console.log("Start");
fs.mkdir("./myDir", (error) => {
     console.log("inside callback");
     
  if (error) {
    console.error(error.message);
  } else {
    console.log("Directory created successfully");
  }
});

console.log("End");

console.log("Start");

try {
  fs.mkdirSync("./myDirSync1");
  console.log("Directory created successfully");
} catch (error) {
  console.error(error.message);
}

console.log("End");

// read directory

fs.readdir("./myDirSync", (error, files) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log("All files=>", files);
  }
});

// remove directory
fs.rmdir("./myDirSync",{recursive:true}, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Directory removed successfully");
  }
});

// operations on file
const content = "Hello how are you";
fs.writeFile("./nameList.txt", content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File saved!");
  }
});

const content = " Welcome to my world";
fs.appendFile("./nameList2.txt", content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File saved!");
  }
});



fs.readFile('./nameList.txt',"utf-8",(err,content)=>{
  if(err){
    console.error(err);
  }else{
    console.log("File content: ",content);
  }
})
 
const readFilePromise = async () => {
  try {
    const content = await fsPromise.readFile("./nameList.txt", "utf-8");
    console.log("File content: ", content);
  } catch (error) {
    console.log(error.message);
  } 
};

readFilePromise();
 */
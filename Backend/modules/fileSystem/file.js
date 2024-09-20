const { error } = require("console");
const fs = require("fs");
const fsPromise = require("fs/promises");

// Create a directory

// console.log(fs);
// make directory
// Async way
// sync way
// Async way
// console.log("Start");
// fs.mkdir("new", (error) => {
//   console.log("Inside callback");

//   if (error) {
//     console.log("Error: ", error);
//   } else {
//     console.log("Directory created successfully!");
//   }
// });
// console.log("End");

// Sync way
// try {
//   fs.mkdirSync("newDir");
//   console.log("Directory created successfully");
// } catch (error) {
//   console.log("Error: ", error);
// }

//Read a Directory

// console.log("Start");
// fs.readdir("./newDir", (error, dirs) => {
//   if (error) {
//     console.log("Error: ", error);
//   } else {
//     console.log("dirs in the directory: ", dirs);
//   }
// });

// Delete directory

// fs.rmdir("./newDir",{recursive:true}, (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Directory deleted successfully!");
//   }
// });

// Operations on file
// const name = "mohit raj"
// fs.writeFile("./stName.txt", name, (error) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("File created and written successfully");
//   }
// });

// fs.appendFile("./nameList.txt", " Harsh", (error) => {
//      if (error) {
//        console.error(error);
//      } else {
//        console.log("File created and written successfully");
//      }
//    });

// fs.readFile('./nameList.txt',"utf-8",(error,content)=>{
//       if(error){
//         console.error(error);
//       }else{
//      //    console.log("File content: ",content.toString());
//      console.log("File content: ",content);
//       }
//     });

// fsPromise
//   .readFile("./nameList.txt", "utf-8")
//   .then((content) => {
//     console.log("File content: ", content);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

const readFilePromise = async () => {
  try {
    const content = await fsPromise.readFile("./nameList.txt", "utf-8");
    console.log("File content: ", content);
  } catch (error) {
    console.log(error.message);
  }
};

readFilePromise();

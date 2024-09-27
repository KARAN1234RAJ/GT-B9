const EventEmitter = require("events");
const fs = require("fs");
/**
// start_login
const login = new EventEmitter();
console.log("Start---");
// start_login
const handleLogin = (userName) => {
  console.log(`${userName} started Login`);
  // save users in a file
  fs.appendFile("users.txt", JSON.stringify({ userName }), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${userName} logged in successfully`);
    }
  });
};
login.addListener("start_login", handleLogin);
// eventName --> failed_login

// end_login

login.emit("start_login", "Karan");
login.emit("start_login", "Harsh");
 
 const user_signup = new EventEmitter()
 //==>signup
 const handleSignup =(user)=>{
     if(user==="murli")
     {
     console.log(`${user} signed up successfully`)
     }
     else{
          console.log(`${user} failed to signup`)
     }
 }
 user_signup.on("signup",handleSignup)

 user_signup.emit("signup",'gokul')


const login = new EventEmitter();
// start_login
// login.addListener("start_login", () => {
//   console.log("User started login process");
// });
const handleLogin=(userName) => {
  console.log(`${userName} started login process`);
}
login.on("start_login", handleLogin);
login.emit("start_login","Karan");
login.emit("start_login","Atul");
 */
const EventEmitter = require("events");
const fs = require("fs");
/**
const eventEmitter = new EventEmitter();
console.log("Hello");
// Register a listener for the 'greet' event
eventEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
eventEmitter.emit("greet", "Karan Raj");
 
// event
// login scenario
const login = new EventEmitter(); // step-1
// eventName --> start_login // step-2 and step-3
login.addListener("start_login", () => {
  console.log("User started login process");
});

// eventName --> success_login

login.addListener("success_login", (username) => {
  console.log(`User ${username} logged in successfully`);
});

// eventName --> failed_login

login.addListener("failed_login", (username, error) => {
  console.log(`User ${username} failed to login due to ${error}`);
});

// Triggering the events step-4

login.emit("start_login");
login.emit("success_login", "Karan Raj");
login.emit("failed_login", "Grow", "Invalid credentials");

// Removing event listener

// check login scenario with user name

const loginUser = new EventEmitter();

loginUser.addListener("start_login", (username) => {
  console.log(`User ${username} started login process`);
});

loginUser.addListener("success_login", (username) => {
  console.log(`User ${username} logged in successfully`);
  // save the user in a file
  fs.appendFile(`./users`, JSON.stringify({ username }), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`User ${username} saved successfully`);
    }
  });
});

loginUser.addListener("failed_login", (username, error) => {
  console.log(`User ${username} failed to login due to ${error}`);
});

loginUser.emit("start_login", "Karan Raj");

setTimeout(() => {
  loginUser.emit("success_login", "Karan Raj");
}, 3000);

setTimeout(() => {
  loginUser.emit("failed_login", "Grow", "Invalid credentials");
}, 6000);
*/
/**
// handling multiple events

const sign_in = new EventEmitter();
console.log("inside sign_in event");

const signInHandler1 = (username, fileName) => {
  console.log("inside signInHandler1");
};

const signInHandler2 = (username, fileName) => {
  console.log("inside signInHandler2");
};

const signInHandler3 = (username, fileName) => {
  console.log("inside signInHandler3");
};

sign_in.addListener("sign_in", signInHandler1);

sign_in.addListener("sign_in", signInHandler2);
sign_in.emit("sign_in", "Karan Raj", "usersList");
sign_in.addListener("sign_in", signInHandler3);

sign_in.emit("sign_in", "Harsh Raj", "usersList");
 */

// Another way to handle the events

const sign_in = new EventEmitter();
console.log("inside sign_in event");
const signInHandler1 = (username, fileName) => {
  console.log("inside signInHandler1");
};

const signInHandler2 = (username, fileName) => {
  console.log("inside signInHandler2");
};
const signInHandler3 = (username, fileName) => {
  console.log("inside signInHandler3");
};
const signInHandler4 = () => {
  console.log("inside signInHandler4");
};

sign_in.once("sign_in", signInHandler1);
sign_in.once("sign_in", signInHandler2);

sign_in.emit("sign_in", "Karan Raj", "usersList");
// sign_in.off("sign_in", signInHandler2);

sign_in.on("sign_in", signInHandler3);

sign_in.emit("sign_in", "Harsh Raj", "usersList");
sign_in.off("sign_in", signInHandler3)
sign_in.on("sign_in", signInHandler4);
sign_in.emit("sign_in");

// more Methods
// removeAllListener -->for remove all
// listenerCount()---> count the listener
// once-->execute one and after off automatically

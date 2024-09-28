const mongoose = require("mongoose");
// load environment variables from.env file
// require("dotenv").config();
// make the connection with cloud DB
console.log("inside connect DB file", process.env.MONGODB_CONNECTION_URL);

mongoose
  .connect(process.env.MONGODB_CONNECTION_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Connection error:", error));

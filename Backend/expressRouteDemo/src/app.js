const express = require("express");
const productRouter = require("./routes/ProductRoute");
const { isLoggedIn, isValidUser } = require("./middleware");
const app = express();
app.use(express.json());
app.use(isLoggedIn)
app.use(isValidUser)
app.use("/product", productRouter);
app.get("/", (req, res) => {
  console.log("Home");

  res.send("Home Page");
});

module.exports = app;

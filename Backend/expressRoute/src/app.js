const express = require("express");
const app = express();
const productRouter = require("./routes/ProductRoute");
const middleware = require("./middleware");
console.log(middleware);
const { isLoggedIn, isValidUser } = middleware;
app.use(isLoggedIn);
app.use(isValidUser);
app.use(express.json());
app.use("/product", productRouter);
app.get("/product", (req, res) => {
  res.send("Hello World from product endpoint");
});

module.exports = app;

const express = require("express");
const productsRoute = require("./routes/ProductRouter");
const dotenv = require("dotenv");
dotenv.config();
require("./connectToDb");

const app = express();
app.use(express.json());
app.use("/products", productsRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;

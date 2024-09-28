const express = require("express");
const routes = express.Router();
const Product = require("../models/productModule");

// Middleware to check if user is logged in

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next()
//     }
//     res.redirect('/login')
// }

// Routes

routes.get("/shirt", (req, res) => {
  res.send("All Shirts");
});
// Create data
routes.post("/new", (req, res) => {
  console.log(req.body);
  Product.create(req.body)
    .then((data) => {
      console.log(data);
      // res.json(data);
    })
    .catch((err) => {
      console.log(err);
      // res.status(500).send('Error creating product')
    });

  res.send("New Product Added");
});
// read data from DB
routes.get("/all", (req, res) => {
  // res.send("All Products page");
  Product.find()
    .then((data) => {
      console.log(data);
      res.json({
        status: success, 
        total: data.length,
        products: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error getting products");
    });
});
module.exports = routes;

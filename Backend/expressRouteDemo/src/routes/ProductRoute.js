const express = require("express");
const router = express.Router();

router.get("/all", (req, res) => {
  res.json({ message: "All products" });
});

router.get("/:id", (req, res) => {
  res.json({ message: "Product details for id " + req.params.id });
});

router.get("/shirt", (req, res) => {
  res.json({ message: "All Shirts " });
});

router.get("/t_shirt", (req, res) => {
  res.json({ message: "Shirt details for id " });
});

module.exports = router;

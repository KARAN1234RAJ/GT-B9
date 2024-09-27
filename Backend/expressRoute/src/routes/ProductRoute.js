const express = require("express");

const router = express.Router();

router.get("/all", (req, res) => {
  res.json({ message: "All Products" });
});

router.get("/shirt", (req, res) => {
  res.json({ message: "All shirts list" });
});

router.get("/jins", (req, res) => {
     res.json({ message: "All Jins list" });
   });
module.exports = router;

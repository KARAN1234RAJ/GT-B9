const express = require("express");
const app = express();

const products = [
  { id: "101", name: "Shirt", category: "Clothing", price: 2000 },
  { id: "102", name: "saree", category: "Clothing", price: 4000 },
  { id: "103", name: "watch", category: "accessories", price: 3000 },
];

app.get("/products", (req, res) => {
  console.log(req.url);
  console.log(req.headers);
  res.send(products);
});

const PORT = 4500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const app = express();

const products = [
  { id: "101", name: "Shirt", category: "Clothing", price: 2000 },
  { id: "102", name: "saree", category: "Clothing", price: 4000 },
  { id: "103", name: "watch", category: "accessories", price: 3000 },
];
// All Methods of API
app.get("/", (req, res) => {
  res.send("Hello World!");
});
 
app.get("/users", (req, res) => {
  res.send("GET request to /users");
});

app.post("/users", (req, res) => {
  res.send("POST request to /users");
});

app.put("/users/:id", (req, res) => {
  res.send(`PUT request to /users/${req.params.id}`);
});

app.delete("/users/:id", (req, res) => {
  res.send(`DELETE request to /users/${req.params.id}`);
});
// Operations of Products

app.get("/products", (req, res) => {
  res.send(products);
});


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

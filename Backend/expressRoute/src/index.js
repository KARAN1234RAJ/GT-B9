const app = require("./app");
// Set up environment variables
const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.PORT);


/**
const products = [
  {
    id: 1,
    name: "Shirt",
    category: "Clothing",
    price: 2000,
    brand: "Levis",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Pants",
    category: "Clothing",
    price: 3000,
    brand: "Puma",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Shoes",
    category: "Footwear",
    price: 5000,
    brand: "Nike",
    inStock: true,
    rating: 4.8,
  },
  // Add more products here
  // ...
];

// Get all products

app.get("/products", (req, res) => {
  res.json(products);
});

// Get product by ID

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((product) => product.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found." });
  }
});

// Create a new product

app.post("/products/new", (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json({
    message: "Product created successfully.",
    data: newProduct,
  });
});

// Update a product

app.put("/products/update/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;

  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found." });
  }

  products[productIndex] = { ...products[productIndex], ...updatedProduct };

  res.json({
    message: "Product updated successfully.",
    data: products[productIndex],
  });
});

// Delete a product

app.delete("/products/delete/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found." });
  }

  products.splice(productIndex, 1);

  res.json({
    message: "Product deleted successfully.",
    data: products,
  });
});
 */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

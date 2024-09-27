const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

const products = [
  {
    id: 1,
    name: "Shirt",
    category: "Clothing",
    price: 2000,
    brand: "Levis",
    inStock: true,
    rating: 4.5,
    discount: "10%",
  },
  {
    id: 2,
    name: "Pants",
    category: "Clothing",
    price: 3000,
    brand: "Wrangler",
    inStock: true,
    rating: 4.0,
    discount: "15%",
  },
  {
    id: 3,
    name: "Smartphone",
    category: "Electronics",
    price: 15000,
    brand: "Samsung",
    inStock: false,
    rating: 4.7,
    discount: "5%",
  },
  {
    id: 4,
    name: "Laptop",
    category: "Electronics",
    price: 55000,
    brand: "HP",
    inStock: true,
    rating: 4.8,
    discount: "8%",
  },
  {
    id: 5,
    name: "Running Shoes",
    category: "Footwear",
    price: 4000,
    brand: "Nike",
    inStock: true,
    rating: 4.3,
    discount: "12%",
  },
  {
    id: 6,
    name: "Backpack",
    category: "Accessories",
    price: 1500,
    brand: "Wildcraft",
    inStock: true,
    rating: 4.1,
    discount: "10%",
  },
  {
    id: 7,
    name: "Wrist Watch",
    category: "Accessories",
    price: 5000,
    brand: "Fossil",
    inStock: false,
    rating: 4.6,
    discount: "20%",
  },
  {
    id: 8,
    name: "Headphones",
    category: "Electronics",
    price: 2500,
    brand: "Sony",
    inStock: true,
    rating: 4.2,
    discount: "10%",
  },
  {
    id: 9,
    name: "Microwave Oven",
    category: "Home Appliances",
    price: 12000,
    brand: "LG",
    inStock: true,
    rating: 4.4,
    discount: "7%",
  },
  {
    id: 10,
    name: "Blender",
    category: "Home Appliances",
    price: 3000,
    brand: "Philips",
    inStock: true,
    rating: 4.0,
    discount: "5%",
  },
];

// Root Route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Route to Get Products with Optional Filtering
app.get("/products", (req, res) => {
  const { category, priceRange } = req.query;

  let filteredProducts = products;

  // Filter by category (case-insensitive)
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter by price range
  if (priceRange) {
    const [minPrice, maxPrice] = priceRange.split("-").map(Number);
    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    } else {
      return res.status(400).json({
        error: "Invalid price range format. Use 'minPrice-maxPrice' format.",
      });
    }
  }

  // Return filtered products or a message if none found
  if (filteredProducts.length > 0) {
    res.json({
      total: filteredProducts.length,
      products: filteredProducts,
    });
  } else {
    res
      .status(404)
      .json({ message: "No products found matching the criteria." });
  }
});

// Get a Single Product by ID using Route Parameters
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === parseInt(id));

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found." });
  }
});
// POST METHODS
// Create a new product

app.post("/products/new", (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json({
    message: "Product created successfully.",
    total: products.length,
    product: products,
  });
});
// updating product
app.put("/product/update/:id", (req, res) => {
  // need id
  // need complete data
  const { id } = req.params;
  const updatedProduct = req.body;
  const index = products.findIndex((product) => product.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: "Product not found." });
  }
  products[index] = { ...products[index], ...updatedProduct };
  res.json({
    message: "Product updated successfully.",
    product: products
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

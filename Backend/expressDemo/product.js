const express = require("express");

const app = express();
app.use(express.json());
const products = [
  {
    id: 1,
    name: "Shirt",
    price: 2000,
    category: "Clothing",
    brand: "Levi's",
    size: "M",
    color: "Blue",
    stock: 150,
    rating: 4.5,
    discount: 10,
    description: "A comfortable cotton shirt perfect for casual wear.",
  },
  {
    id: 2,
    name: "Pants",
    price: 3000,
    category: "Clothing",
    brand: "Zara",
    size: "L",
    color: "Black",
    stock: 100,
    rating: 4.0,
    discount: 15,
    description: "Stylish black pants with a slim fit design.",
  },
  {
    id: 3,
    name: "Saree",
    price: 5000,
    category: "Clothing",
    brand: "Sabyasachi",
    size: "Free Size",
    color: "Red",
    stock: 50,
    rating: 4.8,
    discount: 20,
    description: "A traditional silk saree with intricate embroidery.",
  },
  {
    id: 4,
    name: "Jeans",
    price: 2500,
    category: "Clothing",
    brand: "Wrangler",
    size: "32",
    color: "Denim Blue",
    stock: 200,
    rating: 4.3,
    discount: 5,
    description: "Classic denim jeans with a comfortable fit.",
  },
  {
    id: 5,
    name: "Watch",
    price: 4000,
    category: "Accessories",
    brand: "Fossil",
    model: "FS5452",
    color: "Silver",
    stock: 75,
    rating: 4.7,
    discount: 25,
    description: "Elegant silver watch with a minimalist design.",
  },
  {
    id: 6,
    name: "Handbag",
    price: 3500,
    category: "Accessories",
    brand: "Michael Kors",
    color: "Brown",
    material: "Leather",
    stock: 60,
    rating: 4.6,
    discount: 18,
    description: "Luxury leather handbag with multiple compartments.",
  },
  {
    id: 7,
    name: "Sneakers",
    price: 3000,
    category: "Footwear",
    brand: "Nike",
    size: "9",
    color: "White",
    stock: 180,
    rating: 4.4,
    discount: 12,
    description: "Comfortable and stylish sneakers for everyday wear.",
  },
  {
    id: 8,
    name: "Perfume",
    price: 2500,
    category: "Beauty",
    brand: "Chanel",
    scent: "Floral",
    volume: "50ml",
    stock: 120,
    rating: 4.9,
    discount: 30,
    description: "A long-lasting floral fragrance that captivates the senses.",
  },
  {
    id: 9,
    name: "Laptop Bag",
    price: 4500,
    category: "Accessories",
    brand: "Targus",
    material: "Nylon",
    color: "Black",
    stock: 90,
    rating: 4.2,
    discount: 20,
    description: "Durable laptop bag with multiple pockets and padding.",
  },
  {
    id: 10,
    name: "Jacket",
    price: 6000,
    category: "Clothing",
    brand: "North Face",
    size: "M",
    color: "Grey",
    material: "Polyester",
    stock: 130,
    rating: 4.8,
    discount: 10,
    description:
      "Warm and water-resistant jacket, ideal for outdoor activities.",
  },
];

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/products", (req, res) => {
  res.send({
    total: products.length,
    data: products,
  });
});
// getting single product

app.get("/products/:productId", (req, res) => {
  console.log(req.params);
  const { productId } = req.params;

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  if (!product) {
    return res.status(404).send("Product not found");
  }
  res.send(product);
});

// By category

app.get("/products/category/:category", (req, res) => {
  console.log(req.params);
  const { category } = req.params;

  const productsByCategory = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  if (productsByCategory.length === 0) {
    return res.status(404).send("Products not found in this category");
  }
  res.send(productsByCategory);
});

//
app.get("/products/:id", (req, res) => {
  const productId = req.params.id; // Route parameter
  const { material } = req.query; // Query parameter
  res.send(`Product ID: ${productId}, material: ${material}`);
});
// creating new product
app.post("/product/new", (req, res) => {
  const newProduct = req.body;
  console.log(newProduct);
  products.push(newProduct);

  res.send({
    message: "Product created successfully",
    data: newProduct,
  });
});
// update product
app.put("/product/update/:productId", (req, res) => {
  // select--> req.params
  //req.body
  // rewrite
  const { productId } = req.params;
  const updatedProduct = req.body;
  console.log(updatedProduct);
  const productIndex = products.findIndex(
    (product) => product.id === parseInt(productId)
  );
  if (productIndex === -1) {
    return res.status(404).send("Product not found");
  }
  products[productIndex] = updatedProduct;

  res.send({
    message: "Product updated successfully",
    total: products.length,
    data: products,
  });
});

const PORT = 1000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

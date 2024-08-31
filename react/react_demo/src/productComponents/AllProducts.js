import React from "react";

import "./style.css";

const Products = (props) => {
  // console.log("PropsData", props.data);
  const products = props.data
  console.log(products);
  
  return <div id="mainContainer">
{products.map((product)=>{
  return <div key={product.id} id="productContainer">
    <h2 id="productTitle">{product.title}</h2>
    <img id="productImage" src={product.image} alt={product.title} />
    {/* <p>{product.description}</p> */}
    <p>${product.price}</p>
  </div>
})}
  </div>;
};

export default Products;

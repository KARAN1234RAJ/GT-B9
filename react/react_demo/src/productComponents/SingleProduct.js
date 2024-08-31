import React from "react";
import "./style.css";
const SingleProduct = (props) => {
  const product = props.data[2];
  const { id, title, price, description, category, image, rating } = product;
  console.log(id);
  console.log(category);

  return (
    <div id="productContainer">
      <h1 id="productTitle">{title}</h1>
      <img id="productImage" src={image} alt={title} />
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
      <p>
        Rating: {rating.rate} ({rating.count} votes)
      </p>
    </div>
  );
};

export default SingleProduct;

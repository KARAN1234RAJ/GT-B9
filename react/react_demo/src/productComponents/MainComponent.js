import React, { useState } from "react";
import Products from "./AllProducts";
import SingleProduct from "./SingleProduct";
import NavBar from "./NavBar";
import { ProductsData } from "./../data/ProductsData";

const MainComponent = () => {
  const [data, setData] = useState(ProductsData);
  // console.log(ProductsData);

  return (
    <div>
      <NavBar />
      <Products data ={data}/>
      {/* <SingleProduct data={data} /> */}
    </div>
  );
};

export default MainComponent;

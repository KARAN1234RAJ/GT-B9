import React from "react";
import "./style.css";

const NavBar = () => {
  return (
    <div id="navContainer">
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          {" "}
          <a>Products</a>
        </li>
        <li>
          {" "}
          <a>Product</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

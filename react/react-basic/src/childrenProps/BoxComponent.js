// BoxComponent.js
import React from "react";

const BoxComponent = (props) => {
  return (
    <div style={{ border: "2px solid green", padding: "20px" }}>
      {props.children}
    </div>
  );
};

export default BoxComponent;

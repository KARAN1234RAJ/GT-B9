import React from "react";

const ContainerComponent = ({ children }) => {
  return (
    <section style={{ backgroundColor: "lightgray", padding: "15px" }}>
      {children}
    </section>
  );
};

export default ContainerComponent;

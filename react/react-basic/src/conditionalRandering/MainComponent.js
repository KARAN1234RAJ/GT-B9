import React, { useState } from "react";
import Component2 from "./Component2";
import Component1 from "./Component1";

const MainComponent = () => {
  const [isAdmin, setIsAdmin] = useState("user");
  const handleClick = () => {
    setIsAdmin(isAdmin === "user" ? "admin" : "user");
  };
  console.log(isAdmin);

  return (
    <div>
      {isAdmin === "user" ? <Component1 /> : <Component2 />}

      <button onClick={() => handleClick()}>Click</button>
    </div>
  );
};

export default MainComponent;

import React, { useState } from "react";

const Sum = () => {
  const topicName = "React";
  const [name, setName] = useState("JavaScript");

  return (
    <div>
      <h1>Topic Name is {name}</h1>
    </div>
  );
};

export default Sum;

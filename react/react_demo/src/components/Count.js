import React from "react";
import { data } from "../data/Data.js";

const Count = () => {
  var [index, setIndex] = React.useState(0);
  const increaseCount = () => {
    setIndex(index + 1);
  };
  const movieData = data[index];
  return (
    <div>
      <h1>{movieData.title}</h1>
      <button onClick={() => increaseCount()}>next</button>
    </div>
  );
};

export default Count;

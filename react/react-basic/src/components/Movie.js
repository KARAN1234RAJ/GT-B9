import React, { useState } from "react";
import { moviesData } from "../data/MoviesData";

const Movie = () => {
  const [index, setIndex] = useState(0);
  console.log(moviesData);

  const nextIndex = () => {
    console.log(index);
    if (index >= moviesData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prevIndex = () => {
    console.log(index);
    if (index <= 0) {
      setIndex(moviesData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const data = moviesData[index];
  return (
    <div>
      <h1>
        {data.title} {index}
      </h1>
      <button onClick={() => prevIndex()}>prev</button>
      <img src={data.poster} alt={data.title} />
      <button onClick={() => nextIndex()}>next</button>
    </div>
  );
};

export default Movie;

import React, { useState } from "react";

const LikeBtn = () => {
  const [like, setLike] = useState(0);
  const increaseLike = () => {
    setLike(like + 1);
  };
  return (
    <div>
      <h1 style={{color:"red",backgroundColor:"pink", display:"none"}}>{like}</h1>
      <button onClick={() => increaseLike()}>LikeMe</button>
    </div>
  );
};

export default LikeBtn;

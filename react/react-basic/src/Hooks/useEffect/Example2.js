import React, { useEffect, useState } from "react";

const Example2 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("#")
      .then((response) => response.json())
      .then((data) => setData(data));

    // Optional cleanup
    return () => {
      console.log("Cleanup on unmount or update");
    };
  }, []); // Empty array ensures it runs only on mount

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};

export default Example2;

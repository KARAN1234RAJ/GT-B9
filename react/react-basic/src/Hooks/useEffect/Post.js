import React, { useState, useEffect } from "react";
import axios from "axios";

const Post = () => {
  const [postData, setPostData] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/posts";
  const fetchData = () => {
    axios.get(api).then((response) => {
      // console.log(response.data);
      setPostData(response.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(postData);
  const post = postData.map((post) => {
    return (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>Fetching Data</h1>
      {post}
    </div>
  );
};

export default Post;

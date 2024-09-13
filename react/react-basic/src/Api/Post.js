import React, { useEffect, useState } from "react";

const Post = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/posts";
  const postData = async () => {
    const response = await fetch(url);
    const posts = await response.json();
    setData(posts);
    setIsLoading(false);
  };
  useEffect(() => {
    postData();
  }, []);
  console.log(data);
  const post = data.map((item) => {
    return (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        <hr />
      </div>
    );
  });
  const addPost = async () => {
    const newPost = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New Post-2",
        body: "This is a new post-2",
        userId: 101,
     
     
      }),
    });
    const newData = await newPost.json();
    setData([...data, newData]);
  };
  return (
    <>
      {isLoading ? (
        <h1>Loading...............</h1>
      ) : (
        <>
          <div>{post}</div>
          <button onClick={() => addPost()}>Add Post</button>
        </>
      )}
    </>
  );
};

export default Post;

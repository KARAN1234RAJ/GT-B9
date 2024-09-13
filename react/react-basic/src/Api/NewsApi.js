import React, { useEffect, useState } from "react";

const NewsApi = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const api_url =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d75118449e5148a4ae3f517868dec207";

  const fetchNewsData = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      setNewsData(data.articles);
      //  setIsLoading(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // delay the loading state for 2 seconds before showing the news data.
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  useEffect(() => {
    fetchNewsData();
    return () => {
      // cleanup
    };
  }, []);
  const postData = () => {
    fetch(api_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Data posted successfully", data))
      .catch((error) => console.error("Error posting data", error));
  };
  console.log(newsData);
  const news = newsData.map((data) => {
    return (
      <div key={data.url}>
        <h2>{data.title}</h2>
        <img src={data.urlToImage} alt={data.title} height={350} width={450} />
        <p>{data.description}</p>
        <p>{data.content}</p>
      </div>
    );
  });
  return (
    <div>
      {isLoading ? (
        <h1>Loading.......</h1>
      ) : (
        <>
          {news}
          {/* <button onClick={() => postData()}>AddData</button> */}
        </>
      )}
    </div>
  );
};

export default NewsApi;

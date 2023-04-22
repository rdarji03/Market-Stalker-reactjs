import React, { useState } from "react";
import { useEffect } from "react";

const Stocknews = ({ stock_name }) => {
  const [news, setnews] = useState();
  if (stock_name === undefined) {
    stock_name = "AAPL";
  }
  useEffect(() => {
    const fetchData = async () => {
      const stock_news_url = `https://api.polygon.io/v2/reference/news?ticker=${stock_name}&limit=5&apiKey=B1Q2GnpC7LkFbaouZR3YxNgrtTcgGalG`;
      const stock_news_response = await fetch(stock_news_url);
      const stock_news = await stock_news_response.json();
      setnews(stock_news.results);
    };
    fetchData();
  }, [stock_name]);
  return (
    <div className="stock_news_container">
      <div className="news_head">
        <h1 className="text-xl font-bold leading-none text-black dark:text-white self-center	text-center	">
          Trending NEWS
        </h1>
      </div>
      <div className="news_container flex justify-center md:flex-row md:items-start md:flex-wrap flex-col items-center">
        {news?.map((news_data) => {
          return (
            
            <a
              target="_blank"
              rel="noreferrer"
              href={news_data?.article_url}
              className="newscard w-[17rem]  bg-white border border-gray-900 rounded-lg shadow m-[0.5rem] h-[20rem]"
            >
              <div className="news_img ">
                <img
                  src={news_data?.image_url}
                  alt=""
                  className="w-[100%] h-[10rem] border rounded-t-lg"
                />
              </div>
              <div className="news_details p-[0.5rem] flex flex-col justify-center h-[10rem]">
                <div className="news_title">{news_data?.title}</div>               
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Stocknews;

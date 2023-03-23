import React from "react";
import { useEffect } from "react";

const Stocknews = ({ stock_name }) => {
  useEffect(() => {
    const fetchData = async () => {
      

      const stock_news_url = `https://api.polygon.io/v2/reference/news?ticker=AAPL&limit=5&apiKey=B1Q2GnpC7LkFbaouZR3YxNgrtTcgGalG`;
      const stock_news_response = await fetch(stock_news_url);
      const stock_news = await stock_news_response.json();
      console.log(stock_news);
    };
    fetchData();
  }, [stock_name]);
  return (
    <div className="stock_news_container">
      <div className="news_head">
        <h1 className="text-xl font-bold leading-none text-black dark:text-white">
          {stock_name}-NEWS
        </h1>
      </div>
      <div className="news_card  w-[17rem]  bg-white border border-gray-200 rounded-lg shadow">
        <div className="news_title">
          Apple to Spend Billions More on Entertainment
        </div>
        <div className="news_details">
          <div className="news_desc">
            <h4>
              Description:Technologies of the future could drive two companies
              into the most exclusive club in the stock market.
            </h4>
          </div>
          <div className="news_date">
            <h4>Date:</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stocknews;

import React, { useEffect, useState } from "react";

const News = () => {
  const [stock_top_news, set_stock_news] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "content-type": "application/octet-stream",
          "X-RapidAPI-Key":
            "2458ee7fcemsh7ecda95d97d8826p1c0687jsn29e1368376f0",
          "X-RapidAPI-Host": "global-stock-market-api-data.p.rapidapi.com",
        },
      };
      const stock_top_news_url = `https://global-stock-market-api-data.p.rapidapi.com/news/most_popular_news`;
      const stock_top_news_url_response = await fetch(
        stock_top_news_url,
        options
      );
      const stock_news = await stock_top_news_url_response.json();
      set_stock_news(stock_news);
      console.log(stock_news.slice(0, 5));
    };
    fetchData();
  }, []);

  return (
    <section className="news_container">
      <div className="news_heading ">Today's NEWS</div>
      <div className="news_box  my-[2rem]">
        <div className="top_news">
          <h1 className=" text-center font-bold text-2xl">Top-NEWS</h1>
          <div className="top-news-container flex justify-center flex-wrap md:flex-row flex-col items-center">
            {stock_top_news?.slice(0, 5).map((news_data) => {
              return (
                <a href={news_data?.newsUrl}  className=" border rounded-lg border-blue-400 bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-[15rem] m-2 flex flex-col justify-between ">
                  <div class="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 ">
                    {news_data?.postedBy}
                  </div>
                  <div className="p-6">
                    <h5 className="text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50 h-[3rem]">
                      {news_data?.newsTitle.slice(0,50)}...
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 flex items-center">
                      
                    </p>
                  </div>
                  <div className="border-t-2 border-neutral-100  dark:border-neutral-600 dark:text-neutral-50 p-2">
                    {news_data?.postedOn}
                  </div>
                </a>
              );
            })}{" "}
          </div>
        </div>
        <div className="stock_news"></div>
        <div className="bse_news"></div>
        <div className="crypto_news"></div>
      </div>
    </section>
  );
};

export default News;

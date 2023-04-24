import React, { useEffect, useState } from "react";

const ForexNews = () => {
  const [forex_news, set_forex_news] = useState();
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
      const stock_forex_news_url = `https://global-stock-market-api-data.p.rapidapi.com/news/forex_news/1`;
      const stock_forex_news_url_response = await fetch(
        stock_forex_news_url,
        options
      );
      const stock_forex_news = await stock_forex_news_url_response.json();
      set_forex_news(stock_forex_news);
    };
    fetchData();
  }, []);

  return (
    <section className="forex_news_container">
      <div className="forex_news_heading">
        <h1 className="text-center font-bold text-2xl">Forex NEWS</h1>{" "}
      </div>
      <div className="top-news-container flex justify-center flex-wrap md:flex-row flex-col items-center">
        {forex_news?.slice(0, 5).map((news_data) => {
          return (
            <a
              href={news_data?.newsUrl}
              target="_blank"
              rel="noreferrer"
              className=" border rounded-lg border-blue-400 bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  w-[15rem] m-2 flex flex-col justify-between "
            >
              <div class="border-b-2 border-neutral-100 px-6 py-3   text-black ">
                {news_data?.postedBy}
              </div>
              <div className="p-6">
                <h5 className="text-l font-medium leading-tight text-black h-[3rem]">
                  {news_data?.newsTitle.slice(0, 50)}...
                </h5>
                <p className="mb-4 text-base   text-black flex items-center"></p>
              </div>
              <div className="border-t-2 border-neutral-100    text-black p-2">
                {news_data?.postedOn}
              </div>
            </a>
          );
        })}{" "}
      </div>
    </section>
  );
};

export default ForexNews;

import React, { useEffect, useState } from "react";
import SLoader from "../Loader/SLoader";

const CryptoNews = () => {
  const [crypto_news, set_crypto_news] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);

      const crypto_news_url = `https://global-stock-market-api-data.p.rapidapi.com/news/cryptocurrency_news/1`;
      const crypto_news_url_response = await fetch(crypto_news_url, options);
      const crypto_news = await crypto_news_url_response.json();
      set_crypto_news(crypto_news);
      setIsLoading(false);

    };
    fetchData();
  }, []);

  return (
    <section className="crypto_news_container py-[4rem]">
      <div className="news_box ">
        <div className="top_news">
          <h1 className=" text-center font-bold text-2xl ">Crypto-NEWS</h1>
          <div className="top-news-container flex justify-center flex-wrap md:flex-row flex-col items-center">
            {isLoading ? (
              <SLoader/>
            ) : (
              crypto_news?.slice(0, 5).map((news_data) => {
                return (
                  <a
                    href={news_data?.newsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className=" border rounded-lg border-blue-400 bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  text-black w-[15rem] m-2 flex flex-col justify-between "
                  >
                    <div class="border-b-2 border-neutral-100 px-6 py-3 text-black  ">
                      {news_data?.postedBy}
                    </div>
                    <div className="p-6">
                      <h5 className="text-l font-medium leading-tight  text-black h-[3rem]">
                        {news_data?.newsTitle.slice(0, 50)}...
                      </h5>
                      <p className="mb-4 text-base  text-black flex items-center"></p>
                    </div>
                    <div className="border-t-2  text-black p-2">
                      {news_data?.postedOn}
                    </div>
                  </a>
                );
              })
            )}{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoNews;

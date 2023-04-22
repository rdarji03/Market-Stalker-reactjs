import React from "react";
import { useEffect, useState } from "react";
const StockHistory = ({ stock_name }) => {
  const [stockdetail, setstockdetail] = useState();
  const [display, setdisplay] = useState();
  const [error, seterror] = useState();
  if (stock_name === undefined) {
    stock_name = "AAPL";
  }

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "2458ee7fcemsh7ecda95d97d8826p1c0687jsn29e1368376f0",
          "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
        },
      };

      const stock_info_url = `https://twelve-data1.p.rapidapi.com/time_series?symbol=${stock_name}&interval=1day&outputsize=1&format=json`;
      const stock_news_url_response = await fetch(stock_info_url, options);
      const stock_data = await stock_news_url_response.json();
      if (stock_data.code===400) {
        seterror("error please enter NASDAQ stock or check stock spelling");
        setdisplay("hidden")
      } else {
        seterror("");
        setdisplay("block")
        setstockdetail(stock_data);
      }

      console.log(stock_data);
    };
    fetchData();
  }, [stock_name]);

  return (
    <>
      <section className="stock_prof flex justify-center  my-4">
        {error}
        <div className={"stock_card w-[17rem]  bg-white border border-gray-900 rounded-lg shadow  dark:border-gray-700 flex justify-center flex-col items-center "+(display)}>
          <div className="stock_name bg-blue-900 w-[100%] border border-gray-200 rounded-t-lg p-2">
            <h1 className="text-xl font-bold leading-none text-white dark:text-white text-center ">
              {stockdetail?.meta?.symbol}
            </h1>
          </div>
          <div className="stock_detail p-4">
            {stockdetail?.values.map((data) => {
              return (
                <>
                  <h4 className="md:py-1">
                    High : {parseFloat(data?.high).toFixed(2)}$
                  </h4>
                  <h4 className="md:py-1">
                    Low : {parseFloat(data?.low).toFixed(2)}$
                  </h4>
                  <h4 className="md:py-1">
                    Open : {parseFloat(data?.open).toFixed(2)}$
                  </h4>
                  <h4 className="md:py-1">
                    Close : {parseFloat(data?.close).toFixed(2)}$
                  </h4>
                  <h4 className="md:py-1">Volume :{data?.volume}</h4>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default StockHistory;

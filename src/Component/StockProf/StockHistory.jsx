import React from "react";
import { useEffect, useState } from "react";
const StockHistory = ({ stock_name }) => {
  const [stockdata, setstockdata] = useState();
  if (stock_name === undefined) {
    stock_name = "AAPL";
  }

  
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2458ee7fcemsh7ecda95d97d8826p1c0687jsn29e1368376f0',
          'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
        }
      };

      const stock_info_url = `https://twelve-data1.p.rapidapi.com/time_series?symbol=${stock_name}&interval=1day&outputsize=1&format=json`;
      const current_weather_response = await fetch(stock_info_url,options);
      const stock_data = await current_weather_response.json();
      setstockdata(stock_data);
      console.log(stock_data);
    };
    fetchData();
  }, [stock_name]);

  return (
    <>
      <section className="stock_prof flex justify-center my-[2rem]">
        <div className="stock_card w-[17rem] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex justify-center flex-col items-center">
          <div className="stock_name ">
            <h1 className="text-xl font-bold leading-none text-gray-900 dark:text-white py-1">{stockdata?.meta?.symbol}</h1>
          </div>
          <div className="stock_detail ">
          {
            stockdata?.values.map((data)=>{
              return (
                <>
                <h4 className="md:py-1">High : {parseFloat(data?.high).toFixed(2)}$</h4>
                <h4 className="md:py-1">Low : {parseFloat(data?.low).toFixed(2)}$</h4>
                <h4 className="md:py-1">Open : {parseFloat(data?.open).toFixed(2)}$</h4>
                <h4 className="md:py-1">Close : {parseFloat(data?.close).toFixed(2)}$</h4>
                <h4 className="md:py-1">Volume :{data?.volume}</h4>
                </>
              )
            })
          }

            
          </div>
        </div>
      </section>
    </>
  );
};

export default StockHistory;

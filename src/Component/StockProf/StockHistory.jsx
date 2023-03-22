import React from "react";
import { useEffect,useState } from "react";
const StockHistory = ({ stock_name }) => {
  const [stockdata, setstockdata] = useState();
  if (stock_name===undefined) {
    stock_name="APPL"
  }
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
          "2458ee7fcemsh7ecda95d97d8826p1c0687jsn29e1368376f0",
          "X-RapidAPI-Host": "stock-prices2.p.rapidapi.com",
        },
      };
      console.log(stock_name)
      
      const stock_info_url =
      `https://stock-prices2.p.rapidapi.com/api/v1/resources/stock-prices/1d?ticker=${stock_name}`;
      const current_weather_response = await fetch(stock_info_url, options);
      const stock_data = await current_weather_response.json();
      console.log(stock_info_url);
      console.log(stock_data);
    };
    fetchData();
  }, [stock_name]);

  return (
    <>

    </>
  );
};

export default StockHistory;

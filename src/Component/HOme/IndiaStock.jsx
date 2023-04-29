import React, { useEffect, useState } from "react";
import StatsLoader from "../Loader/Statsloader";

const IndiaStock = () => {
  const [indian_stock, set_indian_stock] = useState();
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
      const indian_stock_url = `https://global-stock-market-api-data.p.rapidapi.com/stocks_countrywise_by_price/india`;
      const indian_stock_url_response = await fetch(indian_stock_url, options);
      const indian_stock_data = await indian_stock_url_response.json();
      console.log(indian_stock_data);
      set_indian_stock(indian_stock_data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <section className="indices_container flex justify-center my-2">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-fit">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr className="md:flex">
                <th
                  scope="col"
                  className="px-6 py-3 md:flex md:justify-center md:w-[12rem]"
                >
                  Index Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 md:flex md:justify-center md:w-[12rem] hidden"
                >
                  high
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 md:flex md:justify-center md:w-[12rem] hidden"
                >
                  low
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 md:flex md:justify-center md:w-[12rem] hidden"
                >
                  last
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 md:flex md:justify-center md:w-[12rem]"
                >
                  Change Percentage
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 md:flex md:justify-center md:w-[12rem] hidden"
                >
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <StatsLoader />
              ) : (
                indian_stock?.slice(0, 10).map((index_data) => {
                  return (
                    <tr className="bg-white border-b md:flex">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium md:flex md:justify-center md:w-[12rem]"
                      >
                        {index_data?.name}
                      </th>
                      <td className="px-6 py-3 md:flex md:justify-center md:w-[12rem] hidden">
                        {index_data?.high}
                      </td>
                      <td className="px-6 py-3 md:flex md:justify-center md:w-[12rem] hidden">
                        {index_data?.low}
                      </td>
                      <td className="px-6 py-3 md:flex md:justify-center md:w-[12rem] hidden">
                        {index_data?.last}
                      </td>
                      <td className="px-6 py-3 md:flex md:justify-center md:w-[12rem]">
                        {index_data?.changePercentage}
                      </td>
                      <td className="px-6 py-3 md:flex md:justify-center md:w-[12rem] hidden">
                        {index_data?.time}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default IndiaStock;

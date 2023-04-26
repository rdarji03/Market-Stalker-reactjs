import React, { useEffect, useState } from "react";

const Cryptos = () => {
  const [crypto, set_crypto_data] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "content-type": "application/octet-stream",
          "X-RapidAPI-Key":
            "2458ee7fcemsh7ecda95d97d8826p1c0687jsn29e1368376f0",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };
      const crypto_data_url = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=0`;
      const crypto_data_url_response = await fetch(
        crypto_data_url,
        options
      );
      const crypto_data = await crypto_data_url_response.json();
      console.log(crypto_data.data.coins);
      set_crypto_data(crypto_data.data.coins);
    };
    fetchData();
  }, []);
  return (
    <section className="indices_container flex justify-center">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-fit">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="md:flex">
              <th
                scope="col"
                className="px-6 py-3 md:flex md:justify-center md:w-[12rem]"
              >
                Symbol
              </th>
              <th
                scope="col"
                className="px-6 py-3 md:flex md:justify-center md:w-[12rem] hidden"
              >
                Crypto Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 md:flex md:justify-center md:w-[12rem] hidden"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 md:flex md:justify-center md:w-[12rem] hidden"
              >
                Change
              </th>
              <th
                scope="col"
                className="px-6 py-3 md:flex md:justify-center md:w-[12rem]"
              >
                Market Cap
              </th>
             
            </tr>
          </thead>
          <tbody>
            {crypto?.map((crypto_detail) => {
              return (
                <tr className="bg-white border-b md:flex">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium md:flex md:justify-center md:w-[12rem]"
                  >
                    <img src={crypto_detail?.iconUrl} alt="" srcset="" className="h-[2rem] w-auto"/>
                  </th>
                  <td className="px-6 py-3 md:flex md:justify-center md:w-[12rem] hidden">
                    {crypto_detail?.name}
                  </td>
                 
                  <td className="px-6 py-3 md:flex md:justify-center md:w-[12rem] hidden">
                    {crypto_detail?.price}
                  </td>
                  <td className="px-6 py-3 md:flex md:justify-center md:w-[12rem]">
                    {crypto_detail?.change}
                  </td>
                  <td className="px-6 py-3 md:flex md:justify-center md:w-[12rem] hidden">
                    {crypto_detail?.marketCap}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cryptos;

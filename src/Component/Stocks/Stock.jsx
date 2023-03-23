import React, { useState } from "react";
import Stocknews from "../StockNews/Stocknews";
import StockHistory from "../StockProf/StockHistory";
const Stock = () => {
  const [stockname, getstockname] = useState();
  const [stock, setstockname] = useState();

  function fetchStockName(e) {
    getstockname(e.target.value);
  }
  function setStockName() {
    setstockname(stockname);
  }

  return (
    <>
      <div className="stock-detail-container">
        <div className="input-data flex justify-center ">
          <form className="mt-[4rem]">
            <input
              type="text"
              placeholder="Search Stock"
              className="border border-black outline-1 p-1 rounded"
              onChange={fetchStockName}
              value={stockname || ""}
            />
            <button
              type="submit"
              className="border border-black p-1 bg-white rounded mx-2"
              onClick={(e) => {
                e.preventDefault();
                setStockName();
              }}
            >
              Search Stock
            </button>
          </form>
        </div>
      </div>
      <StockHistory stock_name={stock} />
      <Stocknews stock_name={stock} />
    </>
  );
};

export default Stock;

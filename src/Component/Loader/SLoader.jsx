import React from "react";
import loader from "./loader.gif"
const Loader = () => {
  return (
    <>
      <div className="screen_loader">
        <img src={loader} alt="" />
      </div>
    </>
  );
};

export default Loader;

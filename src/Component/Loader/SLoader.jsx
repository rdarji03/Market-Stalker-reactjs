import React from "react";
import loader from "./loader.gif"
const Loader = () => {
  return (
    <>
      <section className="screen_loader">
        <img src={loader} alt="" />
      </section>
    </>
  );
};

export default Loader;

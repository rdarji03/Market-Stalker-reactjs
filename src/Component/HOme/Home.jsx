import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import menu_icon from "./menu.png";
import close_icon from "./close.png";

const Home = () => {
  const [menudisplay, setmenudisplay] = useState("block");
  const [closedisplay, setclosedisplay] = useState("hidden");
  const [navdisplay, setnavdisplay] = useState("hidden");

  function showmenu() {
    if (menudisplay === "block") {
      setnavdisplay("block");
      setclosedisplay("block");
      setmenudisplay("hidden");
    }
  }
  function closemenu() {
    if (menudisplay === "hidden") {
      setnavdisplay("hidden");
      setclosedisplay("hidden");
      setmenudisplay("block");
    }
  }

  return (
    <>
      <section className="home_nav mt-[3rem]">
        <div className="nav p-3">
          <div className="nav_link">
            <div className="nav_icon md:hidden   block">
              <img
                src={menu_icon}
                alt=""
                srcset=""
                className={
                  "h-[2rem] bg-slate-300 border rounded-lg p-1 mx-2 " +
                  menudisplay
                }
                onClick={showmenu}
              />
              <img
                src={close_icon}
                alt=""
                srcset=""
                className={
                  "h-[2rem] bg-slate-300 border rounded-lg p-1 mx-2 " +
                  closedisplay
                }
                onClick={closemenu}
              />
            </div>
            <ul
              className={
                "nav_item md:flex md:gap-5 md:justify-center md:border-0  md:flex-row flex flex-col bg-white border rounded-md border-gray-900 p-2 my-2 " +
                navdisplay
              }
            >
              <li className="links  md:bg-white bg-blue-700 p-1">
                <Link to="/market/indices">
                  {" "}
                  <h4 className="md:text-blue-800 text-white">Stocks Index</h4>
                </Link>{" "}
              </li>
              <li className="links  md:bg-white bg-blue-700 md:my-0 my-1 p-1">
                <Link to="/market/cryptos">
                  <h4 className="md:text-blue-800 text-white">Cryptos </h4>{" "}
                </Link>
              </li>
              <li className="links  md:bg-white bg-blue-700 p-1">
                <Link to="/market/indianstock">
                  {" "}
                  <h4 className="md:text-blue-800  text-white">Indian Stock</h4>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Home;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu_icon from "../../Asset/navicon/menu.png";
import close_icon from "../../Asset/navicon/close.png";

const Navbar = () => {
  const [menubtn, setmenubtn] = useState("block");
  const [closebtn, setclosebtn] = useState("hidden");
  const [menuposition, setmenuposition] = useState("right-[-9.5rem]");

  function showmenu() {
    if (menubtn === "block") {
      setmenubtn("hidden");
      setclosebtn("block");
      setmenuposition("right-[0rem]");
    }
  }
  function closemenu() {
    if (closebtn === "block") {
      setmenubtn("block");
      setclosebtn("hidden");
      setmenuposition("right-[-9.5rem]");
    }
  }

  return (
    <>
      <section className="main-nav bg-sky-800 h-12 static w-[100%] flex items-center justify-center">
        <div className="nav-content flex items-center w-[80%] justify-between">
          <div className="nav-banner">
            <h1 className="text-2xl text-white">
              <Link to="/">Stock It</Link>
            </h1>
          </div>
          <div
            className={
              "nav-pages   md:static md:min-h-fit md:p-0  transition-all duration-500 absolute top-[3rem] min-h-[100vh] p-[3rem]  bg-sky-800 " +
              (menuposition)
            }
          >
            <ul className="nav-list flex flex-col  text-white md:gap-[5rem] md:flex-row">
              <li className="my-3">
                <Link to="/">Home</Link>
              </li>
              <li className="my-3">
                <Link to="/stocks">Stocks</Link>
              </li>
              <li className="my-3">
                <Link to="/news">News</Link>
              </li>
              <li className="my-3">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-menu-icons md:hidden">
          <img
            src={menu_icon}
            alt=""
            className={"menu h-[1.5rem] w-auto cursor-pointer " + (menubtn)}
            onClick={showmenu}
          />
          <img
            src={close_icon}
            alt=""
            className={"close h-[1.5rem] w-auto cursor-pointer " + (closebtn)}
            onClick={closemenu}
          />
        </div>
      </section>
    </>
  );
};

export default Navbar;

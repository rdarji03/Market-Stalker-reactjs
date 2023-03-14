import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <section className="main-nav bg-sky-800 h-12 static w-[100%] flex items-center justify-center">
        <div className="nav-content flex items-center w-[80%] justify-between">
          <div className="nav-banner">
            <h1 className="text-2xl text-white"><Link to="/">Stock It</Link></h1>
          </div>
          <div className="nav-pages   md:static md:min-h-fit md:p-0   absolute top-[3rem] min-h-[100vh] p-[3rem] right-0 bg-sky-800">
            <ul className="nav-list flex flex-col  text-white md:gap-[5rem] md:flex-row">
              <li className="my-3">
                <Link to="/">Home</Link>
              </li>
              <li className="my-3"><Link to="/stocks">Stocks</Link></li>
              <li className="my-3"><Link to="/news">News</Link></li>
              <li className="my-3"><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>
        <div className="nav-menu-icons md:hidden">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </section>
    </>
  );
};

export default Navbar;

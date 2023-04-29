import React from "react";
import { BsInstagram } from "react-icons/bs";
// import {AiOutlineLinkedin} from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer flex flex-col justify-center bg-blue-900  ">
      <div className="s_media">
        <ul className="smedia_links flex justify-center my-3 gap-3">
          <li className="border rounded-lg p-2">
            <a
              href="https://www.instagram.com/r_darji03/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white"
            >
              <BsInstagram />
            </a>{" "}
          </li>
          {/* <li><AiOutlineLinkedin/></li> */}
          <li className="border rounded-lg p-2">
            <a
              href="https://github.com/rdarji03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <AiFillGithub />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p className="text-white text-center"> Made By RahulDarji :All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;

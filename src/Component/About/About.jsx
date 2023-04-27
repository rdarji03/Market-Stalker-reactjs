import React from "react";
import about_me from "./asset/about_me.jpg";
import github from "./asset/github.png";
import instagram from "./asset/instagram.png";
import linked_in from "./asset/linked_in.png";

const About = () => {
  return (
    <section className="about_web p-[3]">
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div className="flex flex-col lg:flex-row justify-between gap-8 ">
          <div className="w-full lg:w-8/12">
            <img
              className="w-full h-full"
              src={about_me}
              alt="error loading "
            />
          </div>
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4 text-center">
              About Website
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Welcome to our share market detail website, your go-to source for
              comprehensive information on the stock market. Our platform is
              dedicated to providing in-depth analysis, news, and insights into
              the world of investments, catering to investors and traders from
              all levels of experience.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-[50%] flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4 text-center">
              About Me
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Hello, My name is Rahul Darji, and I'm a frontend web developer. I
              have a passion for creating beautiful, functional, and
              user-friendly websites and web applications. I specialize in using
              a combination of HTML, CSS, JavaScript and React JS to design and
              build responsive interfaces that work seamlessly across different
              browsers and devices. When I'm not coding, you can find me
              exploring new plants, reading books. If you're interested in
              working with me, please don't hesitate to get in touch! You can
              email me at rahuld030206@gmail.com. Thank you for visiting !
            </p>
          </div>
          <div className="w-full lg:w-8/12  flex items-center md:justify-between flex-col md:h-[10rem] sm:h-auto h-auto sm:justify-start">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">
                Socialmedia Links
              </h1>
            <div className="s_media ">
              <ul className="smedia_links flex items-center">
                <li>
                  <a
                    href="https://www.instagram.com/r_darji03/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={instagram}
                      alt=""
                      srcset=""
                      className="md:h-[5rem] md:w-auto h-[2rem] sm:h-[3rem]"
                    />
                  </a>{" "}
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/r_darji03/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linked_in}
                      alt=""
                      srcset=""
                      className="md:h-[5rem] md:w-auto md:mx-[4rem] h-[2rem] sm:h-[3rem]"
                    />
                  </a>{" "}
                </li>
                <li>
                  <a
                    href="https://github.com/rdarji03"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="" className="md:h-[5rem] md:w-auto h-[2rem] sm:h-[3rem]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

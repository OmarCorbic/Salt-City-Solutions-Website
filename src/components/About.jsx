import React from "react";
import responsive from "../assets/responsive-design.png";
import seo from "../assets/seo.png";
import api from "../assets/api-1.png";
import { useTheme } from "../hooks/useTheme";
import LakeSvg from "./LakeSvg";

const About = () => {
  const { darkMode } = useTheme();
  return (
    <section
      id="about"
      role="region"
      aria-labelledby="about-heading"
      className="relative min-h-screen flex flex-col justify-center items-center gap-14 text-sm lg:text-base  text-center"
    >
      <div className="absolute z-0 w-full scale-[2] sm:scale-100  flex items-center justify-center rotate-90 sm:rotate-180">
        <LakeSvg lake={1} fill={darkMode ? "#030017" : "#ade8f4"} />
      </div>
      <div className="flex flex-col gap-5 w-full z-10 items-center">
        <h2
          id="about-heading"
          className="font-black text-xl sm:text-2xl md:text-3xl"
        >
          <span className="dark:text-darkAccent text-lightAccent">WHAT</span> DO
          WE OFFER
        </h2>
        <p className=" w-full max-w-[600px] px-5">
          Our expertise lies in crafting custom web designs and development
          solutions tailored for small businesses across the United States. We
          meticulously hand-code every aspect to guarantee optimal performance,
          ultimately driving increased traffic and revenue to your website.
        </p>
      </div>
      <div className="flex flex-col gap-10 z-10  sm:gap-5 sm:px-5 sm:grid md:grid-rows-1 md:grid-cols-3">
        <div className="flex flex-col gap-5 items-center">
          <div className="w-40 h-40 flex items-center justify-center">
            <img src={responsive} alt="devices" />
          </div>
          <h3 className="dark:text-darkAccent text-lightAccent font-bold text-lg">
            Full responsive design
          </h3>
          <p className="px-5 md:max-w-80">
            Your website is optimized to perfectly fit screens of all sizes,
            including those of mobile devices, tablets, and desktop computers.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div className="w-40 h-40 flex items-center justify-center ">
            <img src={seo} alt="seo optimization" />
          </div>
          <h3 className="dark:text-darkAccent text-lightAccent font-bold text-lg">
            Optimization
          </h3>
          <p className="px-5 max-w-96">
            We optimize your website to perform its best in search engines. It
            helps users find your website easier.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div className="w-40 h-40 flex items-center justify-center ">
            <img src={api} alt="api development" />
          </div>
          <h3 className="dark:text-darkAccent text-lightAccent font-bold text-lg">
            Back-end development
          </h3>
          <p className="px-5 max-w-96">
            We develop web applications with back-end support, like e-commerce
            websites, rest API-s, and even simple online games.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import FrameSvg from "./FrameSvg";
import moon from "../assets/moon.png";
import StarField from "./StarField";
import monitor from "../assets/hero-monitor.png";
import dollar from "../assets/dollar.png";
import handshake from "../assets/handshake.png";
import clock from "../assets/clock.png";
import cloud from "../assets/cloud.png";
import { useTheme } from "../hooks/useTheme";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const Hero = () => {
  const { t } = useTranslation("translation");
  const { darkMode } = useTheme();
  const {
    ref: heroRef,
    inView: heroTextVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={heroRef}
      className="relative text-white h-screen bg-gradient-to-br dark:from-[#000218] dark:to-sky-950 from-sky-600 to-sky-300 overflow-hidden"
    >
      <StarField />
      <div className=" pl-[8%] py-5 md:ml-[5%] lg:ml-20 absolute top-[20%] sm:top-[20%] flex flex-col z-[11] gap-5 sm:max-w-[45%]">
        <h1
          className={classNames(
            "text-2xl md:text-3xl lg:text-5xl xl:text-[3.7rem] font-black",
            {
              "animate-right": heroTextVisible,
            }
          )}
        >
          {t("heroTitle")}
        </h1>
        <p className="text-xs md:text-lg font-normal max-w-[60%] sm:max-w-full">
          {t("heroText")}
        </p>
        <a
          href="#contact"
          className="dark:animate-flicker flex items-center justify-center py-3 px-5 bg-lightAccent dark:bg-[#aa2e5d] rounded-full hover:scale-105 btn border-2 boder-white w-32 font-bold"
        >
          {t("heroBtnText")}
        </a>
      </div>
      <div className="z-[2]  absolute flex flex-col h-[300px] sm:h-[60vw] md:h-[50vh] xl:h-[60vh] xl:w-[25vw]  -rotate-12 transform   bottom-[-10px] right-[10%] ">
        <div className="absolute top-0 left-0  hidden border-red-400 items-center md:flex justify-center  -translate-x-[40%]  -translate-y-[40%]   w-full">
          <div className="absolute w-[90%]  z-10 ">
            <img src={monitor} alt="Display" />
          </div>
          <div className=" border-green-500 w-full ">
            <img className="w-full" src={moon} alt="Moon" />
          </div>
        </div>

        <div className="relative flex-grow grid grid-rows-1 grid-cols-3 items-end text-[8px] sm:text-xs xl:text-base 2xl:text-xl ">
          <div className="absolute top-0 left-0  items-start justify-center mt-10  -translate-x-[15%] w-[180%]  h-full dark:translate-y-[600px] transition duration-150 hidden sm:flex">
            <img
              className="absolute object-contain object-center w-full"
              src={cloud}
              alt="Cloud"
            />
          </div>
          <div
            style={{ animationDelay: "0.4s" }}
            className="absolute w-1/3 -left-1/3 bottom-0 scale-0 origin-bottom animate-grow bg-gradient-to-b rounded-sm px-2 from-slate-100 to-gray-700 dark:from-sky-700 dark:to-sky-950 h-1/3 "
          ></div>
          <div
            style={{ animationDelay: "0.4s" }}
            className="absolute w-1/3 -right-1/3 bottom-0 scale-0 origin-bottom animate-grow bg-gradient-to-b rounded-sm px-2 from-slate-100 to-gray-700 dark:from-sky-700 dark:to-sky-950 h-1/2"
          ></div>
          <div className="scale-0 origin-bottom animate-grow bg-gradient-to-b rounded-sm px-2 from-slate-100 to-gray-700 dark:from-sky-400 dark:to-sky-950 h-2/4 w-full">
            <div className="flex flex-col items-center h-1/6 -translate-y-5 ">
              <div>
                <img src={handshake} alt="" />
              </div>
              <p className="text-center w-full p-2 border-2 rounded-sm m-3 bg-darkAccent dark:bg-transparent ">
                Reliable
              </p>
            </div>
          </div>
          <div
            style={{ animationDelay: "0.2s" }}
            className=" scale-0 origin-bottom animate-grow bg-gradient-to-b rounded-sm px-2 from-slate-100 to-gray-700 dark:from-sky-400 dark:to-sky-950 h-3/4 w-full"
          >
            <div className="flex flex-col items-center -translate-y-5 ">
              <div>
                <img src={dollar} alt="" />
              </div>
              <p className="text-center w-full p-2 border-2  rounded-sm m-3 bg-darkAccent dark:bg-transparent ">
                Affordable
              </p>
            </div>
          </div>
          <div
            style={{ animationDelay: "0.5s" }}
            className="scale-0 origin-bottom animate-grow bg-gradient-to-b rounded-sm px-2 from-slate-100 to-gray-700 dark:from-sky-400 dark:to-sky-950 h-full w-full"
          >
            <div className="flex flex-col items-center -translate-y-5 ">
              <div>
                <img src={clock} alt="" />
              </div>
              <p className="text-center w-full p-2 border-2  rounded-sm m-3 bg-darkAccent dark:bg-transparent ">
                Fast
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 h-1/6 w-1/6 bg-[#0075FF] blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1 w-full z-10 ">
        <FrameSvg fill={darkMode ? "#01000d" : "#DCF2F1"} />
      </div>
    </section>
  );
};

export default Hero;

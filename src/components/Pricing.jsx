import React from "react";
import { TfiCheckBox } from "react-icons/tfi";
import { useTheme } from "../hooks/useTheme";
import LakeSvg from "./LakeSvg";

const Pricing = () => {
  const { darkMode } = useTheme();
  return (
    <section
      id="pricing"
      role="region"
      aria-labelledby="pricing-heading"
      className="relative min-h-screen  flex flex-col justify-center items-center gap-14 text-sm lg:text-base  text-center"
    >
      <div className="absolute z-0 w-full scale-[2] sm:scale-100  flex items-center justify-center rotate-90 sm:rotate-180">
        <LakeSvg lake={2} fill={darkMode ? "#030017" : "#ade8f4"} />
      </div>
      <div className="flex flex-col z-10 gap-5 w-full items-center px-5">
        <h2
          id="pricing-heading"
          className="font-black text-xl sm:text-2xl md:text-3xl"
        >
          OUR{" "}
          <span className="dark:dark:text-darkAccent  text-lightAccent">
            PRICING PLAN
          </span>
        </h2>
        <p className=" w-full max-w-[600px] px-5">
          NOTE : Any additional feature, page and product is charged more
        </p>
      </div>

      <div className="flex flex-col lg:flex-row z-10  lg:justify-center justify-between gap-5">
        <article
          aria-labelledby="standard-package-heading"
          style={{
            boxShadow:
              "1px 1px 9px rgb(56 189 248), -1px -1px 9px rgb(56 189 248)",
          }}
          className="flex flex-col justify-around border-2 border-sky-300 bg-gray-400 bg-opacity-20 dark:bg-opacity-0 m-5 lg:m-0 rounded-md gap-3  p-5"
        >
          <div className="h-1/2 flex flex-col  gap-3">
            <h3
              id="standard-package-heading"
              className="text-xl font-extrabold"
            >
              <span className="dark:text-darkAccent text-lightAccent">
                Standard
              </span>{" "}
              package
            </h3>
            <p>We provide you with a standard 5-page website</p>
            <div className="mt-auto">
              <p className="text-xl font-bold ">$70 a month </p>
              <p className="text-xs">min 12 month contract </p>
            </div>
          </div>
          <div className="h-1/2 font-bold gap-3 text-xs w-full grid grid-rows-3 grid-cols-2 text-left">
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>24/7 support</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>Modern design</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>Unlimited design customatization</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>Design & development from scratch</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>Free SEO Marketing</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>Hosting & maintenance</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="#contact"
              role="link"
              aria-label="Scrolls to contact region"
              className="btn text-white flex items-center justify-center py-2 px-5 bg-lightAccent dark:bg-darkAccent hover:scale-105 rounded-full border-2 boder-white w-40 font-bold"
            >
              Contact us
            </a>
          </div>
        </article>
        <article
          aria-labelledby="ecommerce-package-heading"
          style={{
            boxShadow:
              "1px 1px 9px rgb(56 189 248), -1px -1px 9px rgb(56 189 248)",
          }}
          className="flex flex-col border-2 border-sky-300 bg-gray-400 bg-opacity-20 dark:bg-opacity-0 m-5 lg:m-0 rounded-md gap-3 p-5"
        >
          <div className="h-1/2 flex flex-col  gap-3">
            <h3
              id="ecommerce-package-heading"
              className="text-xl font-extrabold"
            >
              <span className="dark:text-darkAccent text-lightAccent">
                E-commerce
              </span>{" "}
              package
            </h3>
            <p>
              You get the{" "}
              <span className="font-extrabold">standard package</span> &{" "}
              <span className="font-extrabold">online shop</span> with up to 200
              products
            </p>
            <div className="mt-auto">
              <p className="text-xl font-bold ">$100 a month </p>
              <p className="text-xs">min 12 month contract </p>
            </div>
          </div>
          <div className="h-1/2 font-bold gap-3 text-xs w-full grid grid-rows-3 grid-cols-2 text-left">
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>Filters & categories</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>Product search feature</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>Admin dashboard</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>Up to 200 products</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="#contact"
              role="link"
              aria-label="Scrolls to contact region"
              className="flex items-center justify-center py-2 px-5 bg-lightAccent dark:bg-darkAccent hover:scale-105 btn text-white rounded-full border-2 boder-white w-40 font-bold"
            >
              Contact us
            </a>
          </div>
        </article>
        <article
          aria-labelledby="branding-package-heading"
          style={{
            boxShadow:
              "1px 1px 9px rgb(56 189 248), -1px -1px 9px rgb(56 189 248)",
          }}
          className="flex flex-col border-2 border-sky-300 bg-gray-400 bg-opacity-20 dark:bg-opacity-0  m-5 lg:m-0 rounded-md gap-3 p-5"
        >
          <div className="h-1/2 flex flex-col gap-3">
            <h3
              id="branding-package-heading"
              className="text-xl font-extrabold"
            >
              <span className="dark:text-darkAccent text-lightAccent">
                Logo
              </span>{" "}
              design & branding
            </h3>
            <p>We design custom graphic logos and social media posts</p>
            <div className="mt-auto">
              <p className="text-xl font-bold ">$200</p>
            </div>
          </div>
          <div className="h-1/2 font-bold gap-3 text-xs w-full grid grid-rows-3 grid-cols-2 text-left">
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>We customize until you are satisfied</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>Re-design of previous logo</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>New design from scratch</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="#contact"
              role="link"
              aria-label="Scrolls to contact region"
              className="flex items-center justify-center py-2 px-5 bg-lightAccent dark:bg-darkAccent hover:scale-105 btn text-white rounded-full border-2 boder-white w-40 font-bold"
            >
              Contact us
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Pricing;

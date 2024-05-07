import React, { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";
import logo from "../assets/logo.png";
import logoLight from "../assets/logoLight.png";
import { useTranslation } from "react-i18next";
import LanguagePicker from "./LanguagePicker";

const Navbar = () => {
  const { toggleDark } = useTheme();
  const { t } = useTranslation("translation");
  const [showLinks, setShowLinks] = useState(false);

  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        showLinks &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setShowLinks(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showLinks]);

  return (
    <nav
      role="navigation"
      id="navbar"
      className="absolute text-white top-0 left-0 w-full flex flex-row items-center justify-between py-8 px-[10%] z-[9999]"
    >
      <div className="w-24 sm:w-32 lg:w-[10vw]">
        <img className="hidden dark:block" src={logo} alt="logo" />
        <img className=" dark:hidden" src={logoLight} alt="logo" />
      </div>

      <div ref={modalRef} className="flex items-center space-x-2 md:space-x-4">
        <LanguagePicker setShowLinks={setShowLinks} />

        <div>
          <ul
            id="navListContainer"
            className={`${
              showLinks
                ? "h-auto px-4 py-2 rounded-md animate-grow origin-top"
                : "h-0"
            }  gap-2 absolute items-center text-base bg-[#020014] overflow-hidden top-[70%] right-0 sm:static flex flex-col sm:flex-row sm:bg-transparent sm:h-auto md:gap-5 xl:text-lg 2xl:text-xl`}
          >
            <li>
              <Link to="about" text={t("navItemOne")} />
            </li>
            <li>
              <Link to="pricing" text={t("navItemTwo")} />
            </li>
            <li>
              <Link to="projects" text={t("navItemThree")} />
            </li>
            <li>
              <Link to="contact " text={t("navItemFour")} />
            </li>
            <li>
              <button
                role="button"
                aria-label="Toggle Theme"
                onClick={() => toggleDark()}
                className={`flex w-10 h-5 border-2  dark:justify-end bg-darkAccent dark:bg-black justify-start 
          rounded-full  items-center  border-[#005AE0]`}
              >
                <div className={`w-3 h-3 rounded-full bg-white`}></div>
              </button>
            </li>
          </ul>
        </div>

        <button
          role="button"
          aria-label="Opens dropdown-menu on small screens"
          onClick={() => setShowLinks((prev) => !prev)}
          className="sm:hidden"
        >
          <FiMenu color="white" size={24} />
        </button>
      </div>
    </nav>
  );
};

const Link = ({ to, text }) => {
  return (
    <a
      role="link"
      href={"#" + to}
      className="border-2 duration-300 border-transparent hover:border-b-cyan-200 font-bold"
    >
      {text}
    </a>
  );
};

export default Navbar;

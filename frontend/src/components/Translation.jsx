import React, { useEffect, useRef } from "react";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

const Translation = ({ setOpenTranslations }) => {
  const [t, i18n] = useTranslation("common");
  const currentLanguage = i18n.language;
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenTranslations(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="absolute top-10 right-[-2rem] shadow-[0_3px_10px_rgb(0,0,0,0.15)] bg-white rounded-xl p-2 w-[9rem]">
      <div ref={modalRef}>
        <button
          onClick={() => {
            i18n.changeLanguage("bs");
          }}
          className={classNames(
            "flex space-x-2 hover:bg-gray-200 pl-3 py-2 rounded-xl w-full",
            {
              "text-blue-600": currentLanguage === "bs",
            }
          )}
        >
          <span>{getUnicodeFlagIcon("BA")}</span>
          <span>BiH</span>
        </button>

        <button
          onClick={() => {
            i18n.changeLanguage("en");
          }}
          className={classNames(
            "flex space-x-2 hover:bg-gray-200 py-2 rounded-xl pl-3 w-full",
            {
              "text-blue-600": currentLanguage === "en",
            }
          )}
        >
          <span>{getUnicodeFlagIcon("GB")}</span>
          <span>EN</span>
        </button>
      </div>
    </div>
  );
};

export default Translation;

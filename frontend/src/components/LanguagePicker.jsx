import React, { useState } from "react";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { useTranslation } from "react-i18next";
import Translation from "./Translation";

const LanguagePicker = ({ setShowLinks }) => {
  const [openTranslations, setOpenTranslations] = useState(false);
  const { i18n } = useTranslation("translation");

  return (
    <div className="relative text-black">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowLinks(false);
          setOpenTranslations((prev) => !prev);
        }}
        className="flex space-x-2 md:mr-0 border-2 duration-300 border-transparent hover:border-b-cyan-200 font-bold"
      >
        {i18n.language === "bs" ? (
          <>
            <span>{getUnicodeFlagIcon("BA")}</span>
            <span className="text-white">BS</span>
          </>
        ) : (
          <>
            <span>{getUnicodeFlagIcon("GB")}</span>
            <span className="text-white">EN</span>
          </>
        )}
      </button>

      {openTranslations && (
        <Translation
          setOpenTranslations={setOpenTranslations}
          setShowLinks={setShowLinks}
        />
      )}
    </div>
  );
};

export default LanguagePicker;

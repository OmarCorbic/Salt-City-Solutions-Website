import React from "react";
import responsive from "../assets/responsive-design.png";
import seo from "../assets/seo.png";
import api from "../assets/api-1.png";
import { useTheme } from "../hooks/useTheme";
import LakeSvg from "./LakeSvg";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const About = () => {
  const { t } = useTranslation("translation");
  const { darkMode } = useTheme();
  const {
    ref: aboutRef,
    inView: aboutVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });

  const {
    ref: firstImageRef,
    inView: firstImageVisible,
    firstImageEntry,
  } = useInView({
    triggerOnce: true,
  });

  const {
    ref: secondImageRef,
    inView: secondImageVisible,
    secondImageEntry,
  } = useInView({
    triggerOnce: true,
  });

  const {
    ref: thirdImageRef,
    inView: thirdImageVisible,
    thirdImageEntry,
  } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={aboutRef}
      id="about"
      role="region"
      aria-labelledby="about-heading"
      className="relative min-h-screen flex flex-col justify-center items-center gap-14 text-sm lg:text-base 2xl:text-lg  text-center"
    >
      <div className="absolute z-0 w-full scale-[2] sm:scale-100  flex items-center justify-center rotate-90 sm:rotate-180">
        <LakeSvg lake={1} fill={darkMode ? "#030017" : "#ade8f4"} />
      </div>
      <div className="flex flex-col gap-5 w-full z-10 items-center">
        <h2
          id="about-heading"
          className={classNames(
            "font-black text-xl opacity-0 sm:text-2xl md:text-3xl 2xl:text-5xl",
            {
              "fade-in": aboutVisible,
            }
          )}
        >
          <span className="dark:text-darkAccent text-lightAccent">
            {t("aboutTitleOne")}
          </span>{" "}
          {t("aboutTitleTwo")}
        </h2>
        <p className=" w-full max-w-[600px] px-5">{t("aboutText")}</p>
      </div>
      <div className="flex flex-col gap-10 z-10  sm:gap-5 sm:px-5 sm:grid md:grid-rows-1 md:grid-cols-3">
        <div className="flex flex-col gap-5 items-center">
          <div
            ref={firstImageRef}
            className={classNames(
              "w-40 h-40 flex items-center justify-center opacity-0",
              {
                "first-item-fade-in": firstImageVisible,
              }
            )}
          >
            <img src={responsive} alt="devices" />
          </div>
          <h3 className="dark:text-darkAccent text-lightAccent font-bold text-lg 2xl:text-2xl">
            {t("aboutCardOneTitle")}
          </h3>
          <p className="px-5 md:max-w-80">{t("aboutCardOneText")}</p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div
            ref={secondImageRef}
            className={classNames(
              "w-40 h-40 flex items-center justify-center opacity-0",
              {
                "second-item-fade-in": secondImageVisible,
              }
            )}
          >
            <img src={seo} alt="seo optimization" />
          </div>
          <h3 className="dark:text-darkAccent text-lightAccent font-bold text-lg 2xl:text-2xl">
            {t("aboutCardTwoTitle")}
          </h3>
          <p className="px-5 max-w-96">{t("aboutCardTwoText")}</p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div
            ref={thirdImageRef}
            className={classNames(
              "w-40 h-40 flex items-center justify-center opacity-0",
              {
                "third-item-fade-in": thirdImageVisible,
              }
            )}
          >
            <img src={api} alt="api development" />
          </div>
          <h3 className="dark:text-darkAccent text-lightAccent font-bold text-lg 2xl:text-2xl">
            {t("aboutCardThreeTitle")}
          </h3>
          <p className="px-5 max-w-96">{t("aboutCardThreeText")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { TfiCheckBox } from "react-icons/tfi";
import { useTheme } from "../hooks/useTheme";
import LakeSvg from "./LakeSvg";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const Pricing = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation("translation");

  const {
    ref: pricingTitleRef,
    inView: pricingVisible,
    pricingEntry,
  } = useInView({
    triggerOnce: true,
  });

  const {
    ref: pricingCardRef,
    inView: pricingCardVisible,
    firstEntry,
  } = useInView({
    triggerOnce: true,
  });

  const {
    ref: secondPricingCardRef,
    inView: secondPricingCardVisible,
    secondEntry,
  } = useInView({
    triggerOnce: true,
  });

  const {
    ref: thirdPricingCardRef,
    inView: thirdPricingCardVisible,
    thirdEntry,
  } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      id="pricing"
      role="region"
      aria-labelledby="pricing-heading"
      className="relative min-h-screen  flex flex-col justify-center items-center gap-14 text-sm lg:text-base 2xl:text-lg  text-center"
    >
      <div className="absolute z-0 w-full scale-[2] sm:scale-100  flex items-center justify-center rotate-90 sm:rotate-180">
        <LakeSvg lake={2} fill={darkMode ? "#030017" : "#ade8f4"} />
      </div>
      <div className="flex flex-col z-10 gap-5 w-full items-center px-5">
        <h2
          ref={pricingTitleRef}
          id="pricing-heading"
          className={classNames(
            "font-black text-xl sm:text-2xl md:text-3xl opacity-0 2xl:text-5xl",
            {
              "fade-in": pricingVisible,
            }
          )}
        >
          {t("pricingTitleOne")}{" "}
          <span className="dark:dark:text-darkAccent  text-lightAccent">
            {t("pricingTitleTwo")}
          </span>
        </h2>
        <p className=" w-full max-w-[600px] px-5">{t("pricingNote")}</p>
      </div>

      <div className="flex flex-col lg:flex-row z-10  lg:justify-center justify-between gap-5">
        <article
          ref={pricingCardRef}
          aria-labelledby="standard-package-heading"
          style={{
            boxShadow:
              "1px 1px 9px rgb(56 189 248), -1px -1px 9px rgb(56 189 248)",
          }}
          className={classNames(
            "flex flex-col justify-around border-2 border-sky-300 bg-gray-400 bg-opacity-20 dark:bg-opacity-0 m-5 lg:m-0 rounded-md gap-3  p-5 opacity-0",
            {
              "first-item-fade-in": pricingCardVisible,
            }
          )}
        >
          <div className="h-1/2 flex flex-col  gap-3">
            <h3
              id="standard-package-heading"
              className="text-xl 2xl:text-2xl font-extrabold"
            >
              <span className="dark:text-darkAccent text-lightAccent ">
                {t("pricingCardOneTitleOne")}
              </span>{" "}
              {t("pricingCardOneTitleTwo")}
            </h3>
            <p>{t("pricingCardOneText")}</p>
            {/* <div className="mt-auto">
              <p className="text-xl font-bold ">{t("pricingCardOnePrice")}</p>
              <p className="text-xs">{t("pricingCardOnePriceSubtext")}</p>
            </div> */}
          </div>
          <div className="h-1/2 font-bold gap-3 text-xs 2xl:text-base w-full grid grid-rows-3 grid-cols-2 text-left">
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>{t("pricingCardOneFirstItem")}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>{t("pricingCardOneSecondItem")}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>{t("pricingCardOneThirdItem")}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>{t("pricingCardOneFourthItem")}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>{t("pricingCardOneFifthItem")}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>{t("pricingCardOneSixthItem")}</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="#contact"
              role="link"
              aria-label="Scrolls to contact region"
              className="btn text-white flex items-center justify-center py-2 px-5 bg-lightAccent dark:bg-darkAccent hover:scale-105 rounded-full border-2 boder-white w-40 font-bold"
            >
              {t("pricingContactBtnText")}
            </a>
          </div>
        </article>
        <article
          ref={secondPricingCardRef}
          aria-labelledby="ecommerce-package-heading"
          style={{
            boxShadow:
              "1px 1px 9px rgb(56 189 248), -1px -1px 9px rgb(56 189 248)",
          }}
          className={classNames(
            "flex flex-col border-2 border-sky-300 bg-gray-400 bg-opacity-20 dark:bg-opacity-0 m-5 lg:m-0 rounded-md gap-3 p-5 opacity-0",
            {
              "third-item-fade-in": secondPricingCardVisible,
            }
          )}
        >
          <div className="h-1/2 flex flex-col  gap-3">
            <h3
              id="ecommerce-package-heading"
              className="text-xl font-extrabold 2xl:text-2xl"
            >
              <span className="dark:text-darkAccent text-lightAccent">
                {t("pricingCardTwoTitleOne")}
              </span>{" "}
              {t("pricingCardTwoTitleTwo")}
            </h3>
            <p>
              {t("pricingCardTwoTextOne")}{" "}
              <span className="font-extrabold">
                {t("pricingCardTwoTextTwo")}
              </span>{" "}
              &{" "}
              <span className="font-extrabold">
                {t("pricingCardTwoTextThree")}
              </span>{" "}
              {t("pricingCardTwoTextFour")}
            </p>
            {/* <div className="mt-auto">
              <p className="text-xl font-bold ">{t("pricingCardTwoPrice")} </p>
              <p className="text-xs">{t("pricingCardTwoSubtext")} </p>
            </div> */}
          </div>
          <div className="h-1/2 font-bold gap-3 text-xs 2xl:text-base w-full grid grid-rows-3 grid-cols-2 text-left">
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>{t("pricingCardTwoFirstItem")}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>{t("pricingCardTwoSecondItem")}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>{t("pricingCardTwoThirdItem")}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>{t("pricingCardTwoFourthItem")}</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="#contact"
              role="link"
              aria-label="Scrolls to contact region"
              className="flex items-center justify-center py-2 px-5 bg-lightAccent dark:bg-darkAccent hover:scale-105 btn text-white rounded-full border-2 boder-white w-40 font-bold"
            >
              {t("pricingContactBtnText")}
            </a>
          </div>
        </article>
        <article
          ref={thirdPricingCardRef}
          aria-labelledby="branding-package-heading"
          style={{
            boxShadow:
              "1px 1px 9px rgb(56 189 248), -1px -1px 9px rgb(56 189 248)",
          }}
          className={classNames(
            "flex flex-col border-2 border-sky-300 bg-gray-400 bg-opacity-20 dark:bg-opacity-0  m-5 lg:m-0 rounded-md gap-3 p-5 opacity-0",
            {
              "third-item-fade-in": thirdPricingCardVisible,
            }
          )}
        >
          <div className="h-1/2 flex flex-col gap-3">
            <h3
              id="branding-package-heading"
              className="text-xl font-extrabold 2xl:text-2xl"
            >
              <span className="dark:text-darkAccent text-lightAccent">
                {t("pricingCardThreeTitleOne")}
              </span>{" "}
              {t("pricingCardThreeTitleTwo")}
            </h3>
            <p>{t("pricingCardThreeText")}</p>
            {/* <div className="mt-auto">
              <p className="text-xl font-bold ">
                {" "}
                {t("pricingCardThreePrice")}
              </p>
            </div> */}
          </div>
          <div className="h-1/2 font-bold gap-3 text-xs 2xl:text-base w-full grid grid-rows-3 grid-cols-2 text-left">
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>{t("pricingCardThreeFirstItem")}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>{t("pricingCardThreeSecondItem")}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-2xl dark:text-darkAccent text-lightAccent">
                <TfiCheckBox />
              </div>
              <p>{t("pricingCardThreeThirdItem")}</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="#contact"
              role="link"
              aria-label="Scrolls to contact region"
              className="flex items-center justify-center py-2 px-5 bg-lightAccent dark:bg-darkAccent hover:scale-105 btn text-white rounded-full border-2 boder-white w-40 font-bold"
            >
              {t("pricingContactBtnText")}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Pricing;

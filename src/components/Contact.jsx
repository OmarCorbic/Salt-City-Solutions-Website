import React, { useState } from "react";
import { BiMessage } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import FrameSvg from "./FrameSvg";
import { useTheme } from "../hooks/useTheme";

const Contact = () => {
  const { t } = useTranslation("translation");
  const { darkMode } = useTheme();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = formData;

    const errors = { firstName: "", lastName: "", email: "", message: "" };
    if (!firstName) {
      errors.firstName = t("firstNameError");
    }
    if (!lastName) {
      errors.lastName = t("lastNameError");
    }
    if (!email) {
      errors.email = t("emailError");
    }
    if (!message) {
      errors.message = t("messageError");
    }

    if (errors.firstName || errors.lastName || errors.email || errors.message) {
      setFormErrors(() => ({ ...errors }));
      return;
    }
    emailjs
      .send(
        "service_q5suqyb",
        "template_n6wwlze",
        {
          from_email: formData.email,
          from_name: formData.name,
          message: formData.message,
        },
        { publicKey: "41j9gbSKyLr598-mT" }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error);
          setSuccess(false);
        }
      );
    setFormErrors({ firstName: "", lastName: "", email: "", message: "" });
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      role="region"
      aria-labelledby="contact-heading"
      className="relative min-h-screen flex flex-col px-[8%] justify-center overflow-hidden  gap-14 text-sm lg:text-base  text-center bg-gradient-to-bl from-sky-300 to-sky-600 text-white dark:from-[#000218] dark:to-sky-950"
    >
      <div className="absolute top-[-1px] transform rotate-180  w-full z-0 left-0   ">
        <FrameSvg fill={darkMode ? "#01000d" : "#DCF2F1"} />
      </div>
      <div className="flex flex-col pt-20 gap-5 flex-grow justify-center  w-full items-center z-10">
        <h2
          id="contact-heading"
          className="font-black text-xl sm:text-2xl md:text-3xl"
        >
          <span className="dark:text-darkAccent text-lightAccent">
            {t("contactTitleOne")}
          </span>{" "}
          {t("contactTitleTwo")}
        </h2>
        <p className=" w-full max-w-[600px] px-5">{t("contactText")}</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full py-10 z-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full md:w-1/2 "
        >
          <div className="flex flex-row text-left justify-between gap-5">
            <div className="w-full">
              <label
                className="w-full text-base mb-2 flex items-center"
                htmlFor="firstName"
              >
                <span>{t("contactNameLabel")}</span>
              </label>
              <input
                onChange={handleInputChange}
                value={formData.firstName}
                placeholder={t("contactNamePlaceholder")}
                className="w-full block bg-gradient-to-br from-slate-600 to-slate-800 outline-white dark:outline-sky-400 shadow-md focus:outline focus:outline-2 p-2 rounded-md "
                type="text"
                name="firstName"
                id="firstName"
              />
              {formErrors.firstName && (
                <div className="dark:text-rose-500 text-yellow-400 font-bold text-sm  py-1">
                  {formErrors.firstName}
                </div>
              )}
            </div>
            <div className="w-full">
              <label
                className="w-full text-base mb-2 flex items-center justify-between"
                htmlFor="lastName"
              >
                <span>{t("contactLastNameLabel")}</span>
                <span>
                  <GrContactInfo size={20} />
                </span>
              </label>
              <input
                onChange={handleInputChange}
                value={formData.lastName}
                placeholder={t("contactLastNamePlaceholder")}
                className="block w-full bg-gradient-to-br from-slate-600 to-slate-800 outline-white dark:outline-sky-400 shadow-md focus:outline focus:outline-2 p-2 rounded-md "
                type="text"
                name="lastName"
                id="lastName"
              />
              {formErrors.lastName && (
                <div className="dark:text-rose-500 text-yellow-400 font-bold text-sm  py-1">
                  {formErrors.lastName}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col text-left">
            <label
              className=" text-base mb-2 flex items-center justify-between"
              htmlFor="email"
            >
              <span>{t("contactEmailLabel")}</span>
              <span>
                <MdOutlineMailOutline size={20} />
              </span>
            </label>
            <input
              onChange={handleInputChange}
              value={formData.email}
              placeholder={t("contactEmailPlaceholder")}
              className="block bg-gradient-to-br from-slate-600 to-slate-800 outline-white dark:outline-sky-400 shadow-md focus:outline focus:outline-2 p-2 rounded-md "
              type="email"
              name="email"
              id="email"
            />
            {formErrors.email && (
              <div className="dark:text-rose-500 text-yellow-400 font-bold text-sm  py-1">
                {formErrors.email}
              </div>
            )}
          </div>
          <div className="flex flex-col text-left">
            <label
              className=" text-base mb-2 flex items-center justify-between"
              htmlFor="message"
            >
              <span>{t("contactMessageLabel")}</span>{" "}
              <span>
                <BiMessage size={20} />
              </span>
            </label>
            <textarea
              onChange={handleInputChange}
              value={formData.message}
              placeholder={t("contactMessagePlaceholder")}
              rows="8"
              className="block bg-gradient-to-br from-slate-600 to-slate-800 outline-white dark:outline-sky-400 shadow-md focus:outline focus:outline-2 p-2 rounded-md "
              name="message"
              id="message"
            />
            {formErrors.message && (
              <div className="dark:text-rose-500 text-yellow-400 font-bold text-sm  py-1">
                {formErrors.message}
              </div>
            )}
          </div>
          {success && (
            <div className="text-green-500 text-center">
              {t("contactMsgSuccess")}
            </div>
          )}
          <div className="flex items-center justify-center">
            <button
              onMouseDown={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "black";
              }}
              onMouseUp={(e) => {
                e.target.style.backgroundColor = "black";
                e.target.style.color = "white";
              }}
              className="btn border-2 bg-black font-bold rounded-full px-14 py-2 text-base"
              type="submit"
            >
              {t("contactBtnText")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

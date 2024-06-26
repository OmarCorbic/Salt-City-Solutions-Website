import React from "react";
import { useTranslation } from "react-i18next";

const Modal = ({ children, onClose }) => {
  const { t } = useTranslation("translation");
  const closeModal = (e) => {
    if (
      e.target.id === "modal-background" ||
      e.target.id === "modal-close-btn"
    ) {
      onClose();
    }
  };

  return (
    <div
      onClick={closeModal}
      id="modal-background"
      className="flex items-center justify-center h-full w-full bg-black bg-opacity-60  fixed top-0 left-0 z-[9999]"
    >
      <div className="overflow-auto animate-up min-h-[60%] flex flex-col rounded-md bg-[#DCF2F1] dark:bg-[#05040f] border-2 border-slate-900">
        <div>{children}</div>
        <div className="h-10 flex items-center justify-center">
          <button
            id="modal-close-btn"
            className="border btn border-sky-400 rounded-full px-5"
          >
            {t("singleProjectCloseBtnText")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

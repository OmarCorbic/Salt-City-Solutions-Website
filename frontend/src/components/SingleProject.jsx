import React from "react";
import Gallery from "./Gallery";
import TechnologyIcon from "./TechnologyIcon";
import { useTranslation } from "react-i18next";

const SingleProject = ({ project }) => {
  const { t } = useTranslation("translation");

  return (
    <div className="flex  gap-5 h-full flex-col md:flex-row p-5 ">
      <div className="flex flex-col w-full md:w-1/2  gap-5">
        <div className="w-full h-52 sm:h-72 md:h-96 flex-grow rounded-sm overflow-hidden">
          <Gallery photos={project?.photos} />
        </div>
        <div className="h-10 border rounded-sm dark:border bg-[#ebf7f6] dark:bg-transparent dark:border-[#0b091a] flex items-center flex-wrap justify-center gap-5 ">
          {project?.technologies?.map((tech, i) => {
            return (
              <div
                key={i}
                className="h-10 w-10 text-3xl border border-sky-800 rounded-md text-sky-400 flex items-center justify-center"
              >
                <TechnologyIcon logo={tech} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <h3 className="h-10  dark:border bg-[#ebf7f6] dark:bg-transparent dark:border-[#0b091a] flex items-center justify-center font-extrabold text-lg">
          {project?.title}
        </h3>
        <p className="text-left flex-grow bg-[#ebf7f6] dark:bg-[#0b091a] rounded-sm p-3">
          {project?.description}
        </p>
        <div className="h-10 border flex items-center justify-center dark:border bg-[#ebf7f6] dark:bg-transparent dark:border-[#0b091a]">
          <a
            href="#"
            target="_blank"
            className="border-2 border-darkAccent rounded-full flex items-center justify-center h-full px-5 hover:bg-darkAccent duration-150"
          >
            {t("singleProjectBtnText")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;

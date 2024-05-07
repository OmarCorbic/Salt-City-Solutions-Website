import React from "react";
import TiltCard from "./TiltCard";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const ProjectCard = ({ project, handleProjectClick }) => {
  const {
    ref: cardRef,
    inView: cardVisible,
    cardEntry,
  } = useInView({
    triggerOnce: true,
  });

  return (
    <button
      ref={cardRef}
      className={classNames(" relative w-full flex flex-col items-center justify-center  sm:w-auto z-10 opacity-0 group", {
        "second-item-fade-in": cardVisible,
      })}
      id={project.id}
      onClick={() => handleProjectClick(project.id)}
    >
      <TiltCard className="btn sm:w-[500px] flex-grow h-[300px] sm:min-h-[300px] rounded-md border">
        <div className="absolute top-0 left-0 w-full h-full p-3">
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:bg-opacity-20 duration-300"></div>
          
          <img
            className="object-cover w-full h-full"
            src={project.photos[0].src}
            alt="Project showcase photo"
          />
        </div>
      </TiltCard>
      <img id="projectLogo" className="w-32 h-32 absolute group-hover:-translate-y-32  duration-300 " src={project?.logo?.src} alt="Project logo image" />
      <p className="text-xl font-bold py-2 ">
      {project?.title }
      </p>
    </button>
  );
};

export default ProjectCard;

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
      className={classNames("w-full sm:w-auto z-10 opacity-0", {
        "second-item-fade-in": cardVisible,
      })}
      id={project.id}
      onClick={() => handleProjectClick(project.id)}
    >
      <TiltCard className="sm:w-[500px] flex-grow  h-[300px] sm:min-h-[300px]  rounded-sm border">
        <div className="absolute top-0 left-0 w-full  h-full">
          <img
            className="object-cover w-full h-full"
            src={project.photos[0].src}
            alt="Project showcase photo"
          />
        </div>
      </TiltCard>
    </button>
  );
};

export default ProjectCard;

import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiRedis,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql, DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";

const TechnologyIcon = ({ logo = "" }) => {
  const technologiesIcons = {
    react: <FaReact />,
    reactnative: <TbBrandReactNative />,
    javascript: <IoLogoJavascript />,
    typescript: <SiTypescript />,
    html: <AiFillHtml5 />,
    css: <DiCss3 />,
    mysql: <DiMysql />,
    nodejs: <FaNodeJs />,
    redis: <SiRedis />,
    socketio: <SiSocketdotio />,
    express: <SiExpress />,
    mongodb: <SiMongodb />,
    tailwind: <SiTailwindcss />,
    nextjs: <TbBrandNextjs />,
  };
  if (technologiesIcons.hasOwnProperty(logo.toLowerCase())) {
    return technologiesIcons[logo];
  } else return null;
};

export default TechnologyIcon;

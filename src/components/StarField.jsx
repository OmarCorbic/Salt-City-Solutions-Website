import React from "react";
import satellite from "../assets/satellite.svg";
import ufo from "../assets/ufo.png";
const StarField = () => {
  return (
    <div className="absolute h-full w-full overflow-hidden hidden dark:block">
      <div className="absolute  w-4 h-4 animate-fly top-2/3 -left-1/2 text-red-600 flex gap-2">
        <img src={satellite} alt="satellite" />
      </div>
      <div className="absolute w-6 h-6 animate-ufo -top-[30px] left-1/4 text-red-600 flex gap-2">
        <img src={ufo} alt="UFO" />
      </div>
      <div className="absolute w-[1px] h-[1px] bg-[#afbed6] rounded-full top-[5%] left-[10%]"></div>
      <div className="absolute w-[2px] h-[2px] bg-[#afbed6] rounded-full top-[15%] left-[30%]"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[25%] left-[50%]"></div>
      <div className="absolute w-[1px] h-[1px] bg-[#afbed6] rounded-full top-[35%] left-[70%]"></div>
      <div className="absolute w-[2px] h-[2px] bg-[#afbed6] rounded-full top-[45%] left-[90%]"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[10%] left-[80%]"></div>
      <div className="absolute w-[1px] h-[1px] bg-[#afbed6] rounded-full top-[20%] left-[60%]"></div>
      <div className="absolute w-[2px] h-[2px] bg-[#afbed6] rounded-full top-[30%] left-[40%]"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[40%] left-[20%]"></div>
      <div className="absolute w-[1px] h-[1px] bg-[#afbed6] rounded-full top-[50%] left-[5%]"></div>
      <div className="absolute w-[2px] h-[2px] bg-[#afbed6] rounded-full top-[60%] left-[25%]"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[70%] left-[45%]"></div>
      <div className="absolute w-[1px] h-[1px] bg-[#afbed6] rounded-full top-[80%] left-[65%]"></div>
      <div className="absolute w-[2px] h-[2px] bg-[#afbed6] rounded-full top-[90%] left-[85%]"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[15%] left-[5%]"></div>
      <div className="absolute w-[1px] h-[1px] bg-[#afbed6] rounded-full top-[30%] left-[20%]"></div>
      <div className="absolute w-[2px] h-[2px] bg-[#afbed6] rounded-full top-[45%] left-[35%]"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[60%] left-[50%]"></div>
      <div className="absolute w-[1px] h-[1px] bg-[#afbed6] rounded-full top-[75%] left-[65%]"></div>
      <div className="absolute w-[2px] h-[2px] bg-[#afbed6] rounded-full top-[85%] left-[80%]"></div>
      <div className="absolute w-[3px] h-[3px] bg-[#afbed6] rounded-full top-[95%] left-[95%]"></div>
    </div>
  );
};

export default StarField;

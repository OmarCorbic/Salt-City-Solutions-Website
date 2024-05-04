import React, { useState } from "react";

const BlurWindow = () => {
  const [windowPos, setWindowPos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const rect = e.target.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setWindowPos({ x, y });
  };
  return (
    <div
      onMouseLeave={() => setWindowPos({ x: 0, y: 0 })}
      onMouseMove={handleMouseMove}
      className="h-full w-full relative "
    >
      <div
        style={{
          top: windowPos.y ? windowPos.y + "px" : "50%",
          left: windowPos.x ? windowPos.x + "px" : "50%",
        }}
        className="window pointer-events-none -translate-x-1/2 -translate-y-1/2  transform absolute h-[200%] w-[200%] backdrop-blur-sm"
      ></div>
    </div>
  );
};

export default BlurWindow;

import React, { useState } from "react";

const TiltCard = ({ className = "", children }) => {
  const [tilt, setTilt] = useState({ mouseX: 0, mouseY: 0 });
  const handleMouseMove = (e) => {
    // const { clientX, clientY } = e;
    // const rect = e.target.getBoundingClientRect();
    // const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    // const y = -((clientY - rect.top) / rect.height) * 2 + 1;
    // setTilt({ mouseX: x, mouseY: y });
    setTilt({ mouseX: 0, mouseY: 3 })
  
  };

  return (
    <div
      onMouseLeave={() => {
        setTilt({ mouseX: 0, mouseY: 0 });
      }}
      className={className}
      onMouseMove={handleMouseMove}
      style={{
        cursor: "pointer",
        transition: "transform 0.4s ease",
        transform: `perspective(1000px) rotateX(${
          tilt.mouseY * 10
        }deg) rotateY(${tilt.mouseX * 10}deg)`,
      }}
    >
      {children}
    </div>
  );
};

export default TiltCard;

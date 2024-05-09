import React from "react";

const Loader = () => {
  return (
    <div className="bg-sky-800 min-w-screen min-h-screen w-full h-full flex items-center justify-center">
      <div className="loader">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Loader;

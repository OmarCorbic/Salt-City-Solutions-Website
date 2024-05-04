import React, { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { IoPauseOutline } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";

const Gallery = ({ photos = [] }) => {
  const [autoChange, setAutoChange] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    let interval = null;
    if (autoChange) {
      interval = setInterval(() => {
        setPhotoIndex((prevIndex) => {
          if (prevIndex + 1 > photos.length - 1) {
            moveToIndex(0);
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      }, 7000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoChange]);

  const moveLeft = () => {
    if (photoIndex - 1 < 0) {
      return;
    }

    setAutoChange(false);
    setPhotoIndex((prev) => prev - 1);
  };

  const moveRight = () => {
    if (photoIndex + 1 > photos.length - 1) {
      return;
    }

    setAutoChange(false);
    setPhotoIndex((prev) => prev + 1);
  };
  const moveToIndex = (i) => {
    if (i > photos.length - 1 || i < 0) {
      return;
    }

    setAutoChange(false);
    setPhotoIndex(i);
  };

  return (
    <div className="relative h-full w-full">
      <div className="h-full w-full">
        <img
          src={
            photos[photoIndex] &&
            photos[photoIndex].src &&
            photos[photoIndex].src
          }
          className="object-cover object-center h-full w-full"
          alt={
            photos[photoIndex] &&
            photos[photoIndex].alt &&
            photos[photoIndex].alt
          }
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center">
        <div className="absolute top-1 right-1 flex items-center justify-center">
          <button
            className={`${
              autoChange ? "hidden" : "flex"
            } items-center justify-center text-base hover:bg-black hover:bg-opacity-30 p-3 z-20  md:text-lg rounded-full  bg-opacity-50`}
            onClick={() => setAutoChange(true)}
          >
            <IoPlay />
          </button>
          <button
            className={`${
              autoChange ? "flex" : "hidden"
            } items-center justify-center text-base hover:bg-black hover:bg-opacity-30 p-3 z-20 md:text-lg rounded-full  bg-opacity-50`}
            onClick={() => setAutoChange(false)}
          >
            <IoPauseOutline />
          </button>
        </div>
        <button
          className="absolute left-1 transform z-10  scale-x-[-1] bg-opacity-55  w-20 h-[80%]  rounded-full flex items-center justify-end"
          onClick={moveLeft}
        >
          <GrNext />
        </button>
        <button
          className="absolute right-1  bg-opacity-55 z-10  w-20 h-[80%]  rounded-full flex items-center justify-end"
          onClick={moveRight}
        >
          <GrNext />
        </button>
        <div className="flex items-center z-20 mt-auto justify-center w-full gap-3 py-1 md:py-2 bg-black bg-opacity-50">
          {photos.map((_, i) => {
            return (
              <button
                key={i}
                className={`${
                  photoIndex === i ? "bg-slate-100" : "bg-slate-500"
                }  h-2 w-2 rounded-full`}
                onClick={() => moveToIndex(i)}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

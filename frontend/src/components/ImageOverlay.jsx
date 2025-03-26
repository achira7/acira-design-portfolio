import React from "react";
import Close from "../assets/icons/Close";

const ImageOverlay = ({ img, projectName, isImageOpen, setIsImageOpen }) => {
  return (
    <>
      {isImageOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-sky-950 bg-opacity-65 z-40">
          <div className="relative w-auto h-auto p-4 bg-card-primary-top rounded-lg shadow-xl">
            <button
              onClick={() => setIsImageOpen(false)}
              className="absolute top-5 right-5 cursor-pointer"
            >
              <Close
                id="clickable"
                className="w-7 h-7 text-color-red z-20 cursor-none shadow-lg"
              />
            </button>
            <img
              src={img}
              alt={`${projectName} Full View`}
              className="w-full h-full object-contain max-h-[90vh] max-w-[90vw] rounded-lg p-10"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageOverlay;

import React, { useState, useEffect, useRef } from "react";

import Tag from "./Tag";
import ImageOverlay from "./ImageOverlay.jsx";

//icons
import Behance from "../assets/icons/Behance.jsx";
import Dribble from "../assets/icons/Dribble.jsx";

const DesignCard = ({ title, description, tech, img, behance, dribble }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);

  const descriptionRef = useRef(null);

  const maxLength = 100;

  useEffect(() => {
    if (descriptionRef.current) {
      setMaxHeight(descriptionRef.current.scrollHeight);
    }
  }, [isExpanded, description]); 

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription =
    description.length > maxLength && !isExpanded
      ? `${description.slice(0, maxLength)}...`
      : description;

  return (
    <div className="rounded-3xl border border-border md:m-5 px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-primary font-primary font-semibold text-xl">
        {title}
      </h2>
      <div className="w-20vh my-3">
        {img && (
          <img
            src={img}
            alt={title}
            title="Click to View Image"
            className="rounded-xl cursor-pointer"
            onClick={() => setIsImageOpen(true)}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        )}
      </div>

      {/* <div 
        className={`transition-all duration-1000 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[1000px]" : "max-h-[100px]"
        }`}
      >
        <p className="text-primary font-primary text-base mb-4 leading-relaxed transition-all duration-300 ease-in-out"> */}
      <div
        style={{ maxHeight: `${maxHeight}px` }}
        className="transition-all duration-300 ease-in-out overflow-hidden"
      >
        <p
          ref={descriptionRef}
          className="text-primary font-primary text-base mb-4 leading-relaxed"
        >
          {truncatedDescription}
          {description.length > maxLength && (
            <a
              onClick={toggleDescription}
              className="text-blue-700 hover:text-blue-800 cursor-pointer ml-1 focus:outline-none"
            >
              {isExpanded ? "read less" : "read more"}
            </a>
          )}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-1">
        {tech.map((techItem, index) => (
          <Tag key={index} text={techItem} />
        ))}
      </div>

      <div className="flex flex-row mt-5 md:gap-5 justify-between bg-yellow-600">
        <div className="flex md:gap-x-5 justify-center ">
          {behance && (
            <a
              className="text-white"
              title="Behance Page for this project"
              target="_blank"
              href={behance}
              rel="noopener noreferrer"
            >
              <Behance />
            </a>
          )}
          {dribble && (
            <a
              className="text-white"
              title="Dribble Page for this project"
              target="_blank"
              href={dribble}
              rel="noopener noreferrer"
            >
              {" "}
              <Dribble />{" "}
            </a>
          )}
        </div>

        <div className="flex justify-cente">
          <a
            className="rounded-xl text-primary font-primary cursor-pointer drop-shadow-2xl hover:text-zinc-500 duration-300"
            title="Take a more closer look"
            rel="google.com"
          >
            <p className="[text-shadow:_0_0px_10px_rgb(0_0_0_/_90%)] md:text-base text-sm"> detailed view </p>
          </a>
        </div>
      </div>

      {isImageOpen && (
        <ImageOverlay
          img={img}
          projectName={title}
          setIsImageOpen={setIsImageOpen}
        />
      )}
    </div>
  );
};

export default DesignCard;

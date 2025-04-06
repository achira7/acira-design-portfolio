import React, { useState, useEffect, useRef } from "react";

import Tag from "./Tag";
import ImageOverlay from "./ImageOverlay.jsx";
import ImageModal from "./ImageModal.jsx";

//icons
import Behance from "../assets/icons/Behance.jsx";
import Dribble from "../assets/icons/Dribble.jsx";
import Expand from "../assets/icons/Expand.jsx";
import ExternalLink from "../assets/icons/ExternalLink.jsx";

const DesignCard = ({ title, description, tech, img, behance, dribble, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const descriptionRef = useRef(null);
  const contentRef = useRef(null);
  const maxLength = 100;

  const collapsedHeightRef = useRef(0);

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
    <div className="rounded-3xl border border-border md:m-5 px-8 py-6 shadow-xl transition-shadow bg-zinc-900">
      <h2 className="text-primary font-primary font-semibold text-xl mb-2">
        {title}
      </h2>

      <div className="flex w-20vh items-center justify-center group ">
        {img && (
          <p className="absolute z-10 text-primary text-base opacity-0 group-hover:opacity-100  duration-300">
            <Expand />
          </p>
        )}

        {img && (
          <div className="relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-950 via-zinc-900 to-zinc-800 rounded-xl cursor-pointer mb-2">
            <img
              src={img}
              alt={title}
              title="Click to View Image"
              className="rounded-xl w-full h-full object-cover group-hover:opacity-35 duration-500"
              onClick={() => setIsImageOpen(true)}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        )}
      </div>

      <div
        style={{ maxHeight: `${maxHeight}px` }}
        className="transition-all duration-300 ease-in-out overflow-hidden mb-2"
      >
        <p
          ref={descriptionRef}
          className="text-primary font-primary text-base leading-relaxed"
        >
          {truncatedDescription}
          {description.length > maxLength && (
            <a
              onClick={toggleDescription}
              className="text-blue-500 hover:text-blue-800 cursor-pointer ml-1 duration-300 focus:outline-none"
            >
              {isExpanded ? "read less" : "read more"}
            </a>
          )}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tech.map((techItem, index) => (
          <Tag key={index} text={techItem} />
        ))}
      </div>

      <div className="flex flex-row mt-5  justify-between">
        <div className="flex md:gap-x-5 justify-center items-center">
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

          {link && (
            <a
              className="text-white"
              title="Link for this project"
              target="_blank"
              href={link}
              rel="noopener noreferrer"
            >
              {" "}
              <ExternalLink className="text-3xl" />{" "}
            </a>
          )}
        </div>

        <div className="relative group z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full group-hover:blur-[0.55vw] duration-500"></div>

          <div className="relative">
            <a
              className="cursor-pointer hover:duration-500"
              title="Take a more closer look"
              rel="www.google.com"
              href="#"
            >
              <p className="text-primary font-primary text-sm border border-blue-400/70 group-hover:border-blue-300 px-4 py-1 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-600 to-blue-500 duration-500 group-hover:shadow-xl">
                detailed view
              </p>
            </a>
          </div>
        </div>
      </div>

      {isImageOpen && (
        <ImageModal
          img={img}
          projectName={title}
          title={title}
          setIsImageOpen={setIsImageOpen}
          onClose={() => setIsImageOpen(false)}
          link={"#"}
        />
      )}
    </div>
  );
};

export default DesignCard;

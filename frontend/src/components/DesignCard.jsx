import React, { useState } from "react";

import Tag from "./Tag";

//icons
import Behance from "../assets/icons/Behance.jsx";
import Dribble from "../assets/icons/Dribble.jsx";

const DesignCard = ({ title, description, tech, img, behance, dribble }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const maxLength = 100;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription =
    description.length > maxLength && !isExpanded
      ? `${description.slice(0, maxLength)}...`
      : description;

  return (
    <div className="rounded-3xl border border-border m-5 px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-primary font-primary font-semibold text-xl">
        {title}
      </h2>
      <div className="w-20vh my-3">
      {img && <img src={img} alt={title} className="rounded-xl cursor-pointer"/>}
      </div>
      
      <p className="text-primary font-primary text-base mb-4 leading-relaxed transition-all duration-300 ease-in-out overflow-hidden">
         {truncatedDescription}
        {description.length > maxLength && (
          <button
            onClick={toggleDescription}
            className="text-blue-700 hover:text-blue-800 ml-1 focus:outline-none"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((techItem, index) => (
          <Tag key={index} text={techItem} />
        ))}
      </div>

      <div className="flex flex-row mt-5 gap-5 justify-between">
        <div className="flex gap-x-5">
          {behance && (<a className="text-white" title="Behance Page for this project" target="_blank" href={behance} rel="noopener noreferrer"> <Behance /> </a>)}
          {dribble && (<a className="text-white" title="Dribble Page for this project" target="_blank" href={dribble} rel="noopener noreferrer"> <Dribble /> </a>)}
        </div>
        
        <div className="flex">
          <a className="rounded-xl text-primary font-primary cursor-pointer hover:text-zinc-500 duration-300" title="Take a more closer look" rel="google.com"> Read More </a>
        </div>
        
      </div>
    </div>
  );
};

export default DesignCard;

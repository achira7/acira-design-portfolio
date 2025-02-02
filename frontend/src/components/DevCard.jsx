import React, { useState } from "react";

import Tag from "./Tag";

const DevCard = ({ title, description, tech }) => {
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
      <h2 className="text-primary font-primary font-semibold text-xl mb-2">
        {title}
      </h2>
      <p className="text-primary font-primary text-base mb-4 leading-relaxed ">
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

      <div className="flex flex-row mt-5 gap-5">
        <button className="rounded-xl text-primary font-primary"> GitHub</button>
        <button className="rounded-xl text-primary font-primary"> Live Demo </button>

      </div>
    </div>
  );
};

export default DevCard;

import React from "react";

import Carousel from "../components/Carousel";

const DesignView = (title, images, date, behance, dribble, tech) => {
  return (
    <div>
      <h1>{title}</h1>
      <Carousel />
    </div>
  );
};

export default DesignView;

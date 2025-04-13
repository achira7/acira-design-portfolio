import React from "react";

import Carousel from "../components/Carousel";

const DesignView = (title, images, date, behance, dribble, tech) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <Carousel />
      </div>

      <div className="flex w-full items-center justify-center mt-5 mb-4">
        <hr className="h-[1px] w-[60%] border-t-0 bg-border/50" />
      </div>

      <div>
        <p>
          Passive noise cancellation (PNC), also known as passive noise
          isolation, reduces ambient noise by using physical design features
          like earcups, materials, and ear tip fit to block sound from reaching
          the ear. Unlike active noise cancellation, which uses technology to
          actively cancel out noise, PNC relies on a physical barrier to
          minimize unwanted sounds.{" "}
        </p>
      </div>
    </div>
  );
};

export default DesignView;

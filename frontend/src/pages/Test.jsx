import React from "react";

import Carousel from "../components/Carousel";
import Tag from "../components/Tag";

import ArrowLeft from "../assets/icons/ArrowLeft";
import CarouselIcon from "../assets/icons/CarouselIcon";

const title = "Be Yourseldf Design";

const tech = ["Figma", "InDesign"];

const img = [
  "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTkyMHgxMDgwfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDE5MjB4MTA4MHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1487252015168-776961549aca?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fDE5MjB4MTA4MCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1723983555804-4f76968a2a2d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8MTkyMHgxMDgwJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1478001517127-fccc92f54906?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fDE5MjB4MTA4MCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
];

const Test = () => {
  return (
    <div className="flex flex-col text-primary mt-2 font-primary items-center justify-center">

      <div className="flex flex-row justify-center items-center gap-x-52 py-7">
        <div className="flex mx-5">
          <ArrowLeft className="h-8 w-8" />
        </div>

        <div className="flex flex-col items-center justify-center">

          <h1 className="flex text-2xl font-semibold cursor-default">
            {title}
          </h1>

          <h1 className="text-base font-primary text-zinc-400 cursor-pointer">
            {"UI/UX Design"}
          </h1>

        </div>

        <div className="flex">
          <button className="flex py-2 px-5 gap-x-3 justify-center items-center rounded-full hover:bg-zinc-400/50 duration-300 group">
            <div className="flex text-zinc-400 text-2xl group-hover:text-white duration-300">
              <CarouselIcon className=" " />
            </div>
            <p className="flex text-base">Carousel View</p>
          </button>
        </div>
      </div>

      {/* <div className="flex w-[80%]">
        <Carousel images={img} />
      </div>  */}

      {/* <div className="flex flex-row items-center justify-center gap-x-4 my-3">

        <div className="flex flex-row gap-x-3">
          {tech.map((techItem, index) => (
            <Tag key={index} text={techItem} />
          ))}
        </div>
      </div> */}

      <div className="flex w-full items-center justify-center mb-4">
        <hr className="h-[1px] w-[60%] border-t-0 bg-border/50" />
      </div>

      <div className="grid grid-cols-2 gap-10 m-10 ">
        <div className="flex ">
          {/* <p className="">
            Passive noise cancellation (PNC), also known as passive noise
            isolation, reduces ambient noise by using physical design features
            like earcups, materials, and ear tip fit to block sound from
            reaching the ear. Unlike active noise cancellation, which uses
            technology to actively cancel out noise, PNC relies on a physical
            barrier to minimize unwanted sounds.
          </p> */}
          <img src={img[1]} alt="image" />
        </div>

        <div className="flex ">
          <p className="">
            <img src={img[2]} alt="image" />
            {/* Passive noise cancellation (PNC), also known as passive noise
            isolation, reduces ambient noise by using physical design features
            like earcups, materials, and ear tip fit to block sound from
            reaching the ear. Unlike active noise cancellation, which uses
            technology to actively cancel out noise, PNC relies on a physical
            barrier to minimize unwanted sounds. */}
          </p>
        </div>

        <div className="flex">
          <p className="">
            Passive noise cancellation (PNC), also known as passive noise
            isolation, reduces ambient noise by using physical design features
            like earcups, materials, and ear tip fit to block sound from
            reaching the ear. Unlike active noise cancellation, which uses
            technology to actively cancel out noise, PNC relies on a physical
            barrier to minimize unwanted sounds.
          </p>
        </div>

        <div className="flex">
          {/* <p className="">
            Passive noise cancellation (PNC), also known as passive noise
            isolation, reduces ambient noise by using physical design features
            like earcups, materials, and ear tip fit to block sound from
            reaching the ear. Unlike active noise cancellation, which uses
            technology to actively cancel out noise, PNC relies on a physical
            barrier to minimize unwanted sounds.
          </p> */}
          <img src={img[3]} alt="image" />
        </div>

      </div>
    </div>
  );
};

export default Test;

import { React, useState } from "react";

import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import CarouselModal from "../components/CarouselModal";

import ArrowLeft from "../assets/icons/ArrowLeft";
import CarouselIcon from "../assets/icons/CarouselIcon";

import img1 from '../assets/images/1.webp';
import img2 from '../assets/images/2.webp';
import img3 from '../assets/images/3.webp';
import img4 from '../assets/images/4.webp';

const title = "Be Yourseldf Design";

const tech = ["Figma", "InDesign"];

// const img = [
//   "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTkyMHgxMDgwfGVufDB8fDB8fHww",
//   "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDE5MjB4MTA4MHxlbnwwfHwwfHx8MA%3D%3D",
//   "https://images.unsplash.com/photo-1487252015168-776961549aca?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fDE5MjB4MTA4MCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1723983555804-4f76968a2a2d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8MTkyMHgxMDgwJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
//   "https://images.unsplash.com/photo-1478001517127-fccc92f54906?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fDE5MjB4MTA4MCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
// ];

const img = [
  img1, img2, img3, img4
]

const Test = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <div className="flex flex-col text-primary mt-2 font-primary items-center justify-center">
      {/* <div className="flex flex-row justify-center items-center gap-x-64 py-7 bg-teal-500"> */}
      <div className="relative flex flex-row justify-between items-center w-[80%] mx-auto pt-10 pb-8">


        <div className="flex">
          <button
            className="flex-1 mx-5 rounded-full hover:bg-zinc-400/50 duration-300 p-1 group "
            title="Go Back"
          >
            <ArrowLeft className="h-8 w-8 text-text-zinc-400 group-hover:scale-110 group-hover:text-white duration-300 mr-1" />
          </button>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold cursor-default text-center">
            {title}
          </h1>
          <h1 className="text-base font-primary text-zinc-400 cursor-pointer mt-1">UI/UX Design</h1>

          {/* <div className="mt-1">
            <Tag text="UI/UX Design" />
          </div> */}
        </div>

        <div className="flex">
          <button
            className="flex py-2 px-5 gap-x-3 justify-center items-center rounded-full hover:bg-zinc-400/50 duration-300 group"
            onClick={() => setIsImageOpen(true)}
          >
            <div className="flex text-zinc-400 text-2xl group-hover:text-white duration-300">
              <CarouselIcon />
            </div>
            <p className="flex text-base">Carousel View</p>
          </button>
        </div>
      </div>

      {/* <div className="flex w-full items-center justify-center mb-4">
        <hr className="h-[1px] w-[65%] border-t-0 bg-border/50" />
      </div> */}

      {/* DESIGN CONTENT BODY */}

      <div className="grid grid-cols-2 gap-10 m-10 mt-5">
        <div className="flex ">
          {/* <p className="">
            Passive noise cancellation (PNC), also known as passive noise
            isolation, reduces ambient noise by using physical design features
            like earcups, materials, and ear tip fit to block sound from
            reaching the ear. Unlike active noise cancellation, which uses
            technology to actively cancel out noise, PNC relies on a physical
            barrier to minimize unwanted sounds.
          </p> */}
          <img src={img[1]} alt="image" className="rounded-xl h-[20wv]" />
        </div>

        <div className="flex ">
          <p className="">
            <img src={img[1]} alt="image" className="rounded-xl" />
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
          <img src={img[2]} alt="image" className="rounded-xl h-96" />
        </div>
      </div>

      {isImageOpen && (
        <CarouselModal images={img} onClose={() => setIsImageOpen(false)} />
      )}
    </div>
  );
};

export default Test;

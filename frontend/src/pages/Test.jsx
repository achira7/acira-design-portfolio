import React from "react";

import Carousel from "../components/Carousel";
import Tag from "../components/Tag";

import ArrowLeft from "../assets/icons/ArrowLeft";

const title = "Be Yourseldf Design";

const tech = ["Figma", "InDesign"];

const img = [
  "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTkyMHgxMDgwfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDE5MjB4MTA4MHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1487252015168-776961549aca?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fDE5MjB4MTA4MCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOQCpOkPwRh6t2JW2LQpFKilE9dsUe1SduQ&shttps://images.unsplash.com/photo-1502856755506-d8626589ef19?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8MTkyMHgxMDgwJTIwd2FsbHBhcGVyc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://haman.no/wp-content/uploads/2024/05/lukas-tennie-54Pfu4EK4pc-unsplash-1920x1080.jpg",
  "https://plus.unsplash.com/premium_photo-1723983555804-4f76968a2a2d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8MTkyMHgxMDgwJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1478001517127-fccc92f54906?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fDE5MjB4MTA4MCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
];

const Test = () => {
  return (
    <div className="flex flex-col text-primary mt-2 font-primary items-center justify-center">

      <div className="flex flex-cols justify-center items-center">
          <div className="w-24">
          <ArrowLeft  className="size-28"/>
          </div>

          <div>
            <h1 className="flex my-5 text-2xl font-semibold">{title}</h1>
          </div>
      </div>

      {/* <div className="flex">
         <ArrowLeft /> 
      </div>
      <h1 className="flex my-5 text-2xl font-semibold">{title}</h1>
      <div className="flex w-[80%]">
        <Carousel images={img} />
      </div> */}

      <div className="flex w-full items-center justify-center mt-10 mb-4">
        <hr className="h-[1px] w-[60%] border-t-0 bg-border/50" />
      </div>

      <div className="flex flex-row items-center justify-center gap-x-4 my-3">
        <div className="flex flex-row gap-x-3">
          <h1 className="text-base font-primary font-semibold">Category</h1>
          <h1 className="text-base font-primary text-gray cursor-pointer">
            {"UI/UX Design"}
          </h1>
        </div>

        <div className="flex mx-4">
          <h1 className="text-base font-primary text-gray"> | </h1>
        </div>

        <div className="flex flex-row gap-x-3">
          {tech.map((techItem, index) => (
            <Tag key={index} text={techItem} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 m-10">
        <div className="flex m-5">
          <p className="">
            Passive noise cancellation (PNC), also known as passive noise
            isolation, reduces ambient noise by using physical design features
            like earcups, materials, and ear tip fit to block sound from
            reaching the ear. Unlike active noise cancellation, which uses
            technology to actively cancel out noise, PNC relies on a physical
            barrier to minimize unwanted sounds.
          </p>
        </div>

        <div className="flex m-5">
          <p className="">
            Passive noise cancellation (PNC), also known as passive noise
            isolation, reduces ambient noise by using physical design features
            like earcups, materials, and ear tip fit to block sound from
            reaching the ear. Unlike active noise cancellation, which uses
            technology to actively cancel out noise, PNC relies on a physical
            barrier to minimize unwanted sounds.
          </p>
        </div>

        <div className="flex m-5">
          <p className="">
            Passive noise cancellation (PNC), also known as passive noise
            isolation, reduces ambient noise by using physical design features
            like earcups, materials, and ear tip fit to block sound from
            reaching the ear. Unlike active noise cancellation, which uses
            technology to actively cancel out noise, PNC relies on a physical
            barrier to minimize unwanted sounds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Test;

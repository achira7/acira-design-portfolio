import React from "react";
import reactLogo from "../assets/react.svg";
import mcdonalds from "../assets/mcdonalds.svg";

const Home = () => {
  return (
    <div className="flex justify-between  w-full  bg-yellow-300">
      {/* Left Section */}
      <div className="bg-red-400 flex items-center">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Center Section */}
      <div className="flex-grow bg-purple-400 flex items-center justify-center">
        text
      </div>

      {/* Right Section */}
      <div className="flex flex-col bg-blue-500 items-end">

        
      <div className="flex flex-row items-center justify-center font-primary text-5xl capitalize mb-2 py-5">
          <a href="/" className="px-5">
            Home
          </a>
          <img src={mcdonalds} alt="" className="w-10"/>
          
        </div>

        <div className="flex flex-row items-center justify-center font-primary text-5xl capitalize mb-2 py-5">
          <a href="/" className="px-5">
            Designs
          </a>
          <img src={mcdonalds} alt="" className="w-10"/>
          
        </div>

        <div className="flex flex-row items-center justify-center font-primary text-5xl capitalize mb-2 py-5">
          <a href="/" className="px-5">
            Music
          </a>
          <img src={mcdonalds} alt="" className="w-10"/>
          
        </div>


        <div className="flex flex-row items-center justify-center font-primary text-5xl capitalize mb-2 py-5">
          <a href="/" className="px-5">
            About
          </a>
          <img src={mcdonalds} alt="" className="w-10"/>
          
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";

//icons
import Hamburger from "../assets/icons/Hamburger.jsx";
import Close from "../assets/icons/Close.jsx";

const NavBar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  useEffect(() => {
    if (isHamburgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isHamburgerOpen]);

  return (
    <div className="flex fixed border-b border-white/60 mx-auto w-full z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center w-full h-full px-4 bg-background/30 backdrop-blur-xl">
        {/* Name Section - Left Aligned */}
        <div className="flex-1 flex justify-start ml-20">
          {" "}
          {/* Added flex-1 and justify-start */}
          <div className="font-primary text-primary font-semibold text-2xl textShadow tracking-wide py-7">
            <a href="/"> achira silva </a>
          </div>
        </div>

        {/* Menu Items - Right Aligned */}
        <div className="flex-1 flex justify-end mr-20">
          <div className="flex font-primary font-medium text-primary gap-20 text-xl ">
            <a href="/" className="hover:text-blue transition duration-500">
              home
            </a>
            <a
              href="/design"
              className="hover:text-red transition duration-500"
            >
              design
            </a>
            <a href="/music" className="hover:text-red transition duration-500">
              dev
            </a>
            <a href="/about" className="hover:text-red transition duration-500">
              about
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={`flex sticky top-0 md:hidden items-center w-full z-20 bg-background/30 backdrop-blur-xl border-white/60 ${isHamburgerOpen ? "border-r border-l" : ""}`}>
      <div className="flex px-8 items-start">
          <button
            className={`text-color-primary text-lg font-bold transition-transform duration-500 ease-in-out ${
              isHamburgerOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          >
            <span className="duration-500 px-5">
              {isHamburgerOpen ? <Close /> : <Hamburger />}
            </span>
          </button>
          {!isHamburgerOpen && (
            <div className="text-color-secondary font-inter text-2xl font-bold">
              {" "}
            </div>
          )}
        </div>

        <div className="font-primary text-primary font-semibold text-2xl textShadow tracking-wide">
          <a href="/">achira silva</a>
        </div>
      </div>

      {/* Hamburger Menu */}
      {isHamburgerOpen && (
        <div className="border border-white/60 rounded-2xl fixed top-0 w-full bg-background/30 backdrop-blur-xl z-10 flex flex-col items-center justify-center gap-10 text-xl font-medium">
          <div className="flex flex-col items-center justify-center gap-y-14 mt-20 py-12">
            <a
              href="/"
              className="text-white"
              onClick={() => setIsHamburgerOpen(false)}
            >
              home
            </a>
            <a
              href="/design"
              className="text-white"
              onClick={() => setIsHamburgerOpen(false)}
            >
              design
            </a>
            <a
              href="/music"
              className="text-white"
              onClick={() => setIsHamburgerOpen(false)}
            >
              dev
            </a>
            <a
              href="/about"
              className="text-white"
              onClick={() => setIsHamburgerOpen(false)}
            >
              about
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

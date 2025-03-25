import React from "react";

//icons
import LinkedIn from "../assets/icons/LinkedIn.jsx";
import Behance from "../assets/icons/Behance.jsx";
import GitHub from "../assets/icons/GitHub.jsx";
import Instagram from "../assets/icons/Instagram.jsx";
import Dribble from "../assets/icons/Dribble.jsx";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center p-8 w-full align-bottom bg-black/30 z-20">
      <div className="flex flex-row py-5 gap-x-7 text-zinc-700">
        <a href="https://www.linkedin.com/in/achira-silva/" target="_blank" rel="noopener noreferrer">
          <LinkedIn className="size-8" />
        </a>

        <a href="https://github.com/achira7" target="_blank" rel="noopener noreferrer">
          <GitHub />
        </a>

        <a href="https://www.instagram.com/axhira/" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </a>

        <a href="https://www.behance.net/achira_silva" target="_blank" rel="noopener noreferrer">
          <Behance />
        </a>

        <a href="https://dribbble.com/AchiraSilva" target="_blank" rel="noopener noreferrer">
          <Dribble />
        </a>
      </div>

      <div className="flex font-secondary text-gray text-sm md:text-lg tracking-wide pb-2">
        DESIGNED & DEVELOPED BY &nbsp; <b> ACHIRA SILVA </b>
      </div>
    </footer>
  );
};

export default Footer;

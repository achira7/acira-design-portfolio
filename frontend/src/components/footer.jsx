import React from "react";

//icons
import LinkedIn from "../assets/icons/LinkedIn.jsx";
import Behance from "../assets/icons/Behance.jsx";
import GitHub from "../assets/icons/GitHub.jsx";
import Instagram from "../assets/icons/Instagram.jsx";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center p-8 w-full align-bottom">
      <div className="flex flex-row py-5 gap-x-7 text-zinc-700">
        <a href="https://www.linkedin.com/in/achira-silva/" target="_blank">
          <LinkedIn className="size-8" />
        </a>

        <a href="https://www.behance.net/achira_silva" target="_blank">
          <Behance />
        </a>

        <a href="https://github.com/achira7" target="_blank">
          <GitHub />
        </a>

        <a href="https://www.instagram.com/axhira/" target="_blank">
          <Instagram />
        </a>
      </div>

      <div className="flex font-secondary text-gray text-sm md:text-lg tracking-wide pb-2">
        DESIGNED & DEVELOPED BY &nbsp; <b> ACHIRA SILVA </b>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center border-b-2 border-border mx-auto max-w-[80%]">
      <div className="flex justify-between items-center w-full my-10 px-4"> {/* Changed to w-full and added px-4 */}

        {/* Name Section - Left Aligned */}
        <div className="flex-1 flex justify-start ml-10"> {/* Added flex-1 and justify-start */}
          <div className="font-primary text-primary font-semibold text-3xl textShadow tracking-wide"
               style={{ textShadow: '3px 3px 5px rgba(240, 240, 240, 0.5)' }}>
            <a href="/">achira silva</a>
          </div>
        </div>

        {/* Menu Items - Right Aligned */}
        <div className="flex-1 flex justify-end mr-10"> 
          <div className="flex font-primary font-medium text-primary gap-20 text-2xl"> {/* Changed gap to 16 */}
            <a href="/" className="hover:text-red transition duration-500">
              home
            </a>
            <a href="/design" className="hover:text-red transition duration-500">
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
    </div>
  );
};

export default NavBar;
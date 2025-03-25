import React from 'react'

const footer = () => {
  return (
    <footer className="flex justify-center items-center p-8 w-full">
        {/* <div className="flex font-primary text-blue gap-10 text-5xl ">
          <a href="/design" className="hover:text-red transition duration-700">
            DESIGN
          </a>
          <a href="/music" className="hover:text-red transition duration-700">
            MUSIC
          </a>
          <a href="/about" className="hover:text-red transition duration-700">
            ABOUT
          </a>
        </div> */}
        <div className="flex font-secondary text-gray text-lg tracking-wide">
          DESIGNED & DEVELOPED BY &nbsp; <b> ACHIRA SILVA </b>
        </div>
      </footer>
  )
}

export default footer
import React from 'react'

const NavBar = () => {
  return (
    <div className="flex font-primary text-blue items-center justify-center my-10 gap-24 uppercase text-5xl ">
        <a href="/" className="hover:text-red transition duration-500">
            Home
          </a>
          <a href="/design" className="hover:text-red transition duration-500">
            Design
          </a>
          <a href="/music" className="hover:text-red transition duration-500">
            Music
          </a>
          <a href="/about" className="hover:text-red transition duration-500">
            About
          </a>
        </div>
  )
}

export default NavBar
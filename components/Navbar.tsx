import React from 'react'

export const Navbar = () => {
  return (
        <nav className="lg:flex lg:justify-between z-50 relative">
          <h1 className="text-center text-2xl cursor-pointer font-black italic text-blue-400 ">IZET DELIBASIC</h1>        
          <ul className="hidden lg:flex gap-12 items-center">
            <li className="relative">
              <a href="#" className="text-blue-400 font-bold text-sm uppercase hover:text-blue-400 transition-all">home</a>
            </li>
            <li className="relative">
              <a href="#" className="font-bold text-sm uppercase hover:text-blue-400 transition-all">my projects</a>
            </li>
            <li className="relative">
              <a href="#" className="font-bold text-sm uppercase hover:text-blue-400 transition-all">about me</a>
            </li>
          </ul>
        </nav>
  )
}

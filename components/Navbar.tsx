'use client'

import React from 'react';

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      console.log(`Scrolling to section with ID: ${id}`);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <nav className="lg:flex lg:justify-between z-50 relative">
      <h1 className="text-center text-2xl cursor-pointer font-black italic text-blue-400">
        IZET DELIBASIC
      </h1>
      <ul className="hidden lg:flex gap-12 items-center">
        <li className="relative">
          <a
            href="#"
            onClick={() => scrollToSection('home')}
            className="font-bold text-sm uppercase hover:text-blue-400 transition-all"
          >
            HOME
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            onClick={() => scrollToSection('myskills')}
            className="font-bold text-sm uppercase hover:text-blue-400 transition-all"
          >
            MY SKILLS
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            onClick={() => scrollToSection('myprojects')}
            className="font-bold text-sm uppercase hover:text-blue-400 transition-all"
          >
            MY PROJECTS
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            onClick={() => scrollToSection('aboutme')}
            className="font-bold text-sm uppercase hover:text-blue-400 transition-all"
          >
            ABOUT ME
          </a>
        </li>
      </ul>
    </nav>
  );
};

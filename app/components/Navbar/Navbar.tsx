// - React -
import React from "react";
// - Constant -
import { navbarConst } from "@/utils/constants/navbarConstant";

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      console.log(`Scrolling to section with ID: ${id}`);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="lg:flex lg:justify-between z-50 relative">
      <div className="text-center text-[1.5rem] cursor-pointer font-black text-blue-400 font-subtitle mt-10 lg:mt-0">
        IZET DELIBASIC
      </div>
      <ul className="hidden lg:flex gap-[3rem] items-center">
        {navbarConst.map((item) => (
          <li className="relative" key={item.sectionId}>
            <a
              href="#"
              onClick={() => scrollToSection(item.sectionId)}
              className="font-medium font-subtitle text-[1rem] uppercase hover:text-blue-400 ease-in-out duration-200"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

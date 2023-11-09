'use client'

import { Navbar } from "@/components/Navbar";
import { PortfolioCard } from "@/components/PortfolioCard";
import Info from "@/components/Info";
import { FiChevronDown } from "react-icons/fi";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      console.log(`Scrolling to section with ID: ${id}`);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="">
      {/* SECTION 1 - NAVBAR + HEADER + HERO*/}
      <div id="section1" className="min-h-screen space-y-8 lg:space-y-16 relative">
        <Navbar />
        <PortfolioCard />
        <Info />
        <FiChevronDown className="mx-auto font-black text-6xl animate-bounce cursor-pointer mt-4" onClick={() => scrollToSection('myskills')} />
      </div>

      {/* SECTION 2  - SKILLS */}
      <Skills />

      {/* SECTION 3  - PROJECTS */}
      <Projects />
  </div>
  );
}
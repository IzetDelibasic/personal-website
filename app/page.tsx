'use client'

// Icons
import { FiChevronDown } from "react-icons/fi";

// Components
import Navbar from "@/app/components/Navbar";
import PortfolioCard from "@/app/components/Card";
import Info from "@/app/components/Info";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import AboutMe from "@/app/components/About";
import Experience from "@/app/components/Experience";

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

      {/* SECTION 4  - ABOUT ME */}
      <AboutMe />
      {/* SECTION 5  - EXPERIENCE */}
      <Experience />

  </div>
  );
}
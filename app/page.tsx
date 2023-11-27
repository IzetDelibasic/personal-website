'use client'

// Icons
import { FiChevronDown } from "react-icons/fi";

// Components
import Navbar from "@/components/NavbarComponent";
import PortfolioCard from "@/components/CardComponent";
import Info from "@/components/InfoComponent";
import Skills from "@/components/SkillsComponent";
import Projects from "@/components/ProjectsComponent";
import AboutMe from "@/components/AboutComponent";

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

  </div>
  );
}
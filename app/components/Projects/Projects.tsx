import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { projectsConstant } from "@/utils/constants/projectConstant";

const Button = dynamic(() => import("@/app/components/Button/Button"));

const Projects = () => {
  return (
    <div className="">
      <div id="myprojects" className="mt-[5rem] lg:mt-[10rem] space-y-8 lg:space-y-10 relative">
        <div className="text-[2rem] lg:text-[2.5rem] font-light flex gap-2 flex-wrap justify-center text-center items-center card border-gray-200 border-4 p-10 w-[90%] sm:w-[60%] md:w-[50%] xl:w-[25%] mx-auto font-subtitle">
          <span className="text-gray-500">Selected</span>
          <span className="font-medium">Works</span>
        </div>

        <div className="space-y-20 lg:space-y-32 w-[90%] md:w-[80%] mx-auto">
          {projectsConstant.map((project, index) => (
            <div
              key={index}
              className={`flex w-full items-center justify-center mt-[5rem] ${
                index % 2 === 0 ? "" : "lg:flex-col"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5rem] w-full lg:w-[90%] border-gray-500 border-b lg:border-b-0 pb-12 lg:pb-0">
                <div className="col-span-1 w-full">
                  <Image
                    src={project.imageSrc}
                    className="lg:w-full lg:h-full w-[25rem] rounded-[2rem] lg:rounded-tl-none lg:rounded-br-none lg:hover:rounded-br-[2rem] lg:hover:rounded-tl-[2rem] transition-all duration-300 shadow-lg mx-auto"
                    alt="work"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="col-span-1 w-full h-full flex flex-col justify-center items-center space-y-8 font-montserrat text-center">
                  <h1 className="uppercase font-medium">{project.title}</h1>
                  <p className="xl:text-[1.2rem] font-light leading-relaxed">
                    {project.description}
                  </p>
                  <Button
                    className="relative bg-blue-400 text-black border-[1px] border-black font-medium lg:py-[1.5rem] py-[1rem] lg:px-[3rem] px-[4.5rem] md:px-[11.5rem] rounded-[3rem] group overflow-hidden z-[1] lg:ml-[20px] hover:border-opacity-0 hover:border-transparent"
                    iconClassName=""
                    title={project.buttonTitle}
                    titleClassName="group-hover:text-white"
                    href={project.link}
                  >
                    <div className="absolute inset-0 bg-neutral-100 w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

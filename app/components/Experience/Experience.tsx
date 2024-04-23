import React from "react";
import { educationConstant } from "@/utils/constants/educationConstant";
import { competitionConstant } from "@/utils/constants/competitionConstant";

const Experience = () => {
  return (
    <div
      id="experience"
      className="my-[5rem] lg:mt-[10rem] space-y-8 lg:space-y-10 relative"
    >
      <div className="lg:border-b-2 lg:border-white pt-[5rem] lg:w-[90%] mx-auto">
        <div className="text-3xl lg:text-5xl font-light flex gap-2 flex-wrap justify-center text-center items-center card border-gray-200 border-4 p-10 lg:w-[85%] xl:w-[45%] mx-auto font-subtitle my-[1rem]">
          <span className="font-medium">Education and courses</span>
        </div>
        <div className="w-[95%] mx-auto text-center font-subtitle flex lg:flex-row flex-col lg:justify-between justify-center items-center">
          <div className="my-[1rem] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto lg:border-r-0 border-b-2 lg:border-b-0 border-gray-400 lg:px-[1rem] py-[1rem]">
            {educationConstant.map((education) => (
              <div key={education.educationTitle} className="p-4">
                <a href={education.href} className="p-4">
                  <div className="md:text-[2rem] font-montserrat">
                    {education.educationTitle}
                  </div>
                  <div className="md:text-[1.2rem] font-extralight">
                    {education.educationDescription}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:border-b-2 lg:border-white pt-[5rem] w-[90%] mx-auto">
        <div className="text-3xl lg:text-5xl font-light flex gap-2 flex-wrap justify-center text-center items-center card border-gray-200 border-4 p-10 lg:w-[85%] xl:w-[45%] mx-auto font-subtitle my-[1rem]">
          <span className="font-medium">Competitive experience</span>
        </div>
        <div className="w-[95%] mx-auto text-center font-subtitle flex lg:flex-row flex-col lg:justify-between justify-center items-center">
          <div className="my-[1rem] grid md:grid-cols-2 grid-cols-1 mx-auto border-b-2 lg:border-b-0 border-gray-400 lg:px-[1rem] py-[1rem]">
            {competitionConstant.map((competition) => (
              <div key={competition.competitionTitle} className="p-4">
                <div className="md:text-[1.8rem] font-montserrat">
                  {competition.competitionTitle}
                </div>
                <div className="md:text-[1.2rem] font-extralight">
                  {competition.competitionDescription}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

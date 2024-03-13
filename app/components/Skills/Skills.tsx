// -React-
import React from "react";
// -Next-
import Image from "next/image";
// -Constants-
import { technologyConstant } from "@/utils/constants/technologyConstant";
import { toolsConstant } from "@/utils/constants/toolsConstant";

const Skills = () => {
  return (
    <div className="">
      {/* - Technologies - */}
      <div id="myskills" className="space-y-2 lg:space-y-2 relative">
        <div className="text-[1.75rem] lg:text-[2.5rem] text-center font-light flex gap-2 flex-wrap justify-center items-center card border-gray-200 border-4 p-[2.5rem] lg:w-[75%] xl:w-[50%] mx-auto font-subtitle">
          <span className="text-gray-500">Some of the</span>
          <span className="font-medium"> technologies I have used: </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 w-full pt-10">
          {technologyConstant.map((image, index) => (
            <div
              key={index}
              className="col-span-1 flex justify-center items-center"
            >
              <Image
                alt={image.alt}
                src={image.src}
                className="cursor-pointer hover:scale-105 transition-all rounded-[1rem]"
                width={150}
                height={150}
              />
            </div>
          ))}
        </div>
      </div>
      {/* - Tools - */}
      <div className="space-y-2 lg:space-y-2 relative pt-[5rem]">
        <div className="text-[1.75rem] lg:text-[2.5rem] text-center font-light flex gap-2 flex-wrap justify-center items-center card border-gray-200 border-4 p-[2.5rem] lg:w-[75%] xl:w-[50%] mx-auto font-subtitle">
          <span className="text-gray-500">Some of the</span>
          <span className="font-medium"> tools I have used: </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 w-full pt-10">
          {toolsConstant.map((image, index) => (
            <div
              key={index}
              className="col-span-1 flex justify-center items-center"
            >
              <Image
                alt={image.alt}
                src={image.src}
                className="cursor-pointer hover:scale-105 transition-all"
                width={150}
                height={150}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

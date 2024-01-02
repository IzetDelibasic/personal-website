"use client";
// -React-
import React from "react";
// -Next-
import Image from "next/image";
import dynamic from "next/dynamic";
// -Button component-
const Button = dynamic(() => import("@/app/components/Button/Button"));

const Projects = () => {
  return (
    <div className="">
      <div id="myprojects" className="mt-[5rem] lg:mt-[10rem] space-y-8 lg:space-y-10 relative">
        <div className="text-3xl lg:text-5xl font-light flex gap-2 flex-wrap justify-center text-center items-center card border-gray-200 border-4 p-10 lg:w-[75%] xl:w-[25%] mx-auto font-subtitle">
          <span className="text-gray-500">Selected</span>
          <span className="font-medium">Works</span>
        </div>

        <div className="space-y-20 lg:space-y-32 w-5/6 mx-auto">
          {/* WORK 1 */}
          <div className="flex w-full justify-center mt-[5rem]">  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5rem] w-full lg:w-5/6 border-gray-500 border-b lg:border-b-0 pb-12 lg:pb-0">
              <div className="col-span-1 w-full">
                <Image
                  src="/images/tasty-treasure.png"
                  className="rounded-[2rem] shadow-lg mx-auto"
                  alt="work"
                  width={600}
                  height={600}
                />
              </div>
              <div className="col-span-1 w-full h-full flex flex-col justify-center items-center space-y-8 font-about text-center">
                <h1 className="uppercase font-medium">TASTY TREASURES</h1>
                <p className="text-3xl font-light leading-relaxed">
                  <span className="text-gray-500">This is my first solo project in </span>
                  <span className="font-semibold">ReactJS</span>
                  <span className="text-gray-500">, where I applied the knowledge I&apos;ve learned and built </span>
                  <span className="font-semibold">a frontend application for recipe ideas.</span>
                  <span className="text-gray-500"> I used Firebase as the database to allow users to save their profiles.</span>
                </p>
                <h6 className="font-light text-gray-400">Web Application Design</h6>
                <Button
                  className="relative bg-blue-400 text-black border-[1px] border-black font-medium lg:py-[1.5rem] py-[1rem] lg:px-[2rem] px-[4.5rem] md:px-[11.5rem] rounded-[3rem] group overflow-hidden z-[1] lg:ml-[20px] hover:border-opacity-0 hover:border-transparent"
                  iconClassName=""
                  title="View on Github"
                  titleClassName="group-hover:text-white"
                  href="https://github.com/IzetDelibasic/tasty-treasures"
                >
                  <div className="absolute inset-0 bg-neutral-100 w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
                </Button>
              </div>
            </div>
          </div>
          {/* WORK 2 */}
          <div className="flex w-full justify-center mt-[5rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5rem] w-full lg:w-[80%] border-gray-500 border-b lg:border-b-0 pb-12 lg:pb-0 font-about text-center">
              <div className="col-span-1 w-full h-full flex flex-col justify-center items-center space-y-8">
                <h1 className="uppercase font-medium font-subtitle">Survival Quest</h1>
                <p className="text-[1.75rem] font-light leading-relaxed">
                  <span className="text-gray-500">A survival game being developed using </span>
                  <span className="font-semibold">Unity and C# scripts</span>
                  <span className="text-gray-500">, offering a high level of immersion and a wide range of features. The game is currently in the development phase, with much more to come soon.</span>
                </p>
                <h6 className="font-light text-gray-400 font-subtitle">Game Folder</h6>
                <Button
                  className="relative bg-blue-400 text-black border-[1px] border-black font-medium lg:py-[1.5rem] py-[1rem] lg:px-[2rem] px-[4.5rem] md:px-[11.5rem] rounded-[3rem] group overflow-hidden z-[1] lg:ml-[20px] hover:border-opacity-0 hover:border-transparent"
                  iconClassName=""
                  title="View on Github"
                  titleClassName="group-hover:text-white"
                  href="https://github.com/IzetDelibasic/survival-quest"
                >
                  <div className="absolute inset-0 bg-neutral-100 w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
                </Button>
              </div>
              <div className="col-span-1 w-full">
                <Image
                  src="/images/survival-quest.png"
                  className="rounded-[2rem] shadow-lg mx-auto"
                  alt="work"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
          {/* WORK 1 */}
          <div className="flex w-full justify-center mt-[5rem]">  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5rem] w-full lg:w-5/6 border-gray-500 border-b lg:border-b-0 pb-12 lg:pb-0">
              <div className="col-span-1 w-full">
                <Image
                  src="/images/sumathermImage.png"
                  className="rounded-[2rem] shadow-lg mx-auto"
                  alt="work"
                  width={600}
                  height={600}
                />
              </div>
              <div className="col-span-1 w-full h-full flex flex-col justify-center items-center space-y-8 font-about text-center">
                <h1 className="uppercase font-medium">SUMATHERM GMBH</h1>
                <p className="text-3xl font-light leading-relaxed">
                  <span className="text-gray-500">This is my first</span>
                  <span className="font-semibold"> production project</span>
                  <span className="text-gray-500">, where I worked for BlueDuck IT Services & Solutions company and </span>
                  <span className="font-semibold">built an app for Sumatherm Company using NextJS.</span>
                  <span className="text-gray-500"> I used TypeScript and Tailwind CSS. I learned to work with reusable components, constants, and other features for faster page speed.</span>
                </p>
                <h6 className="font-light text-gray-400">Website Link</h6>
                <Button
                  className="relative bg-blue-400 text-black border-[1px] border-black font-medium lg:py-[1.5rem] py-[1rem] lg:px-[2rem] px-[4.5rem] md:px-[11.5rem] rounded-[3rem] group overflow-hidden z-[1] lg:ml-[20px] hover:border-opacity-0 hover:border-transparent"
                  iconClassName=""
                  title="Browse website"
                  titleClassName="group-hover:text-white"
                  href="https://sumatherm-project.vercel.app/"
                >
                  <div className="absolute inset-0 bg-neutral-100 w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

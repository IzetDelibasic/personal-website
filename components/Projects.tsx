import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="">
      <div id="myprojects" className="mt-20 lg:mt-56 space-y-8 lg:space-y-10 relative">
        <div className="text-3xl lg:text-5xl font-light flex gap-2 flex-wrap justify-center text-center items-center card border-gray-200 border-4 p-10 lg:w-[75%] xl:w-[25%] mx-auto">
          <span className="text-gray-500">Selected</span>
          <span className="font-medium">Works</span>
        </div>

        <div className="space-y-20 lg:space-y-32 w-5/6 mx-auto">
          {/* WORK 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5rem] w-full lg:w-5/6 border-gray-500 border-b lg:border-b-0 pb-12 lg:pb-0">
            <div className="col-span-1 w-full">
              <Image
                src="/images/tasty-treasure.png"
                className="rounded-3xl shadow-lg cursor-pointer"
                alt="work"
                width={600}
                height={600}
              />
            </div>
            <div className="col-span-1 w-full h-full flex flex-col justify-center items-center space-y-8">
              <h1 className="uppercase font-medium">TASTY TREASURES</h1>
              <p className="text-3xl font-light leading-relaxed">
                <span className="text-gray-500">This is my first solo project in </span>
                <span className="font-semibold">ReactJS</span>
                <span className="text-gray-500">, where I applied the knowledge I&apos;ve learned and built </span>
                <span className="font-semibold">a frontend application for recipe ideas.</span>
                <span className="text-gray-500"> I used Firebase as the database to allow users to save their profiles.</span>
              </p>
              <h6 className="font-light text-gray-400">Web Application Design</h6>
              <button className="justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black">
                <a href="https://github.com/IzetDelibasic/tasty-treasures" target="_blank" rel="noopener noreferrer">
                  View on Github
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* WORK 2 */}
      <div className="flex w-full justify-end mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5rem] w-full lg:w-5/6  border-gray-500 border-b lg:border-b-0 pb-12 lg:pb-0">
          <div className="col-span-1 w-full h-full flex flex-col justify-center items-center space-y-8">
            <h1 className="uppercase font-medium">Survival Quest</h1>
            <p className="text-3xl font-light leading-relaxed">
              <span className="text-gray-500">A survival game being developed using </span>
              <span className="font-semibold">Unity and C# scripts</span>
              <span className="text-gray-500">, offering a high level of immersion and a wide range of features. The game is currently in the development phase, with much more to come soon.</span>
            </p>
            <h6 className="font-light text-gray-400">Game Folder</h6>
            <button className="justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black">
              <a href="https://github.com/IzetDelibasic/survival-quest" target="_blank" rel="noopener noreferrer">
                View on Github
              </a>
            </button>
          </div>
          <div className="col-span-1 w-full">
            <Image
              src="/images/survival-quest.png"
              className="rounded-3xl shadow-lg cursor-pointer"
              alt="work"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

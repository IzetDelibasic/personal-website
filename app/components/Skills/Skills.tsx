// -React-
import React from 'react';
// -Next-
import Image from "next/image";
// -Constants-
import { javascriptImage, typescriptImage, reactImage, nextImage, gitImage, githubDesktopImage, firebaseImage, tailwindImage } from '@/utils/constants/imageConstants';

const Skills = () => {
  return (
    <div className="">
      <div id="myskills" className="space-y-2 lg:space-y-2 relative">
        <div className="text-3xl lg:text-5xl font-light flex gap-2 flex-wrap justify-center items-center card border-gray-200 border-4 p-10 lg:w-3/4 xl:w-2/4 mx-auto font-subtitle">
          <span className="text-gray-500">Some of the</span>
          <span className="font-medium"> technologies I have used: </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 w-full pt-10">
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="JavaScript" src={javascriptImage} className="cursor-pointer hover:scale-105 transition-all rounded-[1rem]" width={150} height={150} />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="TypeScript" src={typescriptImage} className="cursor-pointer hover:scale-105 transition-all" width={150} height={150} />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="ReactJS" src={reactImage} className="cursor-pointer hover:scale-105 transition-all" width={150} height={150} />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="NextJS" src={nextImage} className="cursor-pointer hover:scale-105 transition-all" width={150} height={150} />
          </div>
        </div>
      </div>

      <div className="space-y-2 lg:space-y-2 relative pt-40">
        <div className="text-3xl lg:text-5xl font-light flex gap-2 flex-wrap justify-center items-center card border-gray-200 border-4 p-10 lg:w-3/4 xl:w-2/4 mx-auto font-subtitle">
          <span className="text-gray-500">Some of the</span>
          <span className="font-medium"> tools I have used: </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 w-full pt-10">
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="Git" src={gitImage} className="cursor-pointer hover:scale-105 transition-all" width={160} height={160} />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="GithubDesktop" src={githubDesktopImage} className="cursor-pointer hover:scale-105 transition-all" width={170} height={170} />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="Firebase" src={firebaseImage} className="cursor-pointer hover:scale-105 transition-all" width={150} height={150} />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="TailwindCSS" src={tailwindImage} className="cursor-pointer hover:scale-105 transition-all" width={180} height={180} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;

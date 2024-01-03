'use client'

// -Lottie-
import Lottie from 'lottie-react';
// -Animations-
import personAnimation from '@/animations/person.json';
import handAnimation from '@/animations/hand.json';
import computerAnimation from '@/animations/computer.json';
import brainAnimation from '@/animations/brain.json';
// -Icons-
import { FaLinkedin, FaGithub } from "react-icons/fa";



export const PortfolioCard = () => {

    return (
      <div id="home">
        <div className="w-fit card mx-auto py-4 lg:py-6 block lg:flex gap-0 z-50 relative bg-gray-700 border-gray-200 border-4 hover:rounded-[2rem] hover:rounded-br-none">
          <Lottie
            loop={true}
            animationData={personAnimation}
            className="w-44 mx-auto xl:w-56 2xl:w-64"
          />
          <div className="px-8 lg:px-10 min-h-fit mx-auto text-center items-center justify-center flex font-subtitle">
            <div className="w-full h-fit space-y-3">
              <h2 className="font-semibold w-full text-2xl justify-center lg:justify-start mx-auto lg:mx-0 flex gap-2 flex-wrap">
                <span>Welcome to </span>
                <span className="text-blue-400">
                    the Digital Universe!       
                </span>
                <Lottie animationData={handAnimation} loop={true} className="w-8" />
              </h2>

              <div className="space-y-2 w-full">
                <h2 className="font-extralight text-lg flex gap-2 items-center w-full mx-auto justify-center lg:justify-start lg:mx-0">
                  <Lottie
                    animationData={computerAnimation}
                    loop={true}
                    className="w-10"
                  />
                  <span>A passionate information</span>
                  <span> technology student</span>
                </h2>
                <h2 className="font-semibold text-2xl lg:text-3xl flex flex-wrap gap-2 mx-auto justify-center lg:justify-start lg:mx-0">
                  <Lottie
                    animationData={brainAnimation}
                    loop={true}
                    className="w-8"
                  />
                  <span>I just love coding and</span>
                </h2>
                <h2 className="font-semibold text-2xl lg:text-3xl flex flex-wrap gap-2 mx-auto justify-center lg:justify-start lg:mx-0">
                  <span>bringing ideas</span>
                  <span>to reality!</span>
                </h2>
                <div className='flex justify-between w-[20%]'>
                  <a href="https://github.com/IzetDelibasic" className='mr-[1rem] cursor-pointer'>
                    <FaGithub size={30}/>
                  </a>
                  <a href="https://www.linkedin.com/in/izet-delibasic/" className='cursor-pointer'>
                    <FaLinkedin size={30}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default PortfolioCard;
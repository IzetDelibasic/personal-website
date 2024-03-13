"use client";

// -Lottie-
import Lottie from "lottie-react";
// -Animations-
import personAnimation from "@/animations/person.json";
import handAnimation from "@/animations/hand.json";
import computerAnimation from "@/animations/computer.json";
import brainAnimation from "@/animations/brain.json";
// - Constant -
import { contactConstant } from "@/utils/constants/contactConstant";

export const PortfolioCard = () => {
  return (
    <div
      id="home"
      className="w-[90%] sm:w-fit card mx-auto py-[1rem] lg:py-[1.5rem] block lg:flex gap-0 z-50 relative bg-gray-700 border-gray-200 border-4 hover:rounded-none md:hover:rounded-[1.5rem] md:hover:rounded-br-none ease-in-out duration-300"
    >
      <Lottie
        loop={true}
        animationData={personAnimation}
        className="w-44 mx-auto xl:w-56 2xl:w-64"
      />
      <div className="px-8 lg:px-10 min-h-fit mx-auto text-center items-center justify-center flex font-subtitle">
        <div className="w-full h-fit space-y-3">
          <h2 className="font-semibold w-full text-[1.2rem] md:text-[1.5rem] justify-center mx-auto lg:mx-0 flex gap-2 flex-wrap">
            Welcome to{" "}
            <span className="text-blue-400">the Digital Universe!</span>{" "}
            <Lottie animationData={handAnimation} loop={true} className="w-8" />
          </h2>

          <div className="space-y-2 w-full">
            <div className="font-extralight text-xl lg:text-2xl flex flex-wrap gap-2 items-center w-full mx-auto justify-center lg:mx-0">
              <Lottie
                animationData={computerAnimation}
                loop={true}
                className="w-10"
              />
              <span>A passionate information technology student</span>
            </div>
            <div className="font-semibold text-2xl lg:text-3xl flex flex-wrap gap-2 mx-auto justify-center lg:mx-0">
              <Lottie
                animationData={brainAnimation}
                loop={true}
                className="w-8"
              />
              <span>I just love coding and bringing ideas to reality!</span>
            </div>
            <div className="flex items-center justify-center w-[70%] mx-auto">
              <div className="mr-[1rem]">Reach me anytime:</div>
              {contactConstant.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className={
                    index !== 0 ? "ml-[1rem] cursor-pointer" : "cursor-pointer"
                  }
                >
                  <contact.icon size={30} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

"use client";

import Lottie from "lottie-react";
import booksAnimation from "@/animations/book.json";

export default function Info() {
  return (
    <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.7rem] font-light lg:w-[60%] w-[80%] mx-auto text-center flex flex-wrap relative z-50 gap-[1rem] items-center justify-center font-montserrat">
      <span className="text-gray-500"></span>
      <span className="font-semibold">
        <span className="text-blue-400">Frontend</span> Developer
      </span>
      <span className="text-gray-500">in the learning process</span>
      <span className="text-gray-500">and a</span>
      <span className="font-semibold">Software Engineering</span>
      <span className="text-gray-500">Student</span>
      <Lottie
        className="w-[2.5rem] md:w-[3rem] lg:w-[6rem]"
        animationData={booksAnimation}
        loop={true}
      />
    </div>
  );
}

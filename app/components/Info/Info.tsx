'use client';

import Lottie from 'lottie-react';
import booksAnimation from '@/animations/book.json';

export default function Info() {
  return (
    <div className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-light w-4/6 mx-auto text-center leading-5 lg:leading-relaxed flex flex-wrap relative z-50 gap-4 items-center justify-center font-about">
      <span className="text-gray-500"></span>
      <span className="font-bold"><span className='text-blue-400'>Frontend</span> Developer</span>
      <span className="text-gray-500">in the learning process</span>
      <span className="text-gray-500">and a</span>
      <span className="font-bold">Software Engineering</span>
      <span className="text-gray-500">Student</span>
      <Lottie className="w-10 md:w-12 lg:w-24" animationData={booksAnimation} loop={true} />
    </div>
  );
}
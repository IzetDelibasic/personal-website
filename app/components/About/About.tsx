import React from 'react';
import { aboutMeContent } from '@/utils/constants/aboutConstant';

const About = () => {
    return (
        <div id="aboutme" className="py-20">
            <div className="text-[1.75rem] lg:text-[3rem] font-light flex gap-2 flex-wrap justify-center text-center items-center card border-gray-200 border-4 p-[2rem] lg:w-[75%] xl:w-[25%] mx-auto font-subtitle">
                <span className="font-medium">About</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1rem] lg:gap-[2rem] mt-[3rem] lg:mt-[6rem]">
                <div className="flex flex-col col-span-1 md:text-[1.5rem] lg:mt-[5rem] font-light items-center font-montserrat text-center">
                    <span className="text-gray-400">{aboutMeContent.introduction}</span>
                    <span className="font-bold">{aboutMeContent.emphasis}</span>
                    <span className="text-gray-400">{aboutMeContent.closing}</span>
                </div>

                <div className="col-span-1 relative h-56 mt-10 lg:h-96 lg:ml-20 lg:mt-14">
                    <div className="absolute rounded-[2rem] shadow-xl bg-[url(/images/pic1.jpg)] lg:animate-card bg-cover h-full w-44 lg:w-72 lg:-top-10 lg:-left-10 -rotate-3"></div>
                    <div className="absolute rounded-[2rem] shadow-xl bg-[url(/images/pic3.gif)] lg:animate-card2 bg-cover h-full w-44 lg:w-72 left-24 -top-5 lg:-top-32 lg:left-48"></div>
                    <div className="absolute rounded-[2rem] shadow-xl bg-[url(/images/pic2.jpg)] lg:animate-card3 bg-cover h-full w-44 lg:w-72 left-44 top-6 lg:top-10 lg:left-72 rotate-6"></div>
                </div>
            </div>
        </div>
    );
}

export default About;

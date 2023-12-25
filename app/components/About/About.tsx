import React from 'react'

const About = () => {
    return (
        <div className="" id="aboutme">
          <div className="space-y-12 mt-20 lg:mt-56">
            <div className="text-3xl lg:text-5xl font-light flex gap-2 flex-wrap justify-center text-center items-center card border-gray-200 border-4 p-10 lg:w-[75%] xl:w-[25%] mx-auto">
              <span className="font-medium">ABOUT ME</span>
            </div>
    
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 py-20">
              <div className="flex flex-col col-span-1 text-3xl font-light leading-relaxed h-full items-center xl:mt-[50px]">
                <span className="text-gray-500">I am a passionate information technology student from Bosnia and Herzegovina who is trying to learn a lot about </span>
                <span className="font-bold">Frontend development, coding and finding solutions for daily problems in real life using code. </span>
                <span className="text-gray-500">Every criticism, correction of my mistakes, or suggestion is welcome. I am also an active handball player and sports fan.</span>
              </div>
    
              <div className="col-span-1 relative h-56 mt-10 lg:h-96 lg:ml-20 lg:mt-14">
                <div className="absolute rounded-3xl shadow-xl bg-[url(/images/pic1.jpg)] lg:animate-card bg-cover h-full w-44 lg:w-72 lg:-top-10 lg:-left-10 -rotate-3"></div>
                <div className="absolute rounded-3xl shadow-xl bg-[url(/images/pic3.gif)] lg:animate-card2 bg-cover h-full w-44 lg:w-72 left-24 -top-5 lg:-top-32 lg:left-48"></div>
                <div className="absolute rounded-3xl shadow-xl bg-[url(/images/pic2.jpg)] lg:animate-card3 bg-cover h-full w-44 lg:w-72 left-44 top-6 lg:top-10 lg:left-72 rotate-6"></div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default About
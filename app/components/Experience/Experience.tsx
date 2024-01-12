import React from 'react'

const Experience = () => {
  return (
    <div id="myprojects" className="my-[5rem] lg:mt-[10rem] space-y-8 lg:space-y-10 relative">
        <div className="text-3xl lg:text-5xl font-light flex gap-2 flex-wrap justify-center text-center items-center card border-gray-200 border-4 p-10 lg:w-[75%] xl:w-[25%] mx-auto font-subtitle">
          <span className="font-medium">Experience</span>
        </div>

        <div className='w-[95%] mx-auto text-center font-subtitle flex lg:flex-row flex-col lg:justify-between justify-center items-center'>
          <div className='my-[1rem] lg:w-[60%] w-[90%] mx-auto lg:border-r-2 border-b-2 lg:border-b-0 border-gray-400 lg:px-[1rem] py-[1rem]'>
            <div className='text-[2.5rem]'>BEST HACKATHON 2023 - MOSTAR</div>
            <div className='text-[1.2rem]'>
              Participant in the programming competition 'Hackathon' in Mostar. Has gained a lot of experience from the 36-hour competition at the Intera building in Mostar during the 'Hackathon' competition            </div>
            </div>
          <div className='my-[1rem] lg:w-[60%] w-[90%] mx-auto lg:border-r-2 border-b-2 lg:border-b-0 border-gray-400 lg:px-[1rem] py-[1rem]'>
            <div className='text-[2.5rem]'>FIT MOSTAR CODING CHALLENGE - FIT CC v.15</div>
            <div className='text-[1.2rem]'>
              Participant in the programming competition 'FIT CC.' During this competition, we competed in C++ exams.            
            </div>
          </div>
          <div className='my-[1rem] lg:w-[60%] w-[90%] mx-auto px-[1rem]'>
            <div className='text-[2.5rem]'>EVONA INNOVATION HACK 2023</div>
            <div className='text-[1.2rem]'>
              Participant in the programming competition 'Evona Innovation Hack' in Mostar. Gained a lot of experience from the 48-hour competition at Evona company, where we had to build a full-stack web application. You can find the frontend part on my GitHub profile.
            </div>
          </div>
        </div>
    </div>
  )
}

export default Experience
import React from 'react'
import Image from "next/image";

const Skills = () => {
  return (
    <div className="">
    <div id="section2" className="space-y-2 lg:space-y-2 relative">
        <div className='text-3xl lg:text-5xl font-light flex gap-2 flex-wrap justify-center'>
          <span className='text-gray-500'>Some of the</span> 
          <span className='font-medium'> technologies I have used: </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 w-full pt-10">
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="htmlcssjs" src="/images/htmlcssjs.png" className='cursor-pointer hover:scale-105 transition-all' width={250} height={250} />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="react" src="/images/reactjs.png" className='cursor-pointer hover:scale-105 transition-all' width={170} height={170} />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="clang" src="/images/clang.png" className='cursor-pointer hover:scale-105 transition-all' width={200} height={200} />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="csharplang" src="/images/csharplang.png" className='cursor-pointer hover:scale-105 transition-all' width={160} height={160} />
          </div>
        </div>
      </div>
      <div className="space-y-2 lg:space-y-2 relative pt-40">
        <div className='text-3xl lg:text-5xl font-light flex gap-2 flex-wrap justify-center'>
          <span className='text-gray-500'>Some of the</span> 
          <span className='font-medium'> tools I have used: </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 w-full pt-10">
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="git" src="/images/git.png" className='cursor-pointer hover:scale-105 transition-all' width={160} height={160} />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="githubdesktop" src="/images/github-desktop.png" className='cursor-pointer hover:scale-105 transition-all' width={170} height={170} />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="firebase" src="/images/firebase.png" className='cursor-pointer hover:scale-105 transition-all' width={150} height={150} />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image alt="adobephotoshop" src="/images/photoshop.png" className='cursor-pointer hover:scale-105 transition-all' width={180} height={180} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
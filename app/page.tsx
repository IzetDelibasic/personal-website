import { Navbar } from "@/components/Navbar";
import { PortfolioCard } from "@/components/PortfolioCard";
import Info from "@/components/Info";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* SECTION 1 - NAVBAR + HEADER + HERO*/}
      <div id="section1" className="min-h-screen space-y-8 lg:space-y-16 relative">
        <Navbar />
        <PortfolioCard />
        <Info />
        <FiChevronDown className="mx-auto font-black text-6xl animate-bounce cursor-pointer mt-4" />
      </div>

      {/* SECTION 2  - SKILLS */}
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

    {/* SECTION 3  - PROJECTS */}
    <div id="section3" className="mt-20 lg:mt-56 space-y-8 lg:space-y-10 relative">
    <div className='text-3xl lg:text-5xl font-light flex gap-2 flex-wrap justify-center pb-5'>
      <span className='text-gray-500'>Selected</span> 
      <span className='font-medium'>Works</span>
    </div>

      <div className='space-y-20 lg:space-y-32 w-5/6 mx-auto'>
        {/* WORK 1 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full lg:w-5/6 border-gray-500 border-b lg:border-b-0 pb-12 lg:pb-0'>
          <div className='col-span-1 w-full'>
            <Image 
              src="/images/tasty-treasure.png" 
              className='rounded-3xl shadow-lg cursor-pointer' 
              alt="work" 
              width={600} 
              height={600} 
            />
          </div>
          <div className='col-span-1 w-full h-full flex flex-col justify-center items-center space-y-8'>
            <h1 className='uppercase font-medium'>TASTY TREASURES</h1>
            <p className='text-3xl font-light leading-relaxed'>
              <span className='text-gray-500'>This is my first solo project in </span>
              <span className='font-semibold'>ReactJS</span>
              <span className='text-gray-500'>, where I applied the knowledge I've learned and built </span>
              <span className='font-semibold'>a frontend application for recipe ideas.</span>
              <span className='text-gray-500'> I used Firebase as the database to allow users to save their profiles.</span>
            </p>
            <h6 className='font-light text-gray-400'>Web Application Design</h6>
            <button className='justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black'>
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
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full lg:w-5/6  border-gray-500 border-b lg:border-b-0 pb-12 lg:pb-0'>
          <div className='col-span-1 w-full h-full flex flex-col justify-center items-center space-y-8'>
            <h1 className='uppercase font-medium'>Survival Quest</h1>
            <p className='text-3xl font-light leading-relaxed'>
              <span className='text-gray-500'>A survival game being developed using </span>
              <span className='font-semibold'>Unity and C# scripts</span>
              <span className='text-gray-500'>, offering a high level of immersion and a wide range of features. The game is currently in the development phase, with much more to come soon.</span>
            </p>
            <h6 className='font-light text-gray-400'>Game Folder</h6>
            <button className='justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black'>
              <a href="https://github.com/IzetDelibasic/survival-quest" target="_blank" rel="noopener noreferrer">
                View on Github
              </a>
            </button>   
          </div>
          <div className='col-span-1 w-full'>
            <Image 
              src="/images/survival-quest.png" 
              className='rounded-3xl shadow-lg cursor-pointer' 
              alt="work" 
              width={600} 
              height={600} 
            />
          </div>
        </div>
      </div>
  </div>
  );
}
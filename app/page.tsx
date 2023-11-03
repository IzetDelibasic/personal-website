import { Navbar } from "@/components/Navbar";
import { PortfolioCard } from "@/components/PortfolioCard";
import Info from "@/components/Info";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* SECTION 1 - NAVBAR + HEADER + HERO*/}
      <div className="min-h-screen space-y-8 lg:space-y-16 relative">
        <Navbar />
        <PortfolioCard />
        <Info />
        <FiChevronDown className="mx-auto font-black text-6xl animate-bounce cursor-pointer mt-4" />
      </div>

      {/* SECTION 2  - SKILLS */}
      <div className="space-y-2 lg:space-y-2 relative">
        <div className='text-3xl lg:text-5xl font-light flex gap-2 flex-wrap justify-center'>
          <span className='text-gray-500'>Some of the</span> 
          <span className='font-medium'> technologies I have used: </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 w-full pt-10">
          <div className="col-span-1 w-full h-fit my-auto">
            <Image alt="nextjs-13" src="/images/htmlcssjs.png" className='cursor-pointer hover:scale-105 transition-all' width={250} height={250} />
          </div>
          <div className="col-span-1 w-full h-fit my-auto">
            <Image alt="react" src="/images/reactjs.png" className='cursor-pointer hover:scale-105 transition-all' width={170} height={170} />
          </div>
          <div className="col-span-1 w-full h-fit my-auto">
            <Image alt="clang" src="/images/clang.png" className='cursor-pointer hover:scale-105 transition-all' width={200} height={200} />
          </div>
          <div className="col-span-1 w-full h-fit my-auto">
            <Image alt="csharplang" src="/images/csharplang.png" className='cursor-pointer hover:scale-105 transition-all' width={160} height={160} />
          </div>
        </div>
      </div>
    </div>
  );
}

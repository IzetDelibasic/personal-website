import { Navbar } from "@/components/Navbar"
import { PortfolioCard } from "@/components/PortfolioCard"
import Info from "@/components/Info"

export default function Home(){
  return(
    <div className="">
      {/* SECTION 1 - NAVBAR + HEADER + HERO*/}
      <div className="min-h-screen space-y-8 lg:space-y-16 relative">
        <Navbar />
        <PortfolioCard />
        <Info />
      </div>
    </div>
  )
}
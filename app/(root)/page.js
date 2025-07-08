import About from "@/components/about";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="h-full flex flex-col ">
      <Navbar />

      <div className="flex flex-col gap-[8rem]">
        <HeroSection />
        <About />
      </div>
    </div>
  );
}

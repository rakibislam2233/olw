import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
// Using require for images as they are guaranteed to be there but Next.js static imports need to match path
import brand1 from "@/assets/home/hero-section/brand-1.png";
import brand2 from "@/assets/home/hero-section/brand-2.png";
import brand3 from "@/assets/home/hero-section/brand-3.png";
import brand4 from "@/assets/home/hero-section/brand-4.png";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[calc(100vh-89px)] py-20 lg:py-32 flex items-center justify-center border-b border-black/8">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          backgroundPosition: "center top",
          maskImage: "radial-gradient(circle, rgba(0,0,0,0.2), black 80%)",
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0,0,0,0.2), black 80%)",
        }}
      ></div>

      {/* Top Gradient Glow (subtle red/pink to transparent) */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-linear-to-b from-[#ED3C6A20] to-transparent pointer-events-none z-0" />

      {/* Floating Elements Container - Now shown on all devices with responsive scaling */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-full max-w-[1200px] -translate-x-1/2 -translate-y-1/2 h-full">
          <div className="absolute top-[2%] lg:top-[15%] left-[5%] lg:left-[15%] animate-float scale-75 lg:scale-100">
            <Image
              src={brand1}
              alt="Brand 1"
              width={95}
              height={95}
              className="drop-shadow-xl"
            />
          </div>

          <div className="absolute top-[3%] lg:top-[18%] right-[5%] lg:right-[17%] animate-float-delayed scale-75 lg:scale-100">
            <Image
              src={brand2}
              alt="Brand 2"
              width={70}
              height={70}
              className="drop-shadow-xl"
            />
          </div>

          <div className="absolute bottom-[5%] lg:bottom-[20%] left-[8%] lg:left-[20%] animate-float scale-75 lg:scale-100">
            <Image
              src={brand3}
              alt="Brand 3"
              width={75.89}
              height={75.89}
              className="drop-shadow-xl"
            />
          </div>

          <div className="absolute bottom-[2%] lg:bottom-[15%] right-[10%] lg:right-[22%] animate-float-delayed scale-75 lg:scale-100">
            <Image
              src={brand4}
              alt="Brand 4"
              width={90}
              height={90}
              className="drop-shadow-xl"
            />
          </div>
          {/* Colorful Dots */}
          <div className="absolute top-[25%] left-[5%] w-3 h-3 rounded-full bg-[#635BFF]" />
          <div className="absolute top-[10%] left-[55%] w-3 h-3 rounded-full bg-[#00E59B]" />
          <div className="absolute top-[35%] right-[5%] w-2 h-2 rounded-full bg-[#F4C430]" />
          <div className="absolute bottom-[40%] left-[12%] w-4 h-4 rounded-full bg-[#FF4F5A]" />
          <div className="absolute bottom-[5%] left-[8%] w-2 h-2 rounded-full bg-[#D4AF37]" />
          <div className="absolute bottom-[10%] left-[53%] w-3 h-3 rounded-full bg-[#00D1FF]" />
          <div className="absolute bottom-[15%] right-[10%] w-2 h-2 rounded-full bg-[#1B274C]" />
        </div>
      </div>
      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 text-center max-w-[800px] flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#000000] leading-[1.1] mb-6 md:mb-8 tracking-tight">
          Airbnb Assistants For <br className="hidden md:block" />{" "}
          <span className="text-[28px] md:text-[38.13px] font-medium text-[#000000]">
            Property Management
          </span>
        </h1>
        <p className="text-[#000000] font-medium text-sm md:text-base leading-relaxed max-w-[620px] mb-8 md:mb-10 opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <Button className="w-full max-w-[240px] h-[50px] px-6 py-[18px] mb-[27px] rounded-[5px] bg-primary hover:bg-primary/90 text-white text-base font-bold flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-lg">
          Schedule A Meeting <ArrowRight className="w-5 h-5 ml-1" />
        </Button>

        <Link
          href="#"
          className="text-[14px] font-semibold text-[#1E1E1E] underline decoration-1 underline-offset-4 hover:text-primary transition-colors"
        >
          See Pricing
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

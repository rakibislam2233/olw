import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
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
          WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,0.2), black 80%)",
        }}
      ></div>

      {/* Top Gradient Glow (subtle red/pink to transparent) */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-linear-to-b from-[#ED3C6A20] to-transparent pointer-events-none z-0" />

      {/* Floating Elements Container */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-full max-w-[1200px] -translate-x-1/2 -translate-y-1/2 h-full">
          {/* Floating Brands */}
          {/* Brand 1 (Top Left) */}
          <div className="absolute top-[10%] left-[15%] -rotate-15">
            <Image
              src={brand1}
              alt="Brand 1"
              width={100}
              height={100}
              className="drop-shadow-xl"
            />
          </div>

          {/* Brand 2 (Top Right) */}
          <div className="absolute top-[18%] right-[15%] rotate-18">
            <Image
              src={brand2}
              alt="Brand 2"
              width={90}
              height={90}
              className="drop-shadow-xl"
            />
          </div>

          {/* Brand 3 (Bottom Left) */}
          <div className="absolute bottom-[20%] left-[20%] rotate-12">
            <Image
              src={brand3}
              alt="Brand 3"
              width={85}
              height={85}
              className="drop-shadow-xl"
            />
          </div>

          {/* Brand 4 (Bottom Right) */}
          <div className="absolute bottom-[10%] right-[22%] -rotate-20">
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
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-black leading-[1.1] mb-6 tracking-tight">
          Airbnb Assistants For <br /> Property Management
        </h1>
        <p className="text-[#4E4E4E] text-sm md:text-base leading-relaxed max-w-[620px] mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <Button className="w-full sm:w-[220px] h-[50px] px-6 py-[18px] mb-6 rounded-[5px] bg-primary hover:bg-primary/90 text-white text-base font-medium shadow-[0px_4px_12px_rgba(237,60,106,0.3)] flex items-center justify-center gap-2 cursor-pointer transition-all hover:-translate-y-1">
          Schedule A Meeting <ArrowRight className="w-5 h-5 ml-1" />
        </Button>

        <Link
          href="#"
          className="text-[15px] font-semibold text-[#1E1E1E] underline decoration-1 underline-offset-4 hover:text-primary transition-colors"
        >
          See Pricing
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

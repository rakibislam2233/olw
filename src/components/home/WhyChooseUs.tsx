import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, Check } from "lucide-react";

// Import images from assets
import malePerson from "@/assets/home/metting/male-person.png";
import brandGroup from "@/assets/home/metting/brand-group.png";
import calendar from "@/assets/home/metting/clander.png";
import decorator from "@/assets/home/metting/decoretor.png";
import projectCard from "@/assets/home/metting/project.png";

const WhyChooseUs = () => {
  const reasons = [
    "Brilliant Client Service",
    "Flexibility & Adaptability",
    "We make it Personal",
    "We have experts in our team",
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-5">
        <div className="relative mx-auto flex w-full max-w-[1240px] flex-col overflow-hidden rounded-[30px] border border-[#F8BECD] bg-[#FFF0F4] p-8 md:p-12 lg:min-h-[627px] lg:flex-row lg:items-center lg:gap-24 lg:p-16">
          {/* Left Content */}
          <div className="lg:w-1/2 z-10">
            <h2 className="text-3xl md:text-[38.13px] font-bold text-black mb-6 leading-tight">
              Few Reasons Why you <br /> Choose us?
            </h2>
            <p className="text-[#000000] text-sm md:text-base leading-relaxed mb-8 opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>

            <ul className="space-y-4 mb-10">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#ED3C6A24] flex items-center justify-center text-primary">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                  <span className="text-sm md:text-base font-bold text-[#1E1E1E]">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>

            <Button className="h-[50px] px-8 rounded-[5px] bg-primary hover:bg-primary/90 text-white font-bold flex items-center gap-2 transition-all">
              Schedule A Meeting <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right Visuals */}
          <div className="lg:w-1/2 relative h-[450px] md:h-[600px] w-full flex items-center justify-center">
            {/* Wrapper for the person inside the decorator */}
            <div className="relative w-[350px] md:w-[520px] flex items-center justify-center">
              {/* Pink Decorator Bubble - Background */}
              <div className="w-full h-auto z-0">
                <Image
                  src={decorator}
                  alt="decorator"
                  className="w-full h-auto"
                />
              </div>

              {/* Man Image - Centered on top of decorator */}
              <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] md:w-[75%] z-10">
                <Image
                  src={malePerson}
                  alt="Professional expert"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Floating: Project Card (Left side) */}
            <div className="absolute -top-5 left-[5%] md:left-[-5%] z-20 w-[180px] md:w-[260px] animate-bounce-slow">
              <Image src={projectCard} alt="Project listing" className="w-full h-auto drop-shadow-lg" />
            </div>

            {/* Floating: Brand Group (Top Right) */}
            <div className="absolute top-[20%] right-0 md:right-[-10%] z-20 w-[120px] md:w-[180px] animate-float">
              <Image src={brandGroup} alt="Trusted Brands" className="w-full h-auto drop-shadow-lg" />
            </div>

            {/* Floating: Calendar (Bottom Center-Left) */}
            <div className="absolute bottom-[10%] left-[-5%] md:left-[-15%] z-20 w-[160px] md:w-[240px] animate-pulse-slow">
              <Image src={calendar} alt="Booking calendar" className="w-full h-auto drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

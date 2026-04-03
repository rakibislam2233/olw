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
    <section className="w-full bg-white py-12 lg:py-24">
      <div className="container mx-auto px-4 md:px-5">
        <div className="relative mx-auto flex w-full max-w-[1240px] flex-col overflow-hidden rounded-[30px] border border-[#F8BECD] bg-[#FFF0F4] p-8 md:p-12 lg:min-h-[627px] lg:flex-row lg:items-center lg:gap-24 lg:p-16">
          {/* Left Content */}
          <div className="lg:w-1/2 z-10 text-left">
            <h2 className="text-3xl lg:text-[38.13px] font-bold text-black mb-6 leading-tight">
              Few Reasons Why you <br className="hidden md:block" /> Choose us?
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

          {/* Right Visuals - Responsive container height and scaling */}
          <div className="lg:w-1/2 relative min-h-[350px] md:min-h-[500px] lg:h-[600px] w-full flex items-center justify-center mt-12 lg:mt-0 px-4">
            {/* Wrapper for the person inside the decorator */}
            <div className="relative w-full max-w-[350px] md:max-w-[520px] flex items-center justify-center">
              {/* Pink Decorator Bubble - Background */}
              <div className="w-full h-auto z-0 scale-90 md:scale-100">
                <Image
                  src={decorator}
                  alt="decorator"
                  className="w-full h-auto"
                />
              </div>

              {/* Man Image - Centered on top of decorator */}
              <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] md:w-[75%] z-10">
                <Image
                  src={malePerson}
                  alt="Professional expert"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Floating: Project Card (Left side) - Hidden on smallest mobile */}
            <div className="absolute -top-5 left-0 lg:-left-[5%] z-20 w-[140px] md:w-[220px] lg:w-[260px] animate-bounce-slow hidden sm:block">
              <Image src={projectCard} alt="Project listing" className="w-full h-auto drop-shadow-lg" />
            </div>

            {/* Floating: Brand Group (Top Right) */}
            <div className="absolute top-[10%] -right-2 lg:right-[-10%] z-20 w-[100px] md:w-[150px] lg:w-[180px] animate-float">
              <Image src={brandGroup} alt="Trusted Brands" className="w-full h-auto drop-shadow-lg" />
            </div>

            {/* Floating: Calendar (Bottom Left) */}
            <div className="absolute bottom-[5%] -left-4 lg:left-[-15%] z-20 w-[130px] md:w-[200px] lg:w-[240px] animate-pulse-slow hidden sm:block">
              <Image src={calendar} alt="Booking calendar" className="w-full h-auto drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

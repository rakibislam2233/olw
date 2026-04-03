import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, Check } from "lucide-react";

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
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col rounded-[30px] border border-[#F8BECD] bg-[#FFF0F4] p-8 md:p-12 lg:flex-row lg:items-center lg:p-14 lg:min-h-[580px]">
          {/* ───── Left Content ───── */}
          <div className="relative z-10 flex flex-col lg:w-[45%]">
            <h2 className="mb-5 text-3xl font-extrabold leading-tight text-[#1E1E1E] lg:text-[38px]">
              Few Reasons Why you <br /> Choose us?
            </h2>

            <p className="mb-8 max-w-[420px] text-sm leading-relaxed text-black/70 md:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>

            <ul className="mb-10 flex flex-col gap-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-[#ED3C6A1F] text-primary">
                    <Check className="h-[14px] w-[14px]" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-bold text-[#1E1E1E] md:text-[15px]">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>

            <Button className="h-[50px] w-fit rounded-[6px] bg-primary px-7 font-bold text-white hover:bg-primary/90 flex items-center gap-2">
              Schedule A Meeting <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* ───── Right Visuals ───── */}
          <div className="relative mt-16 w-full lg:mt-0 lg:w-[55%] lg:h-[520px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[46%] w-[300px] md:w-[360px] lg:w-[500px]">
              {/* Pink blob */}
              <Image src={decorator} alt="" />

              {/* Person — centered on blob, bottom-aligned */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[68%] z-10">
                <Image
                  src={malePerson}
                  alt="Professional expert"
                  width={300}
                  height={437}
                />
              </div>
            </div>

            {/* ── Floating: Project Card — top center-left ── */}
            <div className="absolute left-[0%] top-[20%] z-20 w-[155px] md:w-[190px] lg:w-[215px]">
              <Image
                src={projectCard}
                alt="Project listing"
                className="h-auto w-full drop-shadow-lg"
              />
            </div>

            {/* ── Floating: Brand Group — top right ── */}
            <div className="absolute right-[0%] top-[10%] z-20 w-[95px] md:w-[120px] lg:w-[140px]">
              <Image
                src={brandGroup}
                alt="Trusted brands"
                className="h-auto w-full drop-shadow-lg"
              />
            </div>

            {/* ── Floating: Calendar — bottom left ── */}
            <div className="absolute left-[0%] bottom-[2%] z-20 w-[145px] md:w-[180px] lg:w-[205px]">
              <Image
                src={calendar}
                alt="Booking calendar"
                className="h-auto w-full drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

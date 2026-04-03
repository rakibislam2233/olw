import React from "react";
import Image from "next/image";

// Import step icons
import person from "@/assets/home/how-it-work/person.png";
import groupUsers from "@/assets/home/how-it-work/group-users.png";
import headphone from "@/assets/home/how-it-work/headphone.png";

const GetStartedSection = () => {
  const steps = [
    {
      id: "01",
      icon: person,
      label: "Add requirements & sign up today",
    },
    {
      id: "02",
      icon: groupUsers,
      label: "Connect with your CSM & onboarding team",
    },
    {
      id: "03",
      icon: headphone,
      label: "Meet your STR Assistant next week",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[38.13px] font-bold text-black mb-6">
            Getting Started is <span className="text-primary">Easy</span>
          </h2>
          <p className="text-[#000000] text-sm md:text-base leading-relaxed max-w-[800px] mb-12 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full max-w-[325px] h-[195px] bg-white border border-[#FAC4D21F] rounded-[11.44px] flex items-center justify-center mb-8 shadow-[0px_4.58px_34.33px_rgba(250,196,210,0.12)]">
                {/* Step Number Bubble */}
                <div className="absolute -top-5 -left-5 w-[61px] h-[61px] rounded-full border-[2.29px] border-primary bg-white flex items-center justify-center text-[22.88px] font-bold text-[#1E1E1E] shadow-sm">
                  {step.id}
                </div>
                {/* Icon */}
                <div className="flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={step.icon}
                    alt={step.label}
                    width={80}
                    height={80}
                    className="w-auto h-auto max-h-[85px] object-contain"
                  />
                </div>
              </div>
              <p className="text-center text-[19px] lg:text-[20.98px] font-bold text-[#1E1E1E] px-4 max-w-[280px]">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;

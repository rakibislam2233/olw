import React from "react";
import Image from "next/image";

// Import tool icons
import tool1 from "@/assets/home/tool/tool1.png";
import tool2 from "@/assets/home/tool/tool2.png";
import tool3 from "@/assets/home/tool/tool3.png";
import tool4 from "@/assets/home/tool/tool4.png";
import tool5 from "@/assets/home/tool/tool5.png";
import { cn } from "@/lib/utils";

const ToolSection = () => {
  const tools = [
    { logo: tool1, name: "PriceLabs" },
    { logo: tool2, name: "Wheelhouse" },
    { logo: tool3, name: "Beyond Pricing" },
    { logo: tool4, name: "Hostfully" },
    { logo: tool5, name: "Guesty" },
    { logo: tool1, name: "LODGIFY" }, // using tool1 as fallback if only 5 provided
    { logo: tool4, name: "Hostfully" },
    { logo: tool5, name: "Guesty" },
    { logo: tool2, name: "LODGIFY" },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-[50px]">
      <div className="px-4 md:px-5 text-center mb-[136px]">
        <h2 className="text-3xl md:text-[32px] font-bold text-black mb-6">
          Our <span className="text-primary">Tools</span>
        </h2>
        <p className="text-[#000000] text-sm leading-relaxed max-w-[780px] font-semibold mb-12 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="bg-[#F6F6F6] pt-[40px] pb-[85px] px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools?.map((tool, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-[11px] p-6 flex items-center justify-center min-h-[140px] transition-all duration-300 transform hover:-translate-y-1",
                index === 0
                  ? "shadow-[0px_4px_30.3px_rgba(255,138,168,0.28)]"
                  : "hover:shadow-[0px_4px_30.3px_rgba(255,138,168,0.28)]",
              )}
            >
              <Image
                src={tool.logo}
                alt={tool.name}
                width={180}
                className="w-auto h-auto max-h-[50px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolSection;

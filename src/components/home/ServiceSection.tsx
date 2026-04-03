import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

// Import service icons
import icon1 from "@/assets/home/service/icon1.png";
import icon2 from "@/assets/home/service/icon2.png";
import icon3 from "@/assets/home/service/icon3.png";
import icon4 from "@/assets/home/service/icon4.png";
import icon5 from "@/assets/home/service/icon5.png";
import icon6 from "@/assets/home/service/icon6.png";

const ServiceSection = () => {
  const services = [
    {
      icon: icon1,
      title: "Manage Property Listings",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: icon2,
      title: "Manage Customer Bookings",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: icon3,
      title: "Schedule House Cleaning",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: icon4,
      title: "Monitor Guest Reviews",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: icon5,
      title: "Track & Report Expenses",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: icon6,
      title: "Guest Inquiry & Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-[50px]">
      <div className="container mx-auto px-4 md:px-5 text-center">
        <h2 className="text-3xl md:text-[38.13px] font-bold text-black mb-6">
          Our <span className="text-primary">Service</span>
        </h2>
        <p className="text-[#000000] text-sm md:text-base leading-relaxed max-w-[800px] mb-12 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((service, index) => (
            <div
              key={index}
              className={`w-full max-w-[400px] flex flex-col justify-between bg-white border ${
                index === 0
                  ? "shadow-[0px_4px_90.3px_rgba(215,205,207,0.47)] border-transparent"
                  : "border-primary"
              } rounded-[13px] p-8 text-left hover:shadow-[0px_10px_40px_rgba(250,196,210,0.4)] hover:-translate-y-2 transition-all duration-300 group`}
            >
              <div className="mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={65}
                  height={65}
                  className="mb-4"
                />
              </div>
              <h3 className="text-[22.88px] font-bold text-black mb-4">
                {service.title}
              </h3>
              <p className="text-[#000000] text-sm md:text-base leading-relaxed mb-6">
                {service.desc}
              </p>
              <Button
                variant="outline"
                className="w-fit border-primary rounded-full text-primary hover:bg-primary hover:text-white h-[35px] text-[15.25px] flex items-center justify-center px-6 transition-all group-hover:scale-105"
              >
                Read More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

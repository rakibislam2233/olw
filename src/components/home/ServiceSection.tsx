"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full bg-white pt-[55px]">
      <div className="container mx-auto px-4 md:px-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-[42px] font-bold text-black mb-4">
            Our <span className="text-primary">Service</span>
          </h2>
          <p className="text-[#000000] text-sm md:text-base leading-relaxed max-w-[800px] mx-auto opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0px 20px 40px rgba(237,60,106,0.15)",
              }}
              className={`w-full flex flex-col justify-between bg-white border ${
                index === 0
                  ? "shadow-[0px_10px_60px_rgba(0,0,0,0.05)] border-transparent"
                  : "border-[#F8BECD]"
              } rounded-[13px] p-9 text-left transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Subtle background glow on first item or hover */}
              {index === 0 && (
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ED3C6A08] rounded-full blur-3xl group-hover:bg-[#ED3C6A15] transition-colors" />
              )}

              <div className="mb-8">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={85}
                  height={85}
                  className="transition-all duration-300"
                />
              </div>

              <h3 className="text-[22px] font-bold text-black mb-4">
                {service.title}
              </h3>
              <p className="text-[#000000] text-sm md:text-[15px] leading-relaxed mb-8 opacity-70">
                {service.desc}
              </p>

              <Button
                variant="outline"
                className="w-fit cursor-pointer border-primary/40 rounded-full text-primary hover:bg-primary hover:text-white h-[40px] px-8 transition-all hover:border-primary"
              >
                Read More
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;

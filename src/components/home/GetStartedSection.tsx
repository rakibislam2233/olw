"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white pt-10 md:pt-12 lg:pt-[67px]">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-[63px]"
        >
          <h2 className="text-3xl md:text-[42px] font-bold text-black mb-6">
            Getting Started is <span className="text-primary">Easy</span>
          </h2>
          <p className="text-[#000000] text-sm md:text-base leading-relaxed max-w-[800px] mb-12 mx-auto font-medium opacity-70">
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
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {steps?.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center group"
            >
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: "0px 20px 40px rgba(237,60,106,0.15)",
                }}
                className="relative w-full max-w-[300px] h-[200px] bg-white border-2 border-[#ED3C6A15] rounded-[16px] flex items-center justify-center mb-10 transition-all duration-300"
              >
                {/* Step Number Bubble */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="absolute -top-6 -left-6 size-16 rounded-full border-[6px] border-primary bg-white flex items-center justify-center text-xl font-bold text-[#1E1E1E] shadow-lg z-10"
                >
                  {step.id}
                </motion.div>

                {/* Icon */}
                <div className="flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.label}
                    width={90}
                    height={90}
                    className="w-auto h-auto max-h-[90px] object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>

              <h4 className="text-center text-[18px] lg:text-[20px] font-bold text-[#1E1E1E] px-4 max-w-[280px] group-hover:text-primary transition-colors">
                {step.label}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;

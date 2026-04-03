"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="w-full bg-white pt-[84px]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto flex w-full max-w-[1240px] flex-col rounded-[33px] border border-[#F8BECD] bg-[#FFF0F4] p-8 md:p-14 lg:flex-row lg:items-center lg:p-16 lg:min-h-[620px] shadow-[0px_20px_60px_rgba(237,60,106,0.05)] overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ED3C6A05] rounded-full blur-[100px] pointer-events-none" />

          {/* ───── Left Content ───── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 flex flex-col lg:w-1/2"
          >
            <motion.h2 className="mb-[26px] text-3xl font-bold leading-tight text-[#1E1E1E] md:text-[36px]">
              Few Reasons Why you <br className="hidden md:block" /> Choose us?
            </motion.h2>

            <motion.p className="mb-[30px] text-sm font-semibold text-black max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </motion.p>

            <motion.ul
              variants={staggerContainer}
              className="mb-[45px] flex flex-col gap-5"
            >
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2 group"
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/25 text-primary"
                  >
                    <Check className="h-4 w-4" />
                  </motion.span>
                  <span className="text-base font-bold text-[#1E1E1E]">
                    {reason}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div>
              <Button className="h-[50px] w-fit rounded-[5px] bg-primary px-6 font-bold text-sm text-white hover:bg-primary/90 flex items-center gap-3 transition-all cursor-pointer">
                Schedule A Meeting <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* ───── Right Visuals ───── */}
          <div className="relative mt-20 w-full lg:mt-0 lg:w-1/2 flex items-center justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-[320px] md:w-[420px] lg:w-[800px]"
            >
              {/* Pink blob */}
              <Image src={decorator} alt="image" className="w-full h-auto" />

              {/* Person — centered on blob, bottom-aligned */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] z-10"
              >
                <Image
                  src={malePerson}
                  alt="Professional expert"
                  width={340}
                  className="drop-shadow-2xl"
                />
              </motion.div>

              {/* ── Floating: Project Card ── */}
              <motion.div className="absolute -left-5 -top-[15%] z-20 w-[160px] md:w-[250px]">
                <Image
                  src={projectCard}
                  alt="Project listing"
                  className="drop-shadow-xl"
                />
              </motion.div>

              {/* ── Floating: Brand Group — top right ── */}
              <motion.div className="absolute -right-8 -top-[38%] z-20 w-[100px] md:w-[200px]">
                <Image
                  src={brandGroup}
                  alt="Trusted brands"
                  className="drop-shadow-xl"
                />
              </motion.div>

              {/* ── Floating: Calendar — bottom left ── */}
              <motion.div className="absolute left-0 sm:-left-12 -bottom-[25%] z-20 w-[150px] md:w-[240px]">
                <Image
                  src={calendar}
                  alt="Booking calendar"
                  className="drop-shadow-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

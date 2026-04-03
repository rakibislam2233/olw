"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Using require for images as they are guaranteed to be there but Next.js static imports need to match path
import brand1 from "@/assets/home/hero-section/brand-1.png";
import brand2 from "@/assets/home/hero-section/brand-2.png";
import brand3 from "@/assets/home/hero-section/brand-3.png";
import brand4 from "@/assets/home/hero-section/brand-4.png";

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0,0,0,0.2), black 80%)",
        }}
      ></div>

      {/* Top Gradient Glow */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-linear-to-b from-[#ED3C6A20] to-transparent pointer-events-none z-0" />

      {/* Floating Elements Container */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-full max-w-[1200px] -translate-x-1/2 -translate-y-1/2 h-full">
          {/* Floating Brands */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 0.75 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute top-[2%] lg:top-[15%] left-[5%] lg:left-[15%] animate-float"
          >
            <Image
              src={brand1}
              alt="Brand 1"
              width={100}
              height={100}
              className="drop-shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 0.75 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute top-[3%] lg:top-[18%] right-[5%] lg:right-[17%] animate-float-delayed"
          >
            <Image
              src={brand2}
              alt="Brand 2"
              width={80}
              height={80}
              className="drop-shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 0.75 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="absolute bottom-[5%] lg:bottom-[20%] left-[8%] lg:left-[20%] animate-float"
          >
            <Image
              src={brand3}
              alt="Brand 3"
              width={80}
              height={80}
              className="drop-shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 0.75 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="absolute bottom-[2%] lg:bottom-[15%] right-[10%] lg:right-[22%] animate-float-delayed"
          >
            <Image
              src={brand4}
              alt="Brand 4"
              width={100}
              height={100}
              className="drop-shadow-xl"
            />
          </motion.div>

          {/* Dots with subtle pulse */}
          {[
            { top: "25%", left: "5%", color: "#635BFF" },
            { top: "10%", left: "55%", color: "#00E59B" },
            { top: "35%", right: "5%", color: "#F4C430" },
            { bottom: "40%", left: "12%", color: "#FF4F5A", size: "w-4 h-4" },
            { bottom: "5%", left: "8%", color: "#D4AF37" },
            { bottom: "10%", left: "53%", color: "#00D1FF" },
            { bottom: "15%", right: "10%", color: "#1B274C" },
          ].map((dot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 2, delay: i * 0.2 }}
              className={`absolute rounded-full ${dot.size || "w-3 h-3"}`}
              style={{
                top: dot.top,
                left: dot.left,
                right: dot.right,
                bottom: dot.bottom,
                backgroundColor: dot.color,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container relative z-10 mx-auto px-4 text-center max-w-[800px] flex flex-col items-center"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#000000] leading-[1.1] mb-6 md:mb-8 tracking-tight"
        >
          Airbnb Assistants For <br className="hidden md:block" />{" "}
          <span className="text-[28px] md:text-[38.13px] font-medium text-[#000000]">
            Property Management
          </span>
        </motion.h1>
        
        <motion.p
          variants={fadeInUp}
          className="text-[#000000] font-medium text-sm md:text-base leading-relaxed max-w-[620px] mb-8 md:mb-10 opacity-80"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="w-full max-w-[240px] h-[50px] px-6 py-[18px] mb-[27px] rounded-[5px] bg-primary hover:bg-primary/90 text-white text-base font-bold flex items-center justify-center gap-2 cursor-pointer transition-all shadow-[0px_10px_30px_rgba(237,60,106,0.3)]">
            Schedule A Meeting <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Link
            href="#"
            className="text-[14px] font-semibold text-[#1E1E1E] underline decoration-1 underline-offset-4 hover:text-primary transition-colors"
          >
            See Pricing
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

// Re-using testimonial images for avatars 
import avatar1 from "@/assets/home/testimonial/testimonial1.png";
import avatar2 from "@/assets/home/testimonial/testimonial2.png";
import avatar3 from "@/assets/home/testimonial/testimonial3.png";

const ContactCtaSection = () => {
  return (
    <section className="w-full bg-white pb-20 lg:pb-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#F9FAFB] rounded-[16px] p-8 text-center flex flex-col items-center"
        >
          {/* Grouped Avatars */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex -space-x-4 mb-10"
          >
            {[avatar1, avatar2, avatar3].map((avatar, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.1, zIndex: 30 }}
                className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-md relative z-10"
              >
                <Image
                  src={avatar}
                  alt={`Person ${i + 1}`}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-[30px] font-bold text-[#1E1E1E] mb-5 tracking-tight"
          >
            Still have Questions?
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-[#9C9C9C] text-base md:text-[18px] max-w-[620px] mb-12 font-medium"
          >
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="h-[60px] px-10 bg-primary hover:bg-primary/95 text-white rounded-[8px] font-bold text-lg transition-all">
              Get in touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCtaSection;

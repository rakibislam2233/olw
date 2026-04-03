import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

// Re-using testimonial images for avatars 
import avatar1 from "@/assets/home/testimonial/testimonial1.png";
import avatar2 from "@/assets/home/testimonial/testimonial2.png";
import avatar3 from "@/assets/home/testimonial/testimonial3.png";

const ContactCtaSection = () => {
  return (
    <section className="w-full bg-white pb-16 lg:pb-24">
      <div className="container mx-auto px-4 md:px-5">
        <div className="bg-[#F9FAFB] rounded-[24px] p-8 md:p-12 text-center flex flex-col items-center">
          {/* Grouped Avatars */}
          <div className="flex -space-x-4 mb-8">
            {[avatar1, avatar2, avatar3].map((avatar, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-sm"
              >
                <Image
                  src={avatar}
                  alt={`Person ${i + 1}`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <h3 className="text-2xl md:text-[30.5px] font-bold text-black mb-4">
            Still have Questions?
          </h3>
          <p className="text-[#000000B2] text-base font-medium mb-10 max-w-[600px]">
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
          </p>

          <Button className="h-[50px] px-8 bg-primary hover:bg-primary/90 text-white rounded-[8px] font-bold text-base transition-all">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCtaSection;

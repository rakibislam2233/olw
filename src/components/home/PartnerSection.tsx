import React from "react";
import Image from "next/image";

// Importing companies SVG logos
import company1 from "@/assets/home/partner/company1.svg";
import company2 from "@/assets/home/partner/company2.svg";
import company3 from "@/assets/home/partner/company3.svg";
import company4 from "@/assets/home/partner/company4.svg";
import company5 from "@/assets/home/partner/company5.svg";
import company6 from "@/assets/home/partner/company6.svg";
import company7 from "@/assets/home/partner/company7.svg";

const PartnerSection = () => {
  const partners = [
    { logo: company1, name: "Airbnb" },
    { logo: company2, name: "Booking.com" },
    { logo: company3, name: "Vrbo" },
    { logo: company4, name: "Tripadvisor" },
    { logo: company5, name: "Agoda" },
    { logo: company6, name: "Expedia" },
    { logo: company7, name: "HomeToGo" },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="w-full mx-auto">
        <h2 className="text-center text-[18px] md:text-[22px] font-bold text-[#000000] mb-10 px-4">
          Trusted by leaders in 50+ industries
        </h2>
        <div className="flex flex-wrap items-center bg-[#F8F9FA] justify-center gap-6 md:gap-12 lg:gap-16 px-6 py-10 md:py-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-all duration-300 transform hover:scale-110 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                height={40}
                className="w-auto h-8 md:h-9 lg:h-[40px] max-w-[120px] md:max-w-[160px] cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;

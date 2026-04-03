import HeroSection from "@/components/home/HeroSection";
import PartnerSection from "@/components/home/PartnerSection";
import ServiceSection from "@/components/home/ServiceSection";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <PartnerSection />
      <ServiceSection />
    </main>
  );
};

export default HomePage;

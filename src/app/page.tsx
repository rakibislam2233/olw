import HeroSection from "@/components/home/HeroSection";
import PartnerSection from "@/components/home/PartnerSection";
import ServiceSection from "@/components/home/ServiceSection";
import PricingSection from "@/components/home/PricingSection";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <PartnerSection />
      <ServiceSection />
      <PricingSection />
    </main>
  );
};

export default HomePage;

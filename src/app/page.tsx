import HeroSection from "@/components/home/HeroSection";
import PartnerSection from "@/components/home/PartnerSection";
import ServiceSection from "@/components/home/ServiceSection";
import PricingSection from "@/components/home/PricingSection";
import ToolSection from "@/components/home/ToolSection";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <PartnerSection />
      <ServiceSection />
      <PricingSection />
      <ToolSection />
    </main>
  );
};

export default HomePage;

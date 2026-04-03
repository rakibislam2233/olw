import HeroSection from "@/components/home/HeroSection";
import PartnerSection from "@/components/home/PartnerSection";
import ServiceSection from "@/components/home/ServiceSection";
import PricingSection from "@/components/home/PricingSection";
import ToolSection from "@/components/home/ToolSection";
import GetStartedSection from "@/components/home/GetStartedSection";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <PartnerSection />
      <ServiceSection />
      <PricingSection />
      <ToolSection />
      <GetStartedSection />
    </main>
  );
};

export default HomePage;

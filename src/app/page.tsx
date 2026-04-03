import HeroSection from "@/components/home/HeroSection";
import PartnerSection from "@/components/home/PartnerSection";
import ServiceSection from "@/components/home/ServiceSection";
import PricingSection from "@/components/home/PricingSection";
import ToolSection from "@/components/home/ToolSection";
import GetStartedSection from "@/components/home/GetStartedSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialSection from "@/components/home/TestimonialSection";
import FaqSection from "@/components/home/FaqSection";
import ContactCtaSection from "@/components/home/ContactCtaSection";
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
      <WhyChooseUs />
      <TestimonialSection />
      <FaqSection />
      <ContactCtaSection />
    </main>
  );
};

export default HomePage;

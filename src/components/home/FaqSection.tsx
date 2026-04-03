"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try our platform free for 30 days. No credit card required to get started with your first property listing.",
    },
    {
      question: "Can I manage properties across different countries?",
      answer:
        "Absolutely. Our platform is designed for global property management with support for multiple currencies, languages, and time zones.",
    },
    {
      question: "What platforms do you sync with?",
      answer:
        "We sync directly with Airbnb, Booking.com, Vrbo, TripAdvisor, and 50+ other major vacation rental platforms in real-time.",
    },
    {
      question: "Is my data secure?",
      answer:
        "We use bank-level encryption and follow industry-leading security practices to ensure all your property and guest data is safe.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply click 'Schedule a Meeting' or sign up for a free trial. Our onboarding team will help you set up your listings in minutes.",
    },
  ];

  return (
    <section className="w-full bg-white pt-16 md:pt-28 lg:pt-[180px]">
      <div className="container mx-auto">
        <div className="bg-[#F9FAFB] rounded-[16px] p-5 md:p-10 lg:p-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-[80px]"
          >
            <h2 className="text-3xl md:text-[36px] font-bold text-black mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-[#000000] text-sm md:text-[20px] leading-relaxed max-w-[700px] mx-auto opacity-70">
              Everything you need to know about the product and billing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:max-w-3xl mx-auto"
          >
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

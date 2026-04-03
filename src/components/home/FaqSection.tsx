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
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-[42px] font-bold text-black mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-[#000000] text-sm md:text-base leading-relaxed max-w-[700px] mx-auto opacity-70">
            Everything you need to know about our Airbnb assistant platform.
            Can&apos;t find the answer you&apos;re looking for? Reach out to our
            team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[900px] mx-auto"
        >
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#F8BECD] rounded-[16px] overflow-hidden px-6 bg-white hover:border-primary/40 transition-colors shadow-[0px_10px_40px_rgba(237,60,106,0.02)]"
              >
                <AccordionTrigger className="text-[17px] md:text-[19px] py-6 font-bold text-[#1E1E1E] hover:no-underline text-left transition-all">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] md:text-[16px] leading-[1.6] text-black/70 pb-6 transition-all">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;

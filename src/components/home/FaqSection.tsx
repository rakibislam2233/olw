import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const FaqSection = () => {
  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can easily change your plan at any time through your dashboard settings.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time without any hidden fees or charges.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can add custom billing info like VAT numbers and addresses to your invoices.",
    },
    {
      question: "How does billing work?",
      answer:
        "We offer monthly and annual billing cycles. You can pay via credit card, PayPal, or bank transfer.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can change your account email address from the Account Settings section of your dashboard.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-5">
        <div className="bg-[#F9FAFB] rounded-[24px] p-8 md:p-16 lg:p-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[38.13px] font-bold text-black mb-4">
              Frequently asked <span className="text-primary">questions</span>
            </h2>
            <p className="text-[#000000B2] text-sm md:text-base font-medium">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="max-w-[768px] mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-[#E5E7EB] py-2"
                >
                  <AccordionTrigger className="text-left text-[18px] font-semibold text-black hover:no-underline group">
                    <span>{faq.question}</span>
                    {/* Custom Icons based on open/close state logic if needed, 
                        shadcn Accordion usually manages this with data attr */}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4B5563] text-base leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

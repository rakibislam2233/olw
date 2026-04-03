"use client";
import React, { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import arrow from "@/assets/images/arrow.png";
import Image from "next/image";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Freebie",
      price: 0,
      desc: "Ideal for individuals who need quick access to basic features.",
      features: [
        { text: "20,000+ of PNG & SVG graphics", included: true },
        { text: "Access to 100 million stock images", included: true },
        { text: "Upload custom icons and fonts", included: false },
        { text: "Unlimited Sharing", included: false },
        { text: "Upload graphics & video in up to 4k", included: false },
        { text: "Unlimited Projects", included: false },
        { text: "Instant Access to our design system", included: false },
        { text: "Create teams to collaborate on designs", included: false },
      ],
      highlight: false,
    },
    {
      name: "Professional",
      price: 25,
      desc: "Ideal for individuals who need advanced features and tools for client work.",
      features: [
        { text: "20,000+ of PNG & SVG graphics", included: true },
        { text: "Access to 100 million stock images", included: true },
        { text: "Upload custom icons and fonts", included: true },
        { text: "Unlimited Sharing", included: true },
        { text: "Upload graphics & video in up to 4k", included: true },
        { text: "Unlimited Projects", included: true },
        { text: "Instant Access to our design system", included: false },
        { text: "Create teams to collaborate on designs", included: false },
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: 100,
      desc: "Ideal for businesses who need personalized services and security for large teams.",
      features: [
        { text: "20,000+ of PNG & SVG graphics", included: true },
        { text: "Access to 100 million stock images", included: true },
        { text: "Upload custom icons and fonts", included: true },
        { text: "Unlimited Sharing", included: true },
        { text: "Upload graphics & video in up to 4k", included: true },
        { text: "Unlimited Projects", included: true },
        { text: "Instant Access to our design system", included: true },
        { text: "Create teams to collaborate on designs", included: true },
      ],
      highlight: false,
    },
  ];

  return (
    <section className="w-full bg-white pt-12 md:pt-16 lg:pt-[73px]">
      <div className="container mx-auto px-4 md:px-5">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-[93px]">
          <h2 className="text-3xl md:text-[40px] font-bold text-black mb-4">
            Airnbn Assistent <span className="text-primary">pricing</span>
          </h2>
          <p className="text-[#191D23] text-base md:text-[20px]">
            Choose a plan that&apos;s right for you
          </p>
          {/* Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4 relative">
            <span
              className={cn(
                "text-base transition-colors",
                !isYearly ? "text-black" : "text-[#00000066]",
              )}
            >
              Pay Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span
              className={cn(
                "text-base transition-colors text-black",
              )}
            >
              Pay Yearly
            </span>

            {/* Save 25% Arrow */}
            <div className="absolute left-[calc(55%+80px)] -top-4 hidden md:flex items-center gap-1">
              <Image src={arrow} alt="arrow" width={90} height={55} />
              <span className="whitespace-nowrap text-[18px] font-medium  mt-7 text-primary">
                Save 25%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans?.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative flex flex-col p-8 rounded-[15.25px] transition-all duration-300",
                plan.highlight
                  ? "bg-primary text-white shadow-[0px_10px_40px_rgba(237,60,106,0.2)]"
                  : "bg-white border border-primary/30",
              )}
            >
              <h3 className="text-[18px] md:text-[22px] font-bold mb-3">
                {plan.name}
              </h3>
              <p
                className={cn(
                  "text-balance mb-6",
                  plan.highlight ? "text-white/90" : "text-[#64748B]",
                )}
              >
                {plan.desc}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-semibold font-manrope">
                    ${isYearly ? plan.price * 0.75 : plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      plan.highlight ? "text-white/60" : "text-[#00000066]",
                    )}
                  >
                    / Month
                  </span>
                </div>
              </div>

              <Button
                className={cn(
                  "w-full h-[44px] rounded-[4px] text-base mb-10 cursor-pointer",
                  plan.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-transparent border-2 border-primary/70 text-primary hover:bg-primary/5 hover:text-primary",
                )}
                variant={plan.highlight ? "default" : "outline"}
              >
                Get Started Now
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "size-7 md:size-8 rounded-full flex items-center justify-center shrink-0",
                        feature.included
                          ? plan.highlight
                            ? "bg-white/70"
                            : "bg-primary/30"
                          : plan.highlight
                            ? "bg-white/70"
                            : "bg-black/5",
                      )}
                    >
                      {feature.included ? (
                        <Check
                          className={cn(
                            "size-4",
                            plan.highlight ? "text-primary/80" : "text-primary",
                          )}
                        />
                      ) : (
                        <X
                          className={cn(
                            "size-4",
                            plan.highlight ? "text-black/30" : "text-black",
                          )}
                        />
                      )}
                    </div>
                    <span
                      className={cn(
                        "text-[13px] font-medium leading-tight",
                        !feature.included && "opacity-40",
                        plan.highlight ? "text-white" : "text-black",
                      )}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

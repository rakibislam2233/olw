"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

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
    <section className="w-full bg-white py-10 md:py-[50px]">
      <div className="container mx-auto px-4 md:px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[38.13px] font-bold text-black mb-4">
            Airnbn Assistent <span className="text-primary">pricing</span>
          </h2>
          <p className="text-[#000000] text-sm md:text-base font-medium opacity-80">
            Choose a plan that&apos;s right for you
          </p>

          {/* Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4 relative">
            <span
              className={cn(
                "text-sm font-semibold transition-colors",
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
                "text-sm font-semibold transition-colors",
                isYearly ? "text-black" : "text-[#00000066]",
              )}
            >
              Pay Yearly
            </span>

            {/* Save 25% Arrow */}
            <div className="absolute left-[calc(50%+80px)] top-0 hidden md:flex items-center gap-2">
              <svg
                width="40"
                height="24"
                viewBox="0 0 40 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M1 23C1 23 15.5 24 25.5 13.5C35.5 3 39 1 39 1M39 1H34M39 1V6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="whitespace-nowrap text-xs font-bold text-primary">
                Save 25%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative flex flex-col p-8 rounded-[15.25px] transition-all duration-300",
                plan.highlight
                  ? "bg-primary text-white shadow-[0px_10px_40px_rgba(237,60,106,0.2)]"
                  : "bg-white border border-primary/30",
              )}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p
                className={cn(
                  "text-xs leading-relaxed mb-8 h-10 overflow-hidden",
                  plan.highlight ? "text-white/90" : "text-[#00000066]",
                )}
              >
                {plan.desc}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold">
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

              <Button
                className={cn(
                  "w-full h-[45px] rounded-[5px] font-bold text-sm mb-8",
                  plan.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-transparent border border-primary text-primary hover:bg-primary/5",
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
                        "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                        feature.included
                          ? plan.highlight
                            ? "bg-white/20"
                            : "bg-primary/10"
                          : plan.highlight
                            ? "bg-white/10 opacity-50"
                            : "bg-black/5 opacity-50",
                      )}
                    >
                      {feature.included ? (
                        <Check
                          className={cn(
                            "w-3 h-3",
                            plan.highlight ? "text-white" : "text-primary",
                          )}
                        />
                      ) : (
                        <X
                          className={cn(
                            "w-3 h-3",
                            plan.highlight ? "text-white/40" : "text-black/30",
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

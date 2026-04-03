"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import testimonial images
import testimonial1 from "@/assets/home/testimonial/testimonial1.png";
import testimonial2 from "@/assets/home/testimonial/testimonial2.png";
import testimonial3 from "@/assets/home/testimonial/testimonial3.png";

const TestimonialSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const testimonials = [
    {
      avatar: testimonial1,
      name: "Jenny Wilson",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4,
      bgColor: "bg-[#E0F2FE]",
    },
    {
      avatar: testimonial2,
      name: "Esther Howard",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
      bgColor: "bg-[#FEF3C7]",
    },
    {
      avatar: testimonial3,
      name: "Robert Fox",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4,
      bgColor: "bg-[#FEF3C7]",
    },
    {
      avatar: testimonial1,
      name: "Guy Hawkins",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
      bgColor: "bg-[#E0F2FE]",
    },
    {
      avatar: testimonial2,
      name: "Albert Flores",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4,
      bgColor: "bg-[#FEF3C7]",
    },
    {
      avatar: testimonial3,
      name: "Kristin Watson",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
      bgColor: "bg-[#FEF3C7]",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="text-center px-4">
        <h2 className="text-3xl md:text-[32px] font-bold text-black mb-6">
          Check Our Clients <span className="text-primary">Review</span>
        </h2>
        <p className="text-[#000000] text-sm leading-relaxed max-w-[780px] font-semibold mb-12 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-24">
          {testimonials?.map((item, index) => {
            const isActive = index === current;
            return (
              <CarouselItem
                key={index}
                className="pl-8 md:basis-1/2 lg:basis-1/3"
              >
                <div
                  className={cn(
                    "relative flex h-full items-start gap-5 px-8 py-10 rounded-[11px] transition-all duration-700 ease-in-out",
                    isActive
                      ? "bg-white"
                      : "bg-[#F6F6F6]",
                  )}
                >
                  {/* Avatar with colorful circle bg */}
                  <div
                    className={cn(
                      "shrink-0 w-[80px] h-[80px] rounded-full flex items-center justify-center overflow-hidden",
                      item.bgColor,
                    )}
                  >
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col text-left">
                    <h4 className="text-[20px] font-bold text-black mb-1">
                      {item.name}
                    </h4>
                    <p className="text-[#000000] text-[13px] leading-relaxed mb-3 opacity-70">
                      &quot;{item.text}&quot;
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < item.rating ? "#F5A623" : "transparent"}
                          className={
                            i < item.rating ? "text-[#F5A623]" : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="mt-8 flex items-center justify-center gap-4">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
};

export default TestimonialSection;

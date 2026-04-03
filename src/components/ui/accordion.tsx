"use client"

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cn } from "@/lib/utils"
import { PlusIcon, MinusIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col gap-0", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-[#ED3C6A20] last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-center justify-between py-6 text-left text-lg font-bold transition-all outline-none",
          className
        )}
        {...props}
      >
        <span className="group-aria-expanded/accordion-trigger:text-primary transition-colors">
          {children}
        </span>
        <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary text-primary transition-transform duration-300 group-aria-expanded/accordion-trigger:bg-primary group-aria-expanded/accordion-trigger:text-white">
          <PlusIcon data-slot="accordion-trigger-icon" className="size-4 group-aria-expanded/accordion-trigger:hidden" />
          <MinusIcon data-slot="accordion-trigger-icon" className="hidden size-4 group-aria-expanded/accordion-trigger:inline" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden"
      {...props}
    >
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: "auto", 
          opacity: 1,
          transition: {
            height: { duration: 0.3, ease: "easeOut" },
            opacity: { duration: 0.2, delay: 0.1 }
          }
        }}
        exit={{ 
          height: 0, 
          opacity: 0,
          transition: {
            height: { duration: 0.3, ease: "easeIn" },
            opacity: { duration: 0.2 }
          }
        }}
        className={cn(
          "pb-6 text-base md:text-lg text-black/70 leading-relaxed",
          className
        )}
      >
        {children}
      </motion.div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/assets/logo/google-logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home", isActive: true },
    { href: "/", label: "About", isActive: false },
    { href: "/", label: "Services", isActive: false },
    { href: "/", label: "Pricing", isActive: false },
    { href: "/", label: "Blog", isActive: false },
    { href: "/", label: "Resources", isActive: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0px_4px_62px_0px_#FAC4D2A1]">
      <div className="container flex h-[70px] lg:h-[89px] items-center justify-between px-4 md:px-5">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt="Logo"
            width={125}
            height={45}
            className="w-[100px] lg:w-[125px]"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks?.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-[16px] lg:text-[18px] text-[#1E1E1E] hover:text-primary transition-colors",
                link.isActive && "text-primary font-bold border-b border-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <Button className="hidden lg:flex w-full max-w-[201px] h-[50px] px-6 py-[18px] rounded-[5px] bg-primary text-white cursor-pointer hover:bg-primary/90 transition-all">
          Schedule A Meeting <ArrowRight className="ml-2" />
        </Button>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center gap-4">
          <Sheet>
            <SheetTrigger>
              <Button variant="ghost" size="icon" className="text-black">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-left">
                  <Image src={logo} alt="Logo" width={110} height={40} />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-4">
                {navLinks?.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "text-[18px] text-[#1E1E1E] py-4 px-4 rounded-lg transition-all duration-200 hover:bg-[#F5F5F5] hover:text-primary",
                      link.isActive && "text-primary font-bold bg-[#ED3C6A0A]"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-8 px-4">
                  <Button className="w-full h-[55px] rounded-[8px] bg-primary text-white font-bold text-lg shadow-lg hover:bg-primary/90 transition-all">
                    Schedule A Meeting <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

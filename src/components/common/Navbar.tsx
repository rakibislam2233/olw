import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/assets/logo/google-logo.png";
import { ArrowRight } from "lucide-react";
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
      <div className="container flex h-[89px] items-center justify-between px-4 md:px-5">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={125} height={45} />
          </div>
        </div>
        {/* Nav Links */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm md:text-[18px] text-[#1E1E1E] hover:text-primary transition-colors",
                  link.isActive &&
                    "text-primary font-bold border-b border-primary",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        {/* Sign In Button */}
        <Button className="w-full max-w-[201px] h-[50px] px-6 py-[18px] rounded-[5px] bg-primary text-white cursor-pointer">
          Schedule A Meeting <ArrowRight className="ml-2" />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

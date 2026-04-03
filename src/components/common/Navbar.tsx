import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/assets/logo/google-logo.png";

const Navbar = () => {
  const navLinks = [
    { href: "#", label: "Home", isActive: true },
    { href: "#", label: "Features", isActive: false },
    { href: "#", label: "Pricing", isActive: false },
    { href: "#", label: "About", isActive: false },
  ];
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container flex h-[89px] items-center justify-between px-4 md:px-5">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={125} height={45} />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
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
        <Button>Sign In</Button>
      </div>
    </header>
  );
};

export default Navbar;

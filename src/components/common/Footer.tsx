import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/google-logo.png";

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/" },
        { label: "Features", href: "/" },
        { label: "Works", href: "/" },
        { label: "Career", href: "/" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "Customer Support", href: "/" },
        { label: "Delivery Details", href: "/" },
        { label: "Terms & Conditions", href: "/" },
        { label: "Privacy Policy", href: "/" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Free eBooks", href: "/" },
        { label: "Development Tutorial", href: "/" },
        { label: "How to - Blog", href: "/" },
        { label: "Youtube Playlist", href: "/" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
      href: "#",
      name: "Twitter",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      href: "#",
      name: "Facebook",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      href: "#",
      name: "Instagram",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      href: "#",
      name: "Github",
    },
  ];

  return (
    <footer className="w-full bg-white mt-10 md:mt-14 lg:mt-[77px] pt-16 lg:pt-20 border-t border-[#0000000D]">
      <div className="container mx-auto px-4 md:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 lg:mb-24">
          {/* Logo & Description */}
          <div className="flex flex-col max-w-[320px]">
            <div className="mb-6">
              <Image src={logo} alt="Logo" width={125} height={45} />
            </div>
            <p className="text-[#000000B2] text-sm md:text-base leading-relaxed mb-10 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
            <div className="flex items-center gap-5">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-[#0000001A] flex items-center justify-center text-black hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="text-[18px] font-bold text-black mb-8 uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-6">
                {column.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    <Link
                      href={link.href}
                      className="text-[#000000B2] text-sm md:text-base font-medium hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#230B41] py-5 text-center">
        <p className="text-white text-sm md:text-base font-medium opacity-80">
          © Copyright {new Date().getFullYear()}, All Rights Reserved by <span className="text-primary">OLW</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

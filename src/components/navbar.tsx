"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "TOURS", href: "/tours" },
  { label: "SERVICES", href: "/services" },
  { label: "PAGES", href: "#",
    submenu: [
      { label: "BLOG", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "GALLERY", href: "/gallery" }
    ]
  },
  { label: "CONTACTS", href: "/contacts" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-gray-900 shadow-md py-3"
      : "bg-gray-800 py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <Image
            src="https://ext.same-assets.com/230652411/1386475082.png"
            alt="Backpack Story"
            width={225}
            height={39}
            className={cn("h-10 w-auto transition-all duration-300", isScrolled ? "" : "brightness-200")}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.submenu ? (
                <>
                  <button
                    // className={cn(
                    //   "flex items-center text-sm font-medium tracking-wider",
                    //   isScrolled ? "text-navy hover:text-teal" : "text-white hover:text-mint"
                    // )}
                    className={cn(
                      "flex items-center text-sm font-medium tracking-wider",
                      "text-white hover:text-teal-400"
                    )}
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-4 w-4"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-white ring-opacity-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center text-sm font-medium tracking-wider",
                    "text-white hover:text-teal-400"
                  )}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Search Icon */}
        <button
          className="hidden md:flex items-center justify-center p-2 rounded-full text-white hover:text-teal-400"

        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>

        {/* Mobile menu button */}
        <button
          // className={cn(
          //   "md:hidden flex items-center p-2 rounded-md",
          //   isScrolled ? "text-navy" : "text-white"
          // )}
          className="md:hidden flex items-center p-2 rounded-md text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
         className={cn(
          "md:hidden absolute w-full bg-gray-800 shadow-lg transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
        )}
      >
        <nav className="px-4 pt-2 pb-4">
          {navLinks.map((link) => (
            <div key={link.label} className="py-2">
              {link.submenu ? (
                <div>
                  <button
                    className="flex items-center justify-between w-full text-white hover:text-teal-400 py-2"
                    onClick={() => toggleDropdown(link.label)}
                  >
                    <span>{link.label}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={cn(
                        "h-4 w-4 transition-transform",
                        activeDropdown === link.label ? "rotate-180" : ""
                      )}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {activeDropdown === link.label && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block text-sm text-white hover:text-teal-400 py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="block text-navy hover:text-teal py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

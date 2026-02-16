"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-transparent border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-linear-to-br from-[#56E0E0] to-[#007299] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#007299] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-[#007299] transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#007299] transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#007299] transition-colors font-medium"
            >
              About Us
            </Link>
            <Button className="bg-color">
                Register
            </Button>
          </div>
         <div className="md:hidden">
            <Button
              type="button"
              className="text-gray-700 hover:text-[#007299] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

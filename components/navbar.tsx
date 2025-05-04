"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check if we're in a dark section by looking at body background
      const bodyBg = window.getComputedStyle(document.body).backgroundColor;
      setIsDarkSection(bodyBg === "rgb(0, 0, 0)" || bodyBg === "#000000");
    };

    window.addEventListener("scroll", handleScroll);
    // Also add a MutationObserver to detect background color changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "style") {
          const bodyBg = window.getComputedStyle(document.body).backgroundColor;
          setIsDarkSection(bodyBg === "rgb(0, 0, 0)" || bodyBg === "#000000");
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkSection
            ? "bg-black/90 backdrop-blur-md shadow-sm"
            : "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className={`text-2xl font-bold ${
              isDarkSection ? "text-white" : "text-black"
            }`}
          >
            <Image src="logo.svg" alt="Logo" width={150} height={100} />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                isActive("/")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${
                isActive("/about")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary"
              }`}
            >
              About Live Code
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${
                isActive("/about")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary"
              }`}
            >
              Features
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${
                isActive("/contact")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary"
              }`}
            >
              Packages
            </Link>
            <Button>Get Started</Button>
          </nav>

          <button
            className={`md:hidden ${
              isDarkSection ? "text-white" : "text-black"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${isDarkSection ? "bg-black" : "bg-white"}`}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className={`py-2 font-medium transition-colors ${
                isActive("/")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`py-2 font-medium transition-colors ${
                isActive("/about")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Live Code
            </Link>

            <Link
              href="/contact"
              className={`py-2 font-medium transition-colors ${
                isActive("/contact")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/contact"
              className={`py-2 font-medium transition-colors ${
                isActive("/contact")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Packages
            </Link>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
}

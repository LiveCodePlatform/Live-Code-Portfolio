"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { initScrollColorChange } from "@/lib/scroll-color";
import AboutBanner from "@/components/about-banner";
import HowWeStarted from "@/components/howe-start";
import AboutCTA from "@/components/about-cta";
import TestimonialSection from "@/components/testmonial-section";
import CTASection from "@/components/cta-section";

export default function About() {
  useEffect(() => {
    // Initialize the scroll color change functionality
    const cleanup = initScrollColorChange();

    return () => {
      cleanup();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <AboutBanner />

        {/* Our Story Section */}
        <HowWeStarted />

        {/* Our Values Section */}
        <AboutCTA />

        <TestimonialSection />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

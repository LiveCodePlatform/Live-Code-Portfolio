"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ClientSection from "@/components/client-section";
import TestmonialSection from "@/components/testmonial-section";
import ProductFeatures from "@/components/product-features";
import CTASection from "@/components/cta-section";
import { initScrollColorChange } from "@/lib/scroll-color";
import PricingPlan from "@/components/pricing-plan";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize the scroll color change functionality
    const cleanup = initScrollColorChange();

    return () => {
      cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen transition-colors duration-500"
    >
      <Navbar />

      <main>
        <HeroSection />

        <ClientSection />

        <ProductFeatures />

        <TestmonialSection />

        <PricingPlan />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

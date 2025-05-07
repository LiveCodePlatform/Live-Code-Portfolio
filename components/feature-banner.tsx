"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function FeatureBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate content on load
    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section min-h-screen flex items-center pt-20 relative overflow-hidden"
      data-bgcolor="#ffffff"
      data-textcolor="#ffffff"
    >
      <Image
        src="/ctabg.svg"
        alt="About Banner"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="container mx-auto px-4 min-h-[calc(100vh-12rem)] flex items-center">
        <div className="max-w-4xl mx-auto text-center" ref={contentRef}>
          <h1 className="text-4xl md:text-5xl font-semibold">
            Manage your shop better and sale online easily with our features
            <br />
            focused to solve your problems.
          </h1>
        </div>
      </div>

      {/* Background shapes */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}

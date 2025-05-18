"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function AboutBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Animate content on load
    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power3.out ease-in-out",
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
      style={{
        backgroundImage: "url('/ctabg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 min-h-[calc(100vh-12rem)] flex items-center">
        <div
          className="max-w-5xl mx-auto text-center text-white"
          ref={contentRef}
        >
          <p className="text-4xl md:text-5xl lg:text-[48px] leading-[1.2] font-semibold">
            At Live Code Myanmar, we turn <br /> your facebook live chaos into
            calm
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax effect for the hero image
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
      data-textcolor="#000000"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight inter">
              Live Easily, Live <br /> Better with Live <br /> Code Myanmar
            </h1>

            <p className="text-lg sm:text-xl text-[#151515] max-w-lg poppins">
              With a just few simple clicks- mange your live sale stocks, rack
              live sale orders, save time with our auto replay messages
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Consult with us
                {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
              </Button>
              <Button size="lg" variant="outline">
                See our packages
              </Button>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Product showcase"
              width={600}
              height={600}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Background shapes */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate content on scroll
    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section pt-24 md:pt-32 relative overflow-hidden"
      data-bgcolor="#151515"
      data-textcolor="#ffffff"
    >
      {/* Background gradient */}
      <Image
        src="/ctabg.svg"
        alt="CTA Background"
        fill
        sizes="100vw"
        className="absolute top-0 left-0 z-[-1] object-cover"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#151515] to-[#151515]"></div> */}

      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-6">
            <h1 className="text-4xl text-white sm:text-5xl lg:text-6xl font-bold leading-tight inter">
              Get In Touch
            </h1>

            <p className="text-lg text-white sm:text-xl max-w-lg poppins">
              We're here to help! Whether you have questions about our packages,
              need support, or want to discuss your specific needs, reach out to
              us.
            </p>

            <div className="">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-slate-200"
              >
                Let talk with us
                {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
              </Button>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <Image
              src="phone.svg"
              alt="Phone"
              width={600}
              height={500}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

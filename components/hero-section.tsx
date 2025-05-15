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
      className="section min-h-screen flex items-center relative overflow-hidden"
      data-bgcolor="#ffffff"
      data-textcolor="#000000"
    >
      <Image
        src="/background.svg"
        alt="Product showcase"
        fill
        sizes="100vw"
        className="absolute hidden md:block top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      <Image
        src="/mobilehero.svg"
        alt="Product showcase"
        fill
        sizes="100vw"
        className="absolute md:hidden top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      <div className="w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div
            ref={contentRef}
            className="container mx-auto px-4 flex flex-col lg:w-1/2 justify-center items-center"
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl text-[#151515] lg:text-6xl font-bold leading-tight inter">
                Live Easily <br /> Live Better
              </h1>
              <span className="text-[#151515] font-semibold text-[24px]">
                {" "}
                with Live Code Myanmar
              </span>
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
          </div>

          <Image
            src="/herobanner.svg"
            alt="Product showcase"
            width={500}
            height={500}
            className="w-1/2 h-full object-cover hidden xl:block overflow-hidden"
          />
        </div>

        <Image
          src="/letter.png"
          alt="Product showcase"
          width={261}
          height={84}
          className="hidden md:block w-[261px] h-[84px] absolute bottom-5 left-[1%]"
        />
      </div>

      {/* Background shapes */}
    </section>
  );
}

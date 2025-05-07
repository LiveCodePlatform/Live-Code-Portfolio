"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function HowWeStarted() {
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
      className="py-24"
      data-bgcolor="#ffffff"
      data-textcolor="#000000"
    >
      <div className="container mx-auto px-4" ref={contentRef}>
        <div
          className="flex flex-col md:flex-row gap-4 items-center max-w-4xl mx-auto mb-4"
          //   ref={imageRef}
        >
          <div className="relative w-full md:w-2/5 h-80 rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Our journey"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-3/5 h-80 rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Our journey"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="hidden md:block relative max-w-4xl mx-auto h-80 rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=500&width=500"
            alt="Our journey"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold mb-8">
            How we started
          </h2>
          <div className="poppins text-[20px] font-medium">
            <p className="mb-6">
              Our story started on our Social Media Agency, Digital Saw, working
              hand-in-hand with online shops across Myanmar. As a social media
              agency, we saw the vibrant energy of Live Selling — and the silent
              struggles behind the scenes. Hours wasted sorting comments. Lost
              orders. Delayed responses. We knew there had to be a better way –
              a way for businesses to Live Easily, Live Better.
            </p>
            <p className="">
              We partnered with OTAS Tech Solutions to create Live Code Software
              — a tool designed by sellers, for sellers. Launched in the third
              quarter of 2024, it automates the messy backend work of Live
              Sales, saving you time, cutting costs, and reducing errors.
            </p>
          </div>
        </div>
        <div className="md:hidden mt-10 relative max-w-4xl mx-auto h-80 rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=500&width=500"
            alt="Our journey"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

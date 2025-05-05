"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "./ui/button";

const clients = [
  { id: 1, name: "Client 1", image: "" },
  { id: 2, name: "Client 2" },
  { id: 3, name: "Client 3" },
  { id: 4, name: "Client 4" },
  { id: 5, name: "Client 5" },
  { id: 6, name: "Client 6" },
];

export default function ClientSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate clients on scroll
    if (clientsRef.current) {
      gsap.from(clientsRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
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
      className="section py-24 mt-24"
      data-bgcolor="#ffffff"
      data-textcolor="#000000"
    >
      <div className="container mx-auto px-4 flex">
        <div
          // ref={clientsRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center w-1/2"
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className="w-full max-w-[140px] grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILstzE4n4jxRaa2LcTb5Uf_JKLVtXIZjL3w&s"
                alt={client.name}
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <div>
            <p className="text-primary font-semibold text-[36px] mb-5">
              Trusted by Growing <br /> Facebook Shops <br /> Across Myanmar
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

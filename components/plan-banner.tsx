"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";
import Image from "next/image";

// Custom list marker component
const ListMarker = () => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 mr-3"
  >
    <path
      d="M10 15.0244C11.25 15.0244 12.3125 14.5869 13.1875 13.7119C14.0625 12.8369 14.5 11.7744 14.5 10.5244C14.5 9.27441 14.0625 8.21191 13.1875 7.33691C12.3125 6.46191 11.25 6.02441 10 6.02441C8.75 6.02441 7.6875 6.46191 6.8125 7.33691C5.9375 8.21191 5.5 9.27441 5.5 10.5244C5.5 11.7744 5.9375 12.8369 6.8125 13.7119C7.6875 14.5869 8.75 15.0244 10 15.0244ZM10 11.5244C9.71667 11.5244 9.47917 11.4286 9.2875 11.2369C9.09583 11.0452 9 10.8077 9 10.5244C9 10.2411 9.09583 10.0036 9.2875 9.81191C9.47917 9.62025 9.71667 9.52441 10 9.52441C10.2833 9.52441 10.5208 9.62025 10.7125 9.81191C10.9042 10.0036 11 10.2411 11 10.5244C11 10.8077 10.9042 11.0452 10.7125 11.2369C10.5208 11.4286 10.2833 11.5244 10 11.5244ZM10 20.5244C8.61667 20.5244 7.31667 20.2619 6.1 19.7369C4.88333 19.2119 3.825 18.4994 2.925 17.5994C2.025 16.6994 1.3125 15.6411 0.7875 14.4244C0.2625 13.2077 0 11.9077 0 10.5244C0 9.14108 0.2625 7.84108 0.7875 6.62441C1.3125 5.40775 2.025 4.34941 2.925 3.44941C3.825 2.54941 4.88333 1.83691 6.1 1.31191C7.31667 0.786914 8.61667 0.524414 10 0.524414C11.3833 0.524414 12.6833 0.786914 13.9 1.31191C15.1167 1.83691 16.175 2.54941 17.075 3.44941C17.975 4.34941 18.6875 5.40775 19.2125 6.62441C19.7375 7.84108 20 9.14108 20 10.5244C20 11.9077 19.7375 13.2077 19.2125 14.4244C18.6875 15.6411 17.975 16.6994 17.075 17.5994C16.175 18.4994 15.1167 19.2119 13.9 19.7369C12.6833 20.2619 11.3833 20.5244 10 20.5244ZM10 18.5244C12.2333 18.5244 14.125 17.7494 15.675 16.1994C17.225 14.6494 18 12.7577 18 10.5244C18 8.29108 17.225 6.39941 15.675 4.84941C14.125 3.29941 12.2333 2.52441 10 2.52441C7.76667 2.52441 5.875 3.29941 4.325 4.84941C2.775 6.39941 2 8.29108 2 10.5244C2 12.7577 2.775 14.6494 4.325 16.1994C5.875 17.7494 7.76667 18.5244 10 18.5244Z"
      fill="#5D4037"
    />
  </svg>
);

export default function PlanBanner() {
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
      className="section flex items-center py-20 md:py-10 relative overflow-hidden"
      data-bgcolor="#F2F3F7"
      data-textcolor="#000000"
    >
      <div className="container mx-auto px-4 flex flex-col items-center pt-40">
        <div className="max-w-4xl mx-auto md:text-center" ref={contentRef}>
          <h1 className="text-4xl md:text-5xl font-semibold">
            Live Code Myanmar exists to <br /> help you Live Easily, Live
            Better.
          </h1>
          <p className="text-[24px] font-semibold mt-10">
            Choose the Right Plan for Your Business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-20">
          {/* Standard Plan */}
          <div className="bg-white rounded-lg shadow-lg py-8 px-10 md:h-[390px] border border-gray-200">
            <h3 className="text-[36px] font-bold text-primary my-6 inter">
              Standard Plan
            </h3>

            <ul className="space-y-8 mb-8 poppins">
              <li className="flex items-start">
                <ListMarker />
                <span className="text-slate-700">
                  500 to 2000 Comments per Live Sale
                </span>
              </li>
              <li className="flex items-start">
                <ListMarker />
                <span className="text-slate-700">
                  Support 400 Auto Reply Message to Customers
                </span>
              </li>
              <li className="flex items-start">
                <ListMarker />
                <span className="text-slate-700">
                  Support 4 Live Sales Per Week
                </span>
              </li>
            </ul>

            <Button
              variant="outline"
              className="w-full py-6 border-primary text-primary poppins font-medium text-[14px] hover:bg-primary hover:text-white"
            >
              Contact to Consult
            </Button>
          </div>

          {/* Business Plan */}
          <div className="bg-white rounded-lg py-8 px-10 shadow-lg border border-gray-200">
            <h3 className="text-[36px] font-bold text-primary my-6 inter">
              Business Plan
            </h3>

            <ul className="space-y-8 mb-8 poppins">
              <li className="flex items-start">
                <ListMarker />
                <span className="text-slate-700">
                  Up to 1 Million Comments per Live Sale
                </span>
              </li>
              <li className="flex items-start">
                <ListMarker />
                <span className="text-slate-700">
                  Support unlimited Live Sales Per Week
                </span>
              </li>
              <li className="flex items-start">
                <ListMarker />
                <span className="text-slate-700">
                  Support unlimited Auto Reply Message to Customers
                </span>
              </li>
              <li className="flex items-start">
                <ListMarker />
                <span className="text-slate-700">
                  Dedicated Dev Ops Support
                </span>
              </li>
              <li className="flex items-start">
                <ListMarker />
                <span className="text-slate-700">24/7 Customer Support</span>
              </li>
            </ul>

            <Button
              variant="default"
              className="w-full py-6 bg-[#5d4037] border-primary text-white poppins font-medium text-[14px] hover:bg-[#4e342e] hover:text-white"
            >
              Contact to Consult
            </Button>
          </div>
        </div>
      </div>

      {/* Background shapes */}

      <Image
        src="/planbg.svg"
        alt="About Banner"
        width={1920}
        height={1080}
        className="object-cover absolute bottom-0 left-0 w-full z-[-1]"
      />
    </section>
  );
}

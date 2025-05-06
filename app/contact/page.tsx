"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { initScrollColorChange } from "@/lib/scroll-color";

export default function Contact() {
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
        <section
          className="py-24 pt-32 relative"
          data-bgcolor="#ffffff"
          data-textcolor="#000000"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mt-20">
              <h1 className="text-4xl md:text-5xl lg:text-[48px] font-semibold mb-6">
                Get in touch
              </h1>
              <p className="text-lg text-slate-600 mb-8 poppins">
                We're here to help! Whether you have questions about our
                packages, need support, or want to discuss your specific needs,
                reach out to us.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          className="py-16"
          data-bgcolor="#ffffff"
          data-textcolor="#000000"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto px-10 py-10 border border-slate-200 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-center gap-20">
                <div>
                  <h2 className="text-[32px] font-bold mb-8">
                    Talk with our sale team
                  </h2>
                  <p className="text-lg mb-8">
                    Our office hours are Monday to Friday,
                    <br /> 9 AM to 5 PM. We're here to assist you with any
                    questions or support you need.
                  </p>

                  <Button className="bg-primary text-white w-full py-6">
                    +959 535 433 452
                  </Button>
                </div>

                <div className="hidden md:block w-1 h-52 bg-primary opacity-25"></div>

                <div>
                  <h2 className="text-[32px] font-bold mb-8">
                    Send Us an email
                  </h2>
                  <p className="text-lg mb-8">
                    Our office hours are Monday to Friday,
                    <br /> 9 AM to 5 PM. We're here to assist you with any
                    questions or support you need.
                  </p>

                  <Button className="bg-primary text-white w-full py-6">
                    livecode.com.mm@gmail.com
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

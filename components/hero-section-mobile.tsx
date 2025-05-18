"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSectionMobile() {
  return (
    <section
      // ref={sectionRef}
      className="section min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/mobilehero.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div className="container mx-auto px-4 flex flex-col lg:w-1/2 justify-center items-center">
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
    </section>
  );
}

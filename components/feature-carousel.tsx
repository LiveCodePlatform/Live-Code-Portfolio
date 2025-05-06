"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Customer Management",
    company: "TechCorp",
    content:
      "Store all your stocks in one place and track the list from the most selling product to the least selling one",
    image: "/feature.svg",
    icon: (
      <Image
        src="/placeholder.svg?height=24&width=24"
        alt="Icon"
        width={24}
        height={24}
        className="rounded-md"
      />
    ),
  },
  {
    id: 2,
    name: "Order Tracking",
    company: "DataDrive Solutions",
    content:
      "Track all of your product list from live sales and mange the stock control of your business",
    image: "/feature.svg",
    icon: (
      <Image
        src="/feature.svg"
        alt="Icon"
        width={24}
        height={24}
        className="rounded-md"
      />
    ),
  },
  {
    id: 3,
    name: "Live Sale Code",
    company: "Creative Studios",
    content: "Auto-generated types keep everything working as expected.",
    image: "/placeholder.svg?height=60&width=60&text=AR",
    icon: (
      <Image
        src="/placeholder.svg?height=24&width=24"
        alt="Icon"
        width={24}
        height={24}
        className="rounded-md"
      />
    ),
  },
  {
    id: 4,
    name: "Stock Left  Update",
    company: "InnovateCo",
    content: "Validate content structure before shipping live.",
    image: "/placeholder.svg?height=60&width=60&text=EC",
    icon: (
      <Image
        src="/placeholder.svg?height=24&width=24"
        alt="Icon"
        width={24}
        height={24}
        className="rounded-md"
      />
    ),
  },
];

export default function FeatureCarousel() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Custom previous button click handler
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Custom next button click handler
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false, // Hide default arrows
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 640,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
    // onReInit: () => {
    //   // Update slidesToShow based on current settings
    //   if (window.innerWidth < 640) {
    //     setSlidesToShow(1);
    //   } else if (window.innerWidth < 1024) {
    //     setSlidesToShow(2);
    //   } else {
    //     setSlidesToShow(3);
    //   }
    // },
  };

  // Calculate progress percentage
  //   const progressPercentage =
  //     ((currentSlide + slidesToShow) / testimonials.length) * 100;
  // Ensure progress doesn't exceed 100%
  //   const normalizedProgress = Math.min(progressPercentage, 100);

  return (
    <section
      className="py-16 md:py-24"
      data-bgcolor="#151515"
      data-textcolor="#ffffff"
    >
      <div className="container mx-auto">
        <div className="w-full">
          <div className=" flex flex-col md:flex-row justify-center items-center mb-20">
            <div>
              <h2 className=" text-3xl md:text-4xl lg:text-[48px] font-semibold">
                View all your customer list from live sales
              </h2>
            </div>
          </div>

          {/* Slider */}
          <div className="testimonial-slider mt-10 text-black relative">
            <button
              onClick={handlePrev}
              className="hidden md:block p-2 rounded-full border border-gray-500 bg-white text-blue hover:bg-slate-100 transition-colors shadow-md absolute top-1/3 left-[-5px] z-10 -translate-y-1/2"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-8 h-8 " />
            </button>
            <button
              onClick={handleNext}
              className="hidden md:block p-2 rounded-full border border-gray-500 bg-white text-blue hover:bg-slate-100 transition-colors shadow-md absolute top-1/3 right-[-15px] z-10 -translate-y-1/2"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-3">
                  <div className="bg-white rounded-xl shadow-sm px-5 md:px-10 py-10 w-full flex flex-col md:flex-row items-center border border-slate-100 mx-2">
                    <div className="md:w-2/3 md:px-10">
                      <h1 className="text-[24px] md:text-[32px] lg:text-[48px] font-bold mb-2">
                        {testimonial.name}
                      </h1>
                      <p className="text-[18px] lg:text-[24px]">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="w-full md:w-1/3">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={300}
                        height={300}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                    <div className="bg-[#1f1f1f] px-7 py-10 rounded-xl font-semibold">
                      <h1 className="text-white text-[22px] mb-5">
                        Order Tracking
                      </h1>
                      <p className="text-[#A4A4A4] text-[18px]">
                        Track all of your product list from live sales and mange
                        the stock control of your business
                      </p>
                    </div>
                    <div className="bg-[#1f1f1f] px-7 py-10 rounded-xl font-semibold">
                      <h1 className="text-white text-[22px] mb-5">
                        Order Tracking
                      </h1>
                      <p className="text-[#A4A4A4] text-[18px]">
                        Track all of your product list from live sales and mange
                        the stock control of your business
                      </p>
                    </div>
                    <div className="bg-[#1f1f1f] px-7 py-10 rounded-xl font-semibold">
                      <h1 className="text-white text-[22px] mb-5">
                        Order Tracking
                      </h1>
                      <p className="text-[#A4A4A4] text-[18px]">
                        Track all of your product list from live sales and mange
                        the stock control of your business
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Progress bar */}
          {/* <div className="container mx-auto h-1 mt-10 bg-slate-200 rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-[#305CDE] rounded-full transition-all duration-300"
              style={{ width: `${normalizedProgress}%` }}
            ></div>
          </div> */}
        </div>
      </div>

      {/* Add custom styles for the slider */}
      <style jsx global>{`
        .testimonial-slider .slick-track {
          display: flex !important;
        }
        .testimonial-slider .slick-slide {
          height: inherit !important;
        }
        .testimonial-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}

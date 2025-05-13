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
    name: "Sarah Johnson",
    company: "TechCorp",
    content:
      "This is a lifesaver! It's so user-friendly, even for someone like me who isn't super tech-savvy. The interface is intuitive and the features are exactly what I needed for my daily workflow.",
    image: "/placeholder.svg?height=60&width=60&text=SJ",
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
    name: "Michael Thompson",
    company: "DataDrive Solutions",
    content:
      "If you're a busy professional looking for an easy and effective way to do live presentations, look no further! This product has streamlined our entire process and saved us countless hours.",
    image: "/placeholder.svg?height=60&width=60&text=MT",
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
    id: 3,
    name: "Alex Rodriguez",
    company: "Creative Studios",
    content:
      "I used to dread client presentations. It felt clunky and hard to manage. But ever since I started using this platform, everything has changed! The tools are powerful yet simple to use.",
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
    name: "Emily Chen",
    company: "InnovateCo",
    content:
      "This feature has completely transformed how I connect with my customers! Sales have gone through the roof and it's actually FUN now! I can't imagine going back to our old system.",
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
  {
    id: 5,
    name: "David Wilson",
    company: "StartupLabs",
    content:
      "The analytics capabilities alone are worth the investment. We've gained insights that have completely changed our strategy. The customer support team has been exceptional as well.",
    image: "/placeholder.svg?height=60&width=60&text=DW",
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
    id: 6,
    name: "Lisa Martinez",
    company: "Global Retail",
    content:
      "As someone who manages multiple teams, this tool has been invaluable. The collaboration features are seamless, and the learning curve is minimal. Highly recommended for any business.",
    image: "/placeholder.svg?height=60&width=60&text=LM",
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

export default function TestimonialSection() {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false, // Hide default arrows
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    onReInit: () => {
      // Update slidesToShow based on current settings
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    },
  };

  // Calculate progress percentage
  const progressPercentage =
    ((currentSlide + slidesToShow) / testimonials.length) * 100;
  // Ensure progress doesn't exceed 100%
  const normalizedProgress = Math.min(progressPercentage, 100);

  return (
    <section
      className="py-16 md:py-24"
      data-bgcolor="#F2F3F7"
      data-textcolor="#000000"
    >
      <div className="container mx-auto">
        <div className=" md:w-full">
          <div className=" flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className=" text-3xl md:text-4xl font-bold">
                What our customers are saying
              </h2>
            </div>
            <div className="hidden md:block flex items-center space-x-4 mt-4 md:mt-0">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-gray-500 hover:bg-slate-100 transition-colors shadow-md"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-gray-500 hover:bg-slate-100 transition-colors shadow-md"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="testimonial-slider mt-10 text-black">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-2 md:px-3">
                  <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-[280px] flex flex-col border border-slate-200 md:mx-2">
                    <div className="mb-4">{testimonial.icon}</div>
                    <p className="text-[18px] mb-6 flex-grow">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-slate-200">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-5">
                        <h4 className="font-bold text-[18px]">
                          {testimonial.name}
                        </h4>
                        <p className="text-[16px]">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Progress bar */}
          <div className="container mx-auto h-1 mt-5 md:mt-10 bg-slate-200 rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-[#305CDE] rounded-full transition-all duration-300"
              style={{ width: `${normalizedProgress}%` }}
            ></div>
          </div>

          {/* Custom dot indicators */}
          {/* <div className="flex justify-center items-center mt-8 space-x-2">
            {testimonials
              .map((_, index) => {
                // Only show dots for the first slide of each visible group
                if (index % slidesToShow === 0 || index === 0) {
                  const isActive =
                    currentSlide === index ||
                    (currentSlide > index &&
                      currentSlide < index + slidesToShow);

                  return (
                    <button
                      key={index}
                      onClick={() => sliderRef.current?.slickGoTo(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-8 bg-primary"
                          : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                      aria-current={isActive ? "true" : "false"}
                    />
                  );
                }
                return null;
              })
              .filter(Boolean)}
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

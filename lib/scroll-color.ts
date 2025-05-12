import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initScrollColorChange() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Get all sections with data-bgcolor attribute
  const sections = gsap.utils.toArray<HTMLElement>("[data-bgcolor]");

  // Set up ScrollTrigger for each section
  const triggers = sections.map((section, i) => {
    const prevSection = i === 0 ? null : sections[i - 1];

    return ScrollTrigger.create({
      trigger: section,
      start: "top 50%", // Start when the section is 50% in view
      end: "bottom 50%", // End when the section is 50% out of view
      onEnter: () => {
        gsap.to("body", {
          backgroundColor: section.dataset.bgcolor,
          color:
            section.dataset.textcolor ||
            (section.dataset.bgcolor === "#151515" ? "#F2F3F7" : "#151515"),
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      },
      onEnterBack: () => {
        gsap.to("body", {
          backgroundColor: section.dataset.bgcolor,
          color:
            section.dataset.textcolor ||
            (section.dataset.bgcolor === "#151515" ? "#F2F3F7" : "#151515"),
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      },
      onLeaveBack: () => {
        if (prevSection) {
          gsap.to("body", {
            backgroundColor: prevSection.dataset.bgcolor,
            color:
              prevSection.dataset.textcolor ||
              (prevSection.dataset.bgcolor === "#151515"
                ? "#F2F3F7"
                : "#151515"),
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      },
      markers: false, // Set to true for debugging
    });
  });

  // Cleanup function
  return () => {
    triggers.forEach((trigger) => trigger.kill());
  };
}

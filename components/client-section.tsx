"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

const clients = [
  { id: 1, name: "Client 1" },
  { id: 2, name: "Client 2" },
  { id: 3, name: "Client 3" },
  { id: 4, name: "Client 4" },
  { id: 5, name: "Client 5" },
  { id: 6, name: "Client 6" },
]

export default function ClientSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const clientsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

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
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section py-16 border-t border-slate-200"
      data-bgcolor="#ffffff"
      data-textcolor="#000000"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-medium text-center mb-12 text-slate-600">
          Trusted by industry-leading companies
        </h2>

        <div
          ref={clientsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className="w-full max-w-[140px] grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src="/placeholder.svg?height=60&width=140"
                alt={client.name}
                width={140}
                height={60}
                className="object-contain h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

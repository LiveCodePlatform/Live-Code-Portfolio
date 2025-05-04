"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { initScrollColorChange } from "@/lib/scroll-color"

export default function About() {
  useEffect(() => {
    // Initialize the scroll color change functionality
    const cleanup = initScrollColorChange()

    return () => {
      cleanup()
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-24 pt-32 relative" data-bgcolor="#ffffff" data-textcolor="#000000">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Company</h1>
              <p className="text-lg text-slate-600 mb-12">
                We're on a mission to transform the way people interact with technology.
              </p>
              <div className="relative w-full h-64 md:h-96 mb-12 rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=1200" alt="Our team" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-slate-50" data-bgcolor="#ffffff" data-textcolor="#000000">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg mb-6">
                    Founded in 2020, our company began with a simple mission: to create intuitive, powerful products
                    that solve real-world problems. What started as a small team of passionate engineers has grown into
                    a global company serving customers worldwide.
                  </p>
                  <p className="text-lg">
                    Our journey has been defined by innovation, perseverance, and a deep commitment to our users.
                    Through challenges and triumphs, we've remained focused on building technology that enhances human
                    potential.
                  </p>
                </div>
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image src="/placeholder.svg?height=500&width=500" alt="Our journey" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-24" data-bgcolor="#ffffff" data-textcolor="#000000">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Innovation</h3>
                  <p>We constantly push the boundaries of what's possible, embracing new ideas and technologies.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Quality</h3>
                  <p>
                    We never compromise on the quality of our products, ensuring excellence in everything we create.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Integrity</h3>
                  <p>
                    We operate with transparency and honesty in all our dealings, building trust with our customers.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Customer Focus</h3>
                  <p>Our customers' needs drive our decisions, and their success is our ultimate goal.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Sustainability</h3>
                  <p>We're committed to minimizing our environmental impact and creating sustainable solutions.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                  <p>We believe in the power of teamwork and diverse perspectives to solve complex problems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-slate-50" data-bgcolor="#ffffff" data-textcolor="#000000">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((member) => (
                  <div key={member} className="text-center">
                    <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=200&width=200&text=Team Member ${member}`}
                        alt={`Team member ${member}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">Team Member {member}</h3>
                    <p className="text-slate-600">Position Title</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white" data-bgcolor="#ffffff" data-textcolor="#000000">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
              <p className="text-lg mb-8">
                We're always looking for talented individuals to join our mission. Check out our open positions and
                become part of our story.
              </p>
              <button className="bg-white text-primary font-medium py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors">
                View Open Positions
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

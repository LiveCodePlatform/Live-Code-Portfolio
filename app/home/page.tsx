"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Star, Users, Award } from "lucide-react"
import { initScrollColorChange } from "@/lib/scroll-color"

export default function Home() {
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
        <section className="py-32 relative" data-bgcolor="#ffffff" data-textcolor="#000000">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Welcome to <span className="text-primary">ProductX</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-700 max-w-lg">
                  Discover a new way to experience technology with our innovative products and solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="group">
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Link href="/">
                    <Button size="lg" variant="outline">
                      View Landing Page
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Product showcase"
                  width={600}
                  height={600}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
          {/* Background shapes */}
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-slate-50" data-bgcolor="#ffffff" data-textcolor="#000000">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-lg text-slate-600">
                We offer a range of features designed to enhance your experience and productivity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Easy to Use",
                  description: "Our intuitive interface makes it simple to get started and accomplish your goals.",
                  icon: <Check className="w-10 h-10 text-primary" />,
                },
                {
                  title: "Powerful Features",
                  description: "Access advanced capabilities that help you work smarter, not harder.",
                  icon: <Star className="w-10 h-10 text-yellow-500" />,
                },
                {
                  title: "Community Support",
                  description: "Join a thriving community of users who share tips, tricks, and best practices.",
                  icon: <Users className="w-10 h-10 text-emerald-500" />,
                },
                {
                  title: "Regular Updates",
                  description: "Enjoy continuous improvements and new features to enhance your experience.",
                  icon: <Award className="w-10 h-10 text-purple-500" />,
                },
                {
                  title: "Seamless Integration",
                  description: "Connect with your favorite tools and services for a streamlined workflow.",
                  icon: <Check className="w-10 h-10 text-primary" />,
                },
                {
                  title: "Dedicated Support",
                  description: "Get help when you need it from our responsive and knowledgeable support team.",
                  icon: <Star className="w-10 h-10 text-yellow-500" />,
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section className="py-24" data-bgcolor="#000000" data-textcolor="#ffffff">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Featured Products</h2>
              <p className="text-lg text-slate-300">
                Explore our latest innovations designed to transform your digital experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((product) => (
                <div key={product} className="bg-slate-900 rounded-xl overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&text=Product ${product}`}
                      alt={`Product ${product}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">Product {product}</h3>
                    <p className="text-slate-300 mb-4">
                      A revolutionary product designed to enhance your productivity and simplify your workflow.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full text-white border-white hover:bg-white hover:text-black"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-slate-50" data-bgcolor="#ffffff" data-textcolor="#000000">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Customers Say</h2>
              <p className="text-lg text-slate-600">
                Don't just take our word for it. Here's what our customers have to say about their experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  role: "CEO, Tech Company",
                  quote:
                    "ProductX has transformed the way our team works. The intuitive interface and powerful features have significantly improved our productivity.",
                },
                {
                  name: "Jane Smith",
                  role: "Marketing Director",
                  quote:
                    "I've tried many similar products, but none compare to the ease of use and functionality of ProductX. It's become an essential part of our workflow.",
                },
                {
                  name: "Michael Johnson",
                  role: "Freelance Designer",
                  quote:
                    "As a freelancer, I need tools that are reliable and efficient. ProductX has exceeded my expectations in every way. Highly recommended!",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white" data-bgcolor="#ffffff" data-textcolor="#000000">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg mb-8">
                Join thousands of satisfied users who have already transformed their digital experience with ProductX.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-slate-100">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

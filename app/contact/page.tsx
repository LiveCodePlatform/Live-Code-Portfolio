"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"
import { initScrollColorChange } from "@/lib/scroll-color"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Initialize the scroll color change functionality
    const cleanup = initScrollColorChange()

    return () => {
      cleanup()
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="py-24 pt-32 relative" data-bgcolor="#ffffff" data-textcolor="#000000">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg text-slate-600 mb-8">
                Have questions or need assistance? We're here to help you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16" data-bgcolor="#ffffff" data-textcolor="#000000">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-lg mb-8">
                    Have questions about our products or services? We're here to help. Fill out the form and we'll get
                    back to you as soon as possible.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Our Location</h3>
                        <p>123 Innovation Drive, Tech City, TC 12345</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p>+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p>info@yourproduct.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p>Monday - Friday: 9AM - 5PM</p>
                        <p>Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center h-full flex flex-col items-center justify-center">
                      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                      <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                      <p className="text-green-700">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
                      <div>
                        <label htmlFor="name" className="block mb-2 font-medium">
                          Name
                        </label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                      </div>

                      <div>
                        <label htmlFor="email" className="block mb-2 font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block mb-2 font-medium">
                          Subject
                        </label>
                        <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                      </div>

                      <div>
                        <label htmlFor="message" className="block mb-2 font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-slate-50" data-bgcolor="#ffffff" data-textcolor="#000000">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Find Us</h2>
              <div className="bg-slate-200 h-96 rounded-lg flex items-center justify-center">
                <p className="text-slate-600">Interactive Map Would Be Displayed Here</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16" data-bgcolor="#ffffff" data-textcolor="#000000">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    question: "How can I get started with your product?",
                    answer:
                      "Getting started is easy! Simply sign up for a free account on our website and follow the onboarding process. Our intuitive interface will guide you through the setup process.",
                  },
                  {
                    question: "Do you offer customer support?",
                    answer:
                      "Yes, we offer 24/7 customer support via email, chat, and phone. Our dedicated support team is always ready to assist you with any questions or issues you may have.",
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer:
                      "We accept all major credit cards, PayPal, and bank transfers. For enterprise customers, we also offer invoice-based payment options.",
                  },
                  {
                    question: "Can I cancel my subscription at any time?",
                    answer:
                      "You can cancel your subscription at any time from your account settings. There are no cancellation fees or hidden charges.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

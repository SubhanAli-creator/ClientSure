"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, CheckCircle, Star } from "lucide-react"

const benefits = [
  "Booked client meetings delivered to your calendar",
  "Laser-focused ad campaigns crafted for your niche",
  "Dedicated strategist ensuring your brand stays ahead",
  "Scroll-stopping creatives that speak to your audience",
  "Smart analytics with real-time performance tracking",
  "Conversion-first strategy backed by A/B testing",
  "Plans that adapt as your business scales",
  "Deep competitor insights to outsmart the market",
  "Cross-platform growth (Meta, Google, TikTok, LinkedIn)",
  "Weekly strategy sessions to refine and accelerate"
];

const testimonials = [
  {
    name: "James Lee",
    company: "FinTech Flow",
    role: "Head of Sales",
    content: "Before ClientSure, our pipeline was dry. Now it’s overflowing — and we’re hiring more reps to keep up.",
    rating: 5,
  },
  {
    name: "Olivia Martin",
    company: "BrightCloud",
    role: "Marketing Manager",
    content: "What impressed me the most was the consistency — week after week, new qualified leads landed on our calendar without us lifting a finger.",
    rating: 5,
  },
  {
    name: "Daniel Kim",
    company: "LogiChain",
    role: "Founder",
    content: "They didn’t just deliver leads; they delivered growth. Our team now closes faster and more confidently thanks to ClientSure.",
    rating: 5,
  },
  {
    name: "Sophia Patel",
    company: "EduNext",
    role: "CEO",
    content: "ClientSure didn’t just bring us clients — they booked meetings with decision-makers who were ready to buy. We closed $76500 in new business in just 45 days.",
    rating: 5,
  },
  {
    name: "Liam Wright",
    company: "HealthStack",
    role: "CMO",
    content: "From day one, ClientSure felt like an extension of our sales team. The leads were warm, and the calls turned into real revenue fast.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    company: "BuildBetter",
    role: "Director of Partnerships",
    content: "We were skeptical at first, but ClientSure absolutely delivered. It’s the first time our team didn’t have to chase cold leads.",
    rating: 5,
  },
  {
    name: "Noah Davis",
    company: "GreenGrid",
    role: "Operations Lead",
    content: "With ClientSure, we finally have a scalable way to keep our sales team busy with real opportunities.",
    rating: 5,
  },
  {
    name: "Ava Wilson",
    company: "ScaleSpark",
    role: "Sales Manager",
    content: "Every client they booked was a match for our ICP. That kind of precision is rare, and it changed our whole sales strategy.",
    rating: 5,
  },
  {
    name: "Lucas Turner",
    company: "SecureNet",
    role: "VP of Growth",
    content: "Honestly, I wasn’t expecting much — but ClientSure shocked me. The meetings were gold, and so was the service.",
    rating: 5,
  },
  {
    name: "Mia Anderson",
    company: "RetailX",
    role: "Head of Marketing",
    content: "The ROI was crystal clear after the first two weeks. We knew we’d found our new long-term partner.",
    rating: 5,
  },
  {
    name: "Benjamin Hall",
    company: "AutoLoop",
    role: "Business Development Manager",
    content: "ClientSure didn’t just book calls — they helped us close deals. And that’s what really matters.",
    rating: 5,
  },
  {
    name: "Chloe Scott",
    company: "ZenMedia",
    role: "Founder & CEO",
    content: "Working with them was seamless. Clear reporting, great communication, and results that speak for themselves.",
    rating: 5,
  },
  {
    name: "Ethan Roberts",
    company: "CloudCore",
    role: "CTO",
    content: "We closed our biggest deal of the quarter from a lead ClientSure brought in. That says everything.",
    rating: 5,
  },
  {
    name: "Isabella Clark",
    company: "NextWave AI",
    role: "Chief Growth Officer",
    content: "I was blown away by the quality of prospects. These weren’t just names — they were ready to talk business.",
    rating: 5,
  },
  {
    name: "Logan Adams",
    company: "TrendNova",
    role: "Growth Strategist",
    content: "The process was smooth from start to finish. The ClientSure team truly understands B2B sales.",
    rating: 5,
  },
  {
    name: "Aria Moore",
    company: "LeadBridge",
    role: "Client Success Manager",
    content: "We’ve tried in-house outreach and other services — nothing compares to the efficiency of ClientSure.",
    rating: 5,
  },
  {
    name: "Mason White",
    company: "Adfinity",
    role: "Director of Sales",
    content: "ClientSure gave our sales pipeline the fuel it needed. We’re finally scaling with confidence.",
    rating: 5,
  },
  {
    name: "Ella Lewis",
    company: "Convertly",
    role: "Performance Marketing Lead",
    content: "Their system works. It’s that simple. We keep renewing because the leads keep converting.",
    rating: 5,
  },
  {
    name: "Jacob Young",
    company: "OptiMax",
    role: "Revenue Operations Manager",
    content: "ClientSure didn’t just bring us clients — they booked meetings with decision-makers who were ready to buy. We closed $89000 in new business in just 35 days.",
    rating: 5,
  },
  {
    name: "Harper Baker",
    company: "Nexus CRM",
    role: "Co-Founder",
    content: "ClientSure didn’t just deliver leads; they delivered results. Every meeting was a real opportunity.",
    rating: 5,
  },
];


export default function WhyChooseUs() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    },1500)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose ClientSure?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver results that matter, backed by expertise you can trust.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">What Sets Us Apart</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6">
                    &quot;{testimonials[currentTestimonial].content}&quot;
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center gap-2 mt-6">
                <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full bg-transparent">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Rocket, Crosshair, AlarmClock } from "lucide-react"

export default function Careers() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">"Launch in 48 Hours" Package</h2>
          <p className="text-xl mb-12 opacity-90">
            Be part of our company that values innovation, growth, and making a real impact in the business world.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Rocket className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 pr-3">⚡Rapid Setup</h3>
                <p className="text-sm opacity-90">Work with talented professionals in a supportive environment</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Crosshair className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">🎯 Targeted & Ready</h3>
                <p className="text-sm opacity-90">Continuous learning opportunities and clear advancement paths</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <AlarmClock className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 pr-3">🚨 Go Live Fast</h3>
                <p className="text-sm opacity-90">Comprehensive health coverage, flexible work, and more</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={scrollToContact}>
              Launch My 48-Hour Funnel
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              onClick={scrollToContact}
            >
              WHY NOT?
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

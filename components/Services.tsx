import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Handshake, Calendar, Globe, MousePointerClickIcon } from "lucide-react"

const services = [
  {
    icon: Handshake,
    title: "Client Generation",
    description:
      "Consistent lead flow and conversion-focused outreach to grow your business pipeline.",
    features: ["Prospect Identification", "Engagement Campaigns", "Conversion Enablement"],
  },
  {
    icon: Calendar,
    title: "Appointment Setting",
    description: "Seamless scheduling solutions that connect prospects with your team, increasing conversions and saving time.",
    features: ["1 on 1 Client Talk", "Real-Time Calendar Integration", "Converting Follow-Ups"],
  },
  {
    icon: Globe,
    title: "Web and SEO",
    description: "Optimized visibility and performance to attract, engage, and convert your ideal audience.",
    features: ["Improved organic visibility", "Higher search rankings", "Increased qualified traffic"],
  },
  {
    icon: MousePointerClickIcon,
    title: "Google and Meta Ads",
    description: "Targeted ad campaigns designed to maximize reach, clicks, and ROI across top platforms.",
    features: [
  "Campaign Strategy",
  "Ad Creative & Management",
  "Performance Optimization"
],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to protect, optimize, and accelerate your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

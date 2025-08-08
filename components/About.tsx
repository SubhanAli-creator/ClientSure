import { DollarSign, Factory, Clock, TrendingUp } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About ClientSure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over a decade, we&apos;ve been the trusted partner for businesses seeking comprehensive solutions that
              drive growth and ensure security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Success is Our Mission</h3>
              <p className="text-gray-600 mb-6 ">
                At ClientSure, we help service-based businesses consistently get new, high-quality clients without wasting time on cold outreach or irrelevant contacts. Our multi-platform outreach connects you with the right people, and every step is tailored to your budget.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">2x ROI in 60 Days Guarantee</h4>
                <p className="text-sm text-gray-600">Not magic, just momentum</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Factory className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Industry-Specific Targeting</h4>
                <p className="text-sm text-gray-600">Results that make reports exciting again.</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Real-Time Client Updates</h4>
                <p className="text-sm text-gray-600">Industry recognized excellence</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Growth Focused</h4>
                <p className="text-sm text-gray-600">Solutions that scale with you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

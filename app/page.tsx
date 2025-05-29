import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CountdownTimer } from "@/components/countdown-timer"
import { Wrench, Car, Gauge, Snowflake, Zap, Shield, Phone, MapPin, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Professional Auto Repair Services",
  description:
    "Expert automotive repair services including engine repair, oil changes, AC service, brake repair, and more. Professional mechanics with years of experience.",
}

export default function HomePage() {
  const services = [
    {
      icon: Wrench,
      title: "Engine Repair",
      description: "Complete engine diagnostics and repair services",
      color: "text-blue-600",
    },
    {
      icon: Car,
      title: "Oil Change",
      description: "Quick and professional oil change services",
      color: "text-orange-600",
    },
    {
      icon: Snowflake,
      title: "AC Service",
      description: "Air conditioning repair and maintenance",
      color: "text-cyan-600",
    },
    {
      icon: Gauge,
      title: "Brake Repair",
      description: "Complete brake system inspection and repair",
      color: "text-red-600",
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Automotive electrical system diagnostics",
      color: "text-yellow-600",
    },
    {
      icon: Shield,
      title: "Inspection",
      description: "Comprehensive vehicle safety inspections",
      color: "text-green-600",
    },
  ]

  const features = [
    "Certified Professional Mechanics",
    "State-of-the-Art Equipment",
    "Quality Parts & Materials",
    "Competitive Pricing",
    "Quick Turnaround Time",
    "Customer Satisfaction Guarantee",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            


            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional
              <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Auto Repair
              </span>
              Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Expert automotive care with certified mechanics, quality parts, and exceptional service. Your trusted
              partner for all vehicle maintenance and repair needs.
            </p>

            <div className="mb-6">
              <CountdownTimer />
            </div>

            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-700 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3" asChild>
                <a href="tel:+923366673332">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 0336-6673332
                </a>
              </Button>

              <a href="https://www.google.com/maps/search/?api=1&query=Block+26+R1+Samsani+Road+Near+Shadewal+Chowk+Johar+Town+Lahore"
                        target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="bg-purple-700 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
              >
                <MapPin className="mr-2 h-5 w-5" />
                visit our workshop
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose iCarCare?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine expertise, quality, and customer service to provide the best automotive care experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-900 dark:text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive automotive repair and maintenance services to keep your vehicle running smoothly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmad",
                text: "Excellent service! They fixed my engine problem quickly and at a fair price. Highly recommended!",
                rating: 5,
              },
              {
                name: "Ayesha",
                text: "Professional team with great expertise. My car runs like new after their brake repair service.",
                rating: 5,
              },
              {
                name: "Talha",
                text: "Fast and reliable service. They explained everything clearly and finished ahead of schedule.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900 dark:text-white">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Service Your Vehicle?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for professional automotive repair services you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3" asChild>
              <a href="tel:+923366673332">
                <Phone className="mr-2 h-5 w-5" />
                Call 0336-6673332
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
              asChild
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

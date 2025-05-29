import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Wrench,
  Car,
  Gauge,
  Snowflake,
  Zap,
  Shield,
  Cog,
  Battery,
  Fuel,
  FootprintsIcon as Tire,
  Phone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Automotive Services",
  description:
    "Comprehensive automotive repair and maintenance services including engine repair, oil changes, brake service, AC repair, electrical diagnostics, and more.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: "Engine Repair & Diagnostics",
      description: "Complete engine diagnostics, repair, and rebuilding services using state-of-the-art equipment.",
      features: ["Computer diagnostics", "Engine rebuilding", "Performance tuning", "Timing belt replacement"],
    },
    {
      icon: Car,
      title: "Oil Change & Lubrication",
      description: "Quick and professional oil change services with quality motor oil and filters.",
      features: ["Conventional oil", "Synthetic oil", "Filter replacement", "Fluid level check"],
    },
    {
      icon: Gauge,
      title: "Brake Service & Repair",
      description: "Complete brake system inspection, repair, and replacement for optimal safety.",
      features: ["Brake pad replacement", "Rotor resurfacing", "Brake fluid flush", "ABS diagnostics"],
    },
    {
      icon: Snowflake,
      title: "AC & Heating Service",
      description: "Air conditioning and heating system repair, maintenance, and refrigerant service.",
      features: ["AC recharge", "Compressor repair", "Heater core service", "Climate control diagnostics"],
    },
    {
      icon: Cog,
      title: "Transmission Service",
      description: "Transmission repair, maintenance, and fluid service for smooth operation.",
      features: ["Transmission flush", "Clutch replacement", "Gear diagnostics", "Transmission rebuild"],
    },
    {
      icon: Fuel,
      title: "Fuel System Service",
      description: "Fuel system cleaning, repair, and maintenance for optimal engine performance.",
      features: ["Fuel injection cleaning", "Fuel pump replacement", "Fuel filter service", "System diagnostics"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive automotive repair and maintenance services to keep your vehicle running safely and
              efficiently. Expert service you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-br from-blue-600 to-orange-600 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{service.price}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                      <a href="tel:+923366673332">
                        <Phone className="mr-2 h-4 w-4" />
                        Get Quote
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Service Not Listed?</h2>
          <p className="text-xl mb-8 text-blue-100">
            We offer many additional automotive services. Contact us to discuss your specific needs.
          </p>
          <Button size="lg" variant="outline" className="bg-black border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3" asChild>
            <a href="tel:+923366673332">
              <Phone className="mr-2 h-5 w-5" />
              Call 0336-6673332
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

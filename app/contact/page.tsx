import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact iCarCare automotive workshop for professional car repair services. Call, email, or visit our location for expert automotive care.",
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "0336-6673332",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: "carcare2058@gmail.com",
      description: "Send us your questions anytime",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Block 26 R1 Samsani Road Near Shadewal Chowk Johar Town Lahore",
      description: "Visit our workshop location",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Sun: 9:00 AM - 11:00 PM",
      description: "We're open 7 days a week",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our expert team for all your automotive repair needs. We're here to help keep your
              vehicle running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="bg-gradient-to-br from-blue-600 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">{info.details}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}

            {/* Map and Quick Actions */}
            <div className="space-y-8">
              {/* Interactive Google Map */}
              <Card>
                <CardHeader>
                  <CardTitle>Find Our Workshop</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.8547441935953!2d74.31234661515396!3d31.58239998133147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904cf8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sBlock%2026%20R1%20Samsani%20Road%2C%20Johar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1642784567890!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                      title="iCarCare Workshop Location"
                    ></iframe>
                    <div className="absolute bottom-2 right-2">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Block+26+R1+Samsani+Road+Near+Shadewal+Chowk+Johar+Town+Lahore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Block 26 R1 Samsani Road Near Shadewal Chowk Johar Town Lahore
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Block+26+R1+Samsani+Road+Near+Shadewal+Chowk+Johar+Town+Lahore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <MapPin className="h-4 w-4 mr-1" />
                      Get Directions
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-blue-500 text-white hover:bg-blue-700 text-white" asChild>
                    <a href="tel:+923366673332">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now: 0336-6673332
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-green-500 text-white hover:bg-green-700 hover:text-white"
                    asChild
                  >
                    <a href="https://wa.me/923366673332" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Chat
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-gray-500 text-white-700 hover:bg-gray-700 hover:text-white"
                    asChild
                  >
                    <a href="mailto:carcare2058@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Emergency Service */}
              <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-red-800 dark:text-red-200">Emergency Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 dark:text-red-300 mb-4">
                    Need immediate roadside assistance or emergency repair?
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                    <a href="tel:+923366673332">
                      <Phone className="mr-2 h-4 w-4" />
                      Emergency: 03366673332
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

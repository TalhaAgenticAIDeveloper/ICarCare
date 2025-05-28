import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Car, Calendar, CheckCircle, Phone } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Services Done - Completed Car Repairs",
  description:
    "View our completed automotive repair services and satisfied customers. See the quality work we've done on various vehicles at iCarCare workshop.",
}

export default function ServicesDonePage() {
  const servicedCars = [
    {
      id: 1,
      carName: "Toyota Corolla 2020",
      numberPlate: "LHR-1234",
      // image: "/placeholder.svg?height=300&width=400",
      image: "/public/images/corolla.png?height=300&width=400",
      dateServiced: "2024-01-15",
      services: ["Oil Change", "Brake Repair", "Engine Diagnostic", "AC Service"],
      customerName: "Ahmad Ali",
      status: "Completed",
    },
    {
      id: 2,
      carName: "Honda Civic 2019",
      numberPlate: "ISB-5678",
      image: "/placeholder.svg?height=300&width=400",
      dateServiced: "2024-01-12",
      services: ["Transmission Service", "Tire Rotation", "Battery Replacement"],
      customerName: "Fatima Khan",
      status: "Completed",
    },
    {
      id: 3,
      carName: "Suzuki Alto 2021",
      numberPlate: "KHI-9012",
      image: "/placeholder.svg?height=300&width=400",
      dateServiced: "2024-01-10",
      services: ["Engine Repair", "Electrical System", "Fuel System Service"],
      customerName: "Muhammad Hassan",
      status: "Completed",
    },
    {
      id: 4,
      carName: "Toyota Prius 2018",
      numberPlate: "LHR-3456",
      image: "/placeholder.svg?height=300&width=400",
      dateServiced: "2024-01-08",
      services: ["Hybrid Battery Service", "Brake Fluid Flush", "Vehicle Inspection"],
      customerName: "Ayesha Malik",
      status: "Completed",
    },
    {
      id: 5,
      carName: "Honda City 2022",
      numberPlate: "RWP-7890",
      image: "/placeholder.svg?height=300&width=400",
      dateServiced: "2024-01-05",
      services: ["Oil Change", "AC Repair", "Tire Service"],
      customerName: "Ali Raza",
      status: "Completed",
    },
    {
      id: 6,
      carName: "Suzuki Cultus 2020",
      numberPlate: "LHR-2468",
      image: "/placeholder.svg?height=300&width=400",
      dateServiced: "2024-01-03",
      services: ["Engine Diagnostic", "Brake Repair", "Electrical System", "Oil Change"],
      customerName: "Zainab Ahmed",
      status: "Completed",
    },
    {
      id: 7,
      carName: "Toyota Vitz 2017",
      numberPlate: "ISB-1357",
      image: "/placeholder.svg?height=300&width=400",
      dateServiced: "2024-01-01",
      services: ["Transmission Repair", "AC Service", "Battery Replacement"],
      customerName: "Usman Sheikh",
      status: "Completed",
    },
    {
      id: 8,
      carName: "Honda BR-V 2021",
      numberPlate: "LHR-9753",
      image: "/placeholder.svg?height=300&width=400",
      dateServiced: "2023-12-28",
      services: ["Engine Repair", "Brake Service", "Tire Rotation", "Vehicle Inspection"],
      customerName: "Sana Tariq",
      status: "Completed",
    },
  ]

  const getServiceColor = (service: string) => {
    const colors = {
      "Oil Change": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Brake Repair": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      "Engine Diagnostic": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "Engine Repair": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "AC Service": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
      "AC Repair": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
      "Transmission Service": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Transmission Repair": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Tire Rotation": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Tire Service": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Battery Replacement": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      "Electrical System": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      "Fuel System Service": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
      "Vehicle Inspection": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
      "Brake Fluid Flush": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      "Brake Service": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      "Hybrid Battery Service": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    }
    return colors[service as keyof typeof colors] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services Done</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Take a look at our completed automotive repair services and satisfied customers. Quality work that speaks
              for itself.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 mb-2">{servicedCars.length}+</div>
              <div className="text-gray-600 dark:text-gray-300">Cars Serviced</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-300">Service Types</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Done Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Recently Completed Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the vehicles we've recently serviced with professional care and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicedCars.map((car) => (
              <Card
                key={car.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800"
              >
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={car.image || "/placeholder.svg"}
                      // src={car.image || "/images/corolla.png"}
                      alt={`${car.carName} - ${car.numberPlate}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600 text-white">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {car.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {car.carName}
                      </CardTitle>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Car className="h-4 w-4 mr-2" />
                        <span className="font-medium">{car.numberPlate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Serviced on {new Date(car.dateServiced).toLocaleDateString()}</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>Customer:</strong> {car.customerName}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Services Performed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {car.services.map((service, index) => (
                        <Badge key={index} variant="secondary" className={`text-xs ${getServiceColor(service)}`}>
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white" asChild>
                      <a href="tel:+923366673332">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Us
                      </a>
                    </Button>
                   
                  </div>
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
            Join our satisfied customers and experience professional automotive care at iCarCare.
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
              <a href="/contact">Book Service</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

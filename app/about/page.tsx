import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about iCarCare automotive workshop - our experienced team, mission, and commitment to quality automotive repair services.",
}

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "5000+" },
    { icon: Clock, label: "Years Experience", value: "15+" },
    { icon: Wrench, label: "Services Completed", value: "25000+" },
    { icon: Award, label: "Certified Mechanics", value: "8" },
  ]

  const team = [
    {
      name: "Iftikhar Ahmad",
      role: "Manager",
      experience: "5 years",
      specialties: ["Team Leadership", "Financial Management", "Vendor Coordination"],
    },
    {
      name: "Muhammad Shahzad",
      role: "Senior Technician",
      experience: "15 years",
      specialties: ["Electrical Systems", "AC Repair", "Brake Service","and many more"],
    },
    
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About iCarCare</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted automotive repair partner with over 15 years of experience providing quality service and
              expert care for all vehicle types.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2009, iCarCare began as a small family-owned automotive repair shop with a simple mission:
                  to provide honest, reliable, and professional automotive services to our community.
                </p>
                <p>
                  Over the years, we've grown from a two-person operation to a team of eight certified mechanics, but
                  our core values remain the same. We believe in treating every customer's vehicle as if it were our
                  own, using only quality parts and proven repair methods.
                </p>
                <p>
                  Today, we're proud to be the trusted automotive repair partner for thousands of customers, offering
                  comprehensive services from routine maintenance to complex engine repairs.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-orange-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-6">
                To provide exceptional automotive repair services with integrity, expertise, and customer satisfaction
                as our top priorities.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-2">
                <li>• Honesty and transparency in all services</li>
                <li>• Quality workmanship and attention to detail</li>
                <li>• Fair and competitive pricing</li>
                <li>• Continuous learning and improvement</li>
                <li>• Building lasting customer relationships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our certified mechanics bring decades of combined experience and expertise to every repair.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{member.experience} of experience</p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Specialties:</p>
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full mr-1 mb-1"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
